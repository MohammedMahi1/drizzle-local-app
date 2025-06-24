import { singlestoreEnum, singlestoreTable } from 'drizzle-orm/singlestore-core';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull()
});

export const dailyTask = sqliteTable("dailyTask",{
  id:integer("id").primaryKey({autoIncrement:true}),
  
})

// Export Task to use as an interface in your app
export type User = typeof users.$inferSelect;