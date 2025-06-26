import { sql } from 'drizzle-orm';
import { singlestoreEnum } from 'drizzle-orm/singlestore-core';
import { sqliteTable, text, integer, SQLiteBoolean } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull()
});

export const dailyTask = sqliteTable("dailyTask", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  task_detail: text("task_detail").notNull(),
  is_checked: integer({ mode: 'boolean' }).default(false),
    day_id: integer('list_id')
    .notNull()
    .references(() => day.id),
})

export const day = sqliteTable("day", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  timestamp: text('timestamp')
    .notNull()
    .default(sql`(current_timestamp)`),
})

// Export Task to use as an interface in your app
export type User = typeof users.$inferSelect;
