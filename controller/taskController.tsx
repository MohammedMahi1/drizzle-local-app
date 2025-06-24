
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useEffect } from "react";

export const getTasksController = (table:any) => {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    useEffect(()=>{
        (async()=>{
            const result =  drizzleDb.select().from(table);
            return console.log(result);
        })()
    },[])
}