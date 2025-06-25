import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";
import { eq } from "drizzle-orm";

export function useTask() {
    const db = useSQLiteContext();

    const drizzleDb = drizzle(db, { schema });

    //Get query hook
    const getTask = async (table: any) => {
        const dd = await drizzleDb.select().from(table);
       return dd
    };

    //Add query hook
    const addTask = (table: any, data: object) => {
        drizzleDb.insert(table).values(data).then(() => {
            console.log("Data added");
        }).catch((err) => {
            console.log(err);
        });
    };

    //Delete query hook
    const deleteTask = async (table: any, id: number) => {
        return await drizzleDb.delete(table).where(eq(table.id, id)).then((e) => console.log("deleted user : " + id));
    };

    //Update query hook
    const updateTask = async (table: any, data: object,id:number) => {
        return await drizzleDb.update(table)
            .set(data)
            .where(eq(table.id, id)).then((e)=>{
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