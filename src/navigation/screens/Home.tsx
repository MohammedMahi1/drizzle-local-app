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
    const { addTask, getTask, deleteTask, updateTask, findTask } = useTask()

    const addData = async() => {
        const idd = findTask(schema.dailyTask, 6)
         addTask(schema.day, {
            daily_task_id: await idd
        })
    }
    const getData = () => {
        getTask(schema.day)
    }
    const deleteData = () => {
        deleteTask(schema.day, 1)
    }
    const updateData = () => {
        updateTask(schema.dailyTask, {
            task_detail: "React native."
        }, 5)
    }
    const findData = () => {
        findTask(schema.dailyTask, 5)
    }
    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: "space-between" }}
                data={data}
                renderItem={({ item }) => <TaskItem title={item.day} key={item.id} />}
            />
            <Button onPress={getData}>Get tasks</Button>
            <Button onPress={addData}>add tasks</Button>
            <Button onPress={findData}>find tasks</Button>
            <Button onPress={deleteData}>del tasks</Button>
            {/* <Button onPress={updateData}>Update tasks</Button> */}
        </>

    )
}

export default Home