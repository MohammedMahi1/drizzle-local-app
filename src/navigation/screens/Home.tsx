import React from 'react'
import { FlatList } from 'react-native'
import * as schema from "../../../db/schema"
import { Button } from '../../components/ui/Button';
import TaskItem from '../../components/content/TaskItem';
import { useTask } from '../../../hooks/useTask';

const data = [
    { id: 1, day: "monday" },
    { id: 2, day: "tuesday" },
    { id: 3, day: "wednesday" },
    { id: 4, day: "thursday" },
    { id: 5, day: "friday" },
    { id: 6, day: "saturday" },
    { id: 7, day: "sunday" },
];

const Home = () => {
const {addTask,getTask}= useTask()
    const addData = ()=>{
        addTask(schema.dailyTask,{
            task_detail:"React native"
        })
    }
    const getData = ()=>{
        getTask(schema.dailyTask)
    }
    return (
<>
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "space-between" }}
            data={data}
            renderItem={({ item }) => <TaskItem title={item.day} key={item.id} />}
        />
        <Button onPress={addData}>Get tasks</Button>
</>

    )
}

export default Home