import React, { useEffect, useState } from 'react'
import { Pressable, PressableProps, Text, TextInput, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Checkbox from 'expo-checkbox';
type TaskProps = {
  title: string
}
type TaskTriggerProps = {
  title: string
} & PressableProps

export const data = [
  {
    id: 1,
    task: "React native",
    isChecked: false
  },
  {
    id: 2,
    task: "Laravel 11+",
    isChecked: false
  },
  {
    id: 3,
    task: "Next js",
    isChecked: false
  },
  {
    id: 4,
    task: "ORM Drizzle",
    isChecked: false
  }
]


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

export const Tasks = ({ task, isChecked }: TaskItem) => {
  const [isCh, setCh] = useState(false);
  return (
    <View className=' flex flex-row gap-4'>
      <Checkbox
        disabled={false}
        value={isCh}
        onValueChange={setCh}
        color={isCh ? '#ff6a00' : "#333333"}
      />
      <Text className={'text-white text-xl'}>{task}</Text>
    </View>
  )
}



const TaskItem = ({ title }: TaskProps) => {
  const [isOpen, setIsOpen] = useState(true)
  // const date = new Date().toLocaleDateString("en-Us",{
  //     weekday:'long'
  // })
  // // console.log(date);
  return (
    <View className='border-b-2 border-white'>

      <TaskTrigger title={title} onPress={() => setIsOpen(!isOpen)} />
      {
        isOpen &&
        <View className='px-8 pb-8'>
        <FlatList
        className='pb-6'
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{ justifyContent: "space-between" }}
        data={data}
        renderItem={({ item }) => <Tasks task={item.task} key={item.id} isChecked={item.isChecked} />}
        />
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