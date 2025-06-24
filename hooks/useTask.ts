import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";

export function useTask() {
    const db = useSQLiteContext();

    const drizzleDb = drizzle(db, { schema });
    console.log(typeof schema.monday);
    
    const getTask = async (table:any) => {
        const dd = await drizzleDb.select().from(table);
        console.log(dd);
    };

    const addTask = (table:any,data:object) => {
        drizzleDb.insert(table).values(data);
    };
    return {
        getTask,
        addTask
    };
}