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
        console.log(dd);
    };

    //Add query hook
    const addTask = (table: any, data: object) => {
        drizzleDb.insert(table).values(data).then(()=>{
            console.log("Data added");
        }).catch((err)=>{
            console.log(err);
        });
    };

    //Delete query hook
    const deleteTask = async(table: any) => {
       return await drizzleDb.delete(table).where(eq(table.id, table.id)).then((e)=>console.log("deleted user : "+table.id));
    };

    //Update query hook
    const updateTask = (table: any, data: object) => {
        drizzleDb.insert(table).values(data);
    };


    return {
        getTask,
        addTask,
        deleteTask,
        updateTask
    };
}