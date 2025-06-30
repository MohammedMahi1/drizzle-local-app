import React, { useEffect, useRef, useState } from 'react'
import { Pressable, PressableProps, Text, TextInput, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Checkbox from 'expo-checkbox';
import { twMerge } from "tailwind-merge"
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp';
import { openDay } from '../../store/slices/openSlice';
import { useTask } from '../../../hooks/useTask';
import * as schema from "../../../db/schema"
import { Button } from '../ui/Button';
type TaskProps = {
  title: string,
  isOpen: boolean
  setOpen: (title: string) => void,
  data: {
    id: number,
    day: string,
    isChecked: boolean,
    task: string
  }[]

}
type TaskTriggerProps = {
  title: string
} & PressableProps

const TaskTrigger = ({ title, ...rest }: TaskTriggerProps) => {
  return (
    <Pressable className='px-8 py-16' {...rest}>
      <Text className='text-white text-6xl font-semibold'>{title}</Text>
    </Pressable>
  )
}


type TaskItem = {
  task: string;
  isChecked: boolean;
  id: number,
  day: string
};

export const Tasks = ({ task, id, isChecked, day }: TaskItem) => {
  const [isCh, setCh] = useState(false);
  const { deleteTask, updateTask } = useTask()
  const [lonp, setLonp] = useState(false)
  const [putVal, setPutVal] = useState(task)
  const putRef = useRef(null)
  return (
    <View className=' flex flex-row gap-4 pb-8 items-center justify-start'>
      <Checkbox
        disabled={false}
        value={isCh}
        onValueChange={setCh}
        style={{
          width: 26,
          height: 26
        }}
        color={isCh ? '#ff6a00' : "#333333"}
      />

      <Pressable
        onLongPress={() => { console.log("pressed") }}
        className='fex flex-row justify-between min-w-fit items-center gap-5'
      >
        <View>
          <Pressable
            onLongPress={() => { setLonp(true) }}
          >
            <TextInput
              ref={putRef}
              value={putVal}
              onChange={(e) => setPutVal(e.nativeEvent.text)}
              onSubmitEditing={() => {
                putVal === "" ?
                  console.log("noononon")
                  :
                  updateTask({
                    day: day,
                    task: putVal
                  }, id)
              }}
              className={twMerge('text-white text-2xl relative z-0')}
            />
          </Pressable>
          <View className={twMerge('absolute w-full h-1 !z-999 top-[50%] left-0', isCh && "bg-primary")} />
        </View>
        {
          lonp &&
          <Pressable className=' bg-red rounded-full w-6 h-6 flex items-center justify-center'
            onPress={() => deleteTask(id)}
          >
            <Text className='text-white'>X</Text>
          </Pressable>
        }
      </Pressable>
    </View>
  )
}



const TaskItem = ({ title, isOpen, setOpen, data }: TaskProps) => {
  const [put, setPut] = useState("")
  const refPut = useRef<TextInput>(null)
  const { addTask, getTask, deleteTask } = useTask()
  const openHandler = (e: string) => {
    setOpen(e)
  }
  const addData = (data: schema.Todo) => {
    if (!data || data === null || data === undefined || data.task === "") {
      console.log("enter your data")
    } else {
      addTask(data).then(() => {
        refPut.current?.clear()
        setPut("")
      })
    }
  }
  return (
    <View className='border-b-2 border-disable'>
      <TaskTrigger title={title} onPress={() => openHandler(title)} />
      {
        isOpen &&
        <View className='px-8 pb-8'>
          <View className='flex flex-col'>
            {
              data.map((e) => {
                const fff = e.day.toLowerCase() === title.toLowerCase();
                if (fff) {
                  return <Tasks task={e.task} key={e.id} id={e.id} isChecked={e.isChecked} day={e.day} />
                }
              })
            }
          </View>
          <TextInput
            ref={refPut}
            onChange={
              (e) => setPut(e.nativeEvent.text)
            }
            value={put}
            returnKeyType='done'
            onSubmitEditing={() => {
              addData(
                {
                  day: title,
                  task: put,
                }
              );
            }}
            submitBehavior='submit'
            placeholder='Add a new task...'
            className='placeholder:text-disable text-xl dark:text-white'
          />
        </View>
      }
    </View>
  )
}

export default TaskItem