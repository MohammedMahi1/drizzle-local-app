import React, { useState } from 'react'
import { FlatList } from 'react-native'
import TaskItem from '../../components/content/TaskItem';
import { useAppSelector } from '../../../hooks/useApp';



const Home = () => {
    const task = useAppSelector((state) => state.task)
    // const dt = 
    const convertedData = Object.keys(task).map((e) => (
        {
            title: e,
            isOpen: false,
            data: task
        }))
    const [data, setData] = useState(convertedData)
    const setOpen = (title: string) => {
        setData(
            data.map((e) => (
                {
                    ...e,
                    isOpen: e.title === title ? !e.isOpen : false,
                }
            )))
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "space-between" }}
            data={data}
            renderItem={({ item }) =>
                <TaskItem title={item.title} key={item.title} isOpen={item.isOpen} data={item.data}
                    setOpen={setOpen}
                />
            }
        />
    )
}

export default Home