import React, { useEffect, useState } from 'react'
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
  id: number
};

export const Tasks = ({ task, id, isChecked }: TaskItem) => {
  const [isCh, setCh] = useState(false);
  const { deleteTask } = useTask()
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
      <Button onPress={() => deleteTask(id)}>delete</Button>

      <View>
        <Text className={twMerge('text-white text-2xl relative z-0')}>
          {task}
        </Text>
        <View className={twMerge('absolute w-full h-1 !z-999 top-[50%] left-0', isCh && "bg-primary")} />
      </View>
    </View>
  )
}



const TaskItem = ({ title, isOpen, setOpen, data }: TaskProps) => {
  const [put, setPut] = useState("")
  const { addTask, getTask, deleteTask } = useTask()
  const openHandler = (e: string) => {
    setOpen(e)
  }
  const addData = (data: schema.Todo) => {
    if (!data || data === null || data === undefined || data.task === "") {
      console.log("enter your data")
    } else {
      addTask(data)
    }
  }
  return (
    <View className='border-b-2 border-white'>

      <TaskTrigger title={title} onPress={() => openHandler(title)} />
      {
        isOpen &&
        <View className='px-8 pb-8'>
          <View className='flex flex-col'>
            {
              data.map((e) => {
                const fff = e.day.toLowerCase() === title.toLowerCase();
                if (fff) {
                  return <Tasks task={e.task} key={e.id} id={e.id} isChecked={e.isChecked} />
                }
              })
            }
          </View>
          <TextInput
            onChange={(e) => setPut(e.nativeEvent.text)}
            returnKeyType='done'
            onSubmitEditing={() => {
              addData(
                {
                  day: title,
                  task: put,
                }
              )

            }}
            placeholder='Add a new task...'
            className='placeholder:text-disable text-xl dark:text-white'
          />
        </View>
      }
    </View>
  )
}

export default TaskItem