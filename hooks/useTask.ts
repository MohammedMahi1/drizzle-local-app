import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";

export function useTask() {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    const getTask = async (table:any) => {
        const dd = await drizzleDb.select().from(table);
        console.log(dd);
    };
    return {
        getTask,
    };
}