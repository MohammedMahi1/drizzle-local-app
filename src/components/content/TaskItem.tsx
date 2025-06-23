import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
type TaskProps = {
  title: string
}

const data = [
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
        id: 3,
        task: "ORM Drizzle",
        isChecked: false
      }
]


const TaskTrigger = ({ title }: TaskProps) => {
  return (
    <Pressable className='px-8 py-16'>
      <Text className='text-white text-7xl font-semibold'>{title}</Text>
    </Pressable>
  )
}


type TaskItem = {
  id: number;
  task: string;
  isChecked: boolean;
};

const Tasks = ({ task, isChecked,id }: TaskItem) => {
  return (
    <View>
      <Text className='text-white'>{id}</Text>
      <Text className='text-white'>{task}</Text>
      <Text className='text-white'>
        {
          isChecked ? "checked" : "not checked"
        }
      </Text>
    </View>
  )
}

const TaskItem = ({ title }: TaskProps) => {
  return (
    <View className='border-b-2 border-white'>
      <TaskTrigger title={title} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "space-between" }}
        data={data}
        renderItem={({ item }) => <Tasks task={item.task} key={item.id} id={item.id} isChecked={item.isChecked} />}
      />
    </View>
  )
}

export default TaskItem