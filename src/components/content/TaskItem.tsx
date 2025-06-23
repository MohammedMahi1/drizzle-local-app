import React from 'react'
import { Text, View } from 'react-native'
type TaskProps = {
  title:string
}
const TaskItem = ({title}:TaskProps) => {
  return (
    <View>
      <Text className='text-white text-3xl pb-4'>{title}</Text>
    </View>
  )
}

export default TaskItem