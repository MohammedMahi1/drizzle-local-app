import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";
import { eq } from "drizzle-orm";

export function useTask() {
    const db = useSQLiteContext();

    const drizzleDb = drizzle(db, { schema });

    //Get query hook
    const getTask = async () => {
      return await drizzleDb.select().from(schema.todo);
    };

    //Add query hook
    const addTask = async(data:schema.Todo) => {
       await drizzleDb.insert(schema.todo).values(data).then(() => {
            console.log("data added");
        }).catch((err) => {
            console.log(err);
        })
    }

    //Delete query hook
    const deleteTask = async ( id: number) => {
        return await drizzleDb.delete(schema.todo).where(eq(schema.todo.id, id)).then((e) => console.log("deleted user : " + id));
    };

    //Update query hook
    const updateTask = async ( data:schema.Todo,id:number) => {
        return await drizzleDb.update(schema.todo)
            .set(data)
            .where(eq(schema.todo.id, id)).then((e)=>{
                console.log("Task updated");
            });
    };


    //Get one query hook
    const findTask = async (table: any, id: number) => {
        const ddd =  await drizzleDb.select().from(table).where(eq(table.id, id));
        return ddd[0].id
        
    };


    return {
        getTask,
        addTask,
        deleteTask,
        updateTask,
        findTask
    };
}