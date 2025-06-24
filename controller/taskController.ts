import { drizzle } from "drizzle-orm/singlestore";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../db/schema"

export const getTasksController = async (tabel:any) => {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    return await drizzleDb.select().from(tabel);
}