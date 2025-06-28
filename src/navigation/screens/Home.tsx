import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import TaskItem from '../../components/content/TaskItem';
import { useAppSelector } from '../../../hooks/useApp';
import { useTask } from '../../../hooks/useTask';
import { Button } from '../../components/ui/Button';

const Home = () => {
    const task = useAppSelector((state) => state.task)
    const { addTask, getTask } = useTask()

    const [get, setGet] = useState<Array<object>>()
    useEffect(() => {
        (async () => {
            const get = await getTask()
            setGet(get)
        })()
    }, [])
    const getData = async () => {
        const get = await getTask()
        console.log(get);
    }
    const addData = () => {
        const get = addTask()
        console.log(get);
    }
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
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: "space-between" }}
                data={data}
                renderItem={({ item }) =>
                    <TaskItem
                        title={item.title}
                        key={item.title}
                        isOpen={item.isOpen}
                        data={get}
                        setOpen={setOpen}
                    />
                }
            />
            <Button onPress={addData}>add</Button>
            <Button onPress={getData}>obbijb</Button>
        </>
    )
}

export default Home