import React from 'react'
import { FlatList } from 'react-native'
import TaskItem from '../../components/content/TaskItem';
import { useAppSelector } from '../../../hooks/useApp';






const Home = () => {
    const task = useAppSelector((state)=>state.task)

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: "space-between" }}
                data={Object.keys(task)}
                renderItem={({ item }) => <TaskItem title={item} key={item} />}
            />
            {/* <Button onPress={updateData}>Update tasks</Button> */}
        </>

    )
}

export default Home