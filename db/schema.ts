import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const todo = sqliteTable("todo", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  day: text("day").notNull(),
  task: text("task").notNull(),
  is_checked: integer({ mode: "boolean" }).default(false).notNull(),
  timestamp: text('timestamp')
    .notNull()
    .default(sql`(current_timestamp)`),

})
// Export Task to use as an interface in your app
export type Todo = typeof todo.$inferInsert
