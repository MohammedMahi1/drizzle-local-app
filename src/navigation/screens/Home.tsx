import React from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/ui/Container'
import { useSQLiteContext } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '../../../db/schema';
import { Button } from '../../components/ui/Button';

const Home = () => {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    const getDb = async () => {
        const result = await drizzleDb.select().from(schema.users);
        console.log(result);

    }
    const addDb = () => {
        drizzleDb.insert(schema.users).values({
            name: `User number ${Math.floor(Math.random() * 1000)}`,
        }).then(()=>console.log("you add new user"))

    }
    const deleteDb = async() => {
      await drizzleDb.delete(schema.users).then(()=>console.log("Users deleted"))
    }
    return (
        <Container>
            <Text style={{ color: "#fff" }}>Home</Text>
            <Button onPress={getDb} >Get Users</Button>
            <Button onPress={addDb}>Add User</Button>
            <Button onPress={deleteDb}>Delete User</Button>
        </Container>
    )
}

export default Home