import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Container from '../../components/ui/Container'
import { useSQLiteContext } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '../../../db/schema';
import { Button } from '../../components/ui/Button';
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
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    const getDb = async () => {
        const result = await drizzleDb.select().from(schema.monday);
        console.log(result);

    }
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
            <Button onPress={getDb} >Get Users</Button>
            <Button onPress={addDb}>Add User</Button>
            <Button onPress={deleteDb}>Delete User</Button>
            </>
    )
}

export default Home


{}