
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"
import { drizzle } from "drizzle-orm/expo-sqlite";

export const getTasksController = async (table:any) => {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    const result = await drizzleDb.select().from(table);
    return console.log(result);

}