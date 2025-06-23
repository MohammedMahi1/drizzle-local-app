import React from 'react'
import { FlatList} from 'react-native'
import TaskItem from '../../components/content/TaskItem';
const dat = [
    { id: 1, day: "monday" },
    { id: 2, day: "tuesday" },
    { id: 3, day: "wednesday" },
    { id: 4, day: "thursday" },
    { id: 5, day: "friday" },
    { id: 6, day: "saturday" },
    { id: 7, day: "sunday" },
];


const Home = () => {
    // const db = useSQLiteContext();
    // const drizzleDb = drizzle(db, { schema });
    // const getDb = async () => {
    //     const result = await drizzleDb.select().from(schema.users);
    //     console.log(result);

    // }
    // const addDb = () => {
    //     drizzleDb.insert(schema.users).values({
    //         name: `User number ${Math.floor(Math.random() * 1000)}`,
    //     }).then(()=>console.log("you add new user"))

    // }
    // const deleteDb = async() => {
    //   await drizzleDb.delete(schema.users).then(()=>console.log("Users deleted"))
    // }
    return(
                <FlatList
                    // style={{flex:1}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: "space-between" }}
                    data={dat}
                    renderItem={({ item }) => <TaskItem title={item.day} key={item.id} />}
                />
        )
}

export default Home

// <Button onPress={getDb} >Get Users</Button>
// <Button onPress={addDb}>Add User</Button>
// <Button onPress={deleteDb}>Delete User</Button>