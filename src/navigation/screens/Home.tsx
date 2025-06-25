import React from 'react'
import { FlatList } from 'react-native'
import TaskItem from '../../components/content/TaskItem';
import { useAppSelector } from '../../../hooks/useApp';






const Home = () => {
    const data = useAppSelector((state)=>state.task)
console.log(data);

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: "space-between" }}
                data={Object.keys(data)}
                renderItem={({ item }) => <TaskItem title={item} key={item} />}
            />
            {/* <Button onPress={updateData}>Update tasks</Button> */}
        </>

    )
}

export default Home