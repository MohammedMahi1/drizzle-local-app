import React from 'react'
import { FlatList} from 'react-native'
import * as schema from '../../../db/schema';
import TaskItem from '../../components/content/TaskItem';
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


    const addDb = () => {
        drizzleDb.insert(schema.monday).values({
            task: `Task number ${Math.floor(Math.random() * 1000)}`,
            isChecked:true
        }).then(() => console.log("you add new user"))

    }
    const deleteDb = async () => {
        await drizzleDb.delete(schema.monday).then(() => console.log("Task deleted"))
    }
    return (
        <>
        <FlatList
            // style={{flex:1}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: "space-between" }}
            data={data}
            renderItem={({ item }) => <TaskItem title={item.day} key={item.id} />}
            />
            </>
    )
}

export default Home


{}