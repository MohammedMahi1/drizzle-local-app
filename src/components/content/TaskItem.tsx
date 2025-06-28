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
};

export const Tasks = ({  task, isChecked }: TaskItem) => {
  const [isCh, setCh] = useState(false);
  return (
    <View className=' flex flex-row gap-4'>
      <Checkbox
        disabled={false}
        value={isCh}
        onValueChange={setCh}
        color={isCh ? '#ff6a00' : "#333333"}
      />
      <View>
        <View className={twMerge('absolute w-full h-1 z-999 top-[50%] left-0', isCh && "bg-primary")} />
        <Text className={twMerge('text-white text-xl relative', isCh && "line-through")}>
          {task}
        </Text>
      </View>
    </View>
  )
}



const TaskItem = ({ title, isOpen, setOpen, data }: TaskProps) => {
  // const date = new Date().toLocaleDateString("en-Us",{
  //     weekday:'long'
  // })
  // // console.log(date);


  const openHandler = (e: string) => {
    setOpen(e)
  }

  const hhh = (title: string) => {
    const hh = data.filter(e => (
      e.day.toLowerCase() === title.toLowerCase()
    ))
    return hh
  }
  return (
    <View className='border-b-2 border-white'>

      <TaskTrigger title={title} onPress={() => openHandler(title)} />
      {
        isOpen &&
        <View className='px-8 pb-8'>
          {
            data.map((e)=>{
             const fff = e.day.toLowerCase() === title.toLowerCase();
             if (fff) {
              return <Tasks task={e.task} key={e.id} isChecked={e.isChecked} />
             }
            })
          }
          <TextInput
            placeholder='Add a new task...'
            className='placeholder:text-disable text-xl dark:text-white'
          />
        </View>
      }
    </View>
  )
}

export default TaskItem