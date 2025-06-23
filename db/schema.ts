import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull()
});
export const monday = sqliteTable('monday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })

});
export const tuesday = sqliteTable('tuesday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});
export const wednesday = sqliteTable('wednesday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});
export const thursday = sqliteTable('thursday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});
export const friday = sqliteTable('friday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});
export const saturday = sqliteTable('saturday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});
export const sunday = sqliteTable('sunday', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  task: text('task').notNull(),
  isChecked:integer({ mode: 'boolean' })
});

// Export Task to use as an interface in your app
export type User = typeof users.$inferSelect;
export type Monday = typeof monday.$inferSelect;
export type Tuesday = typeof thursday.$inferSelect;
export type Wednesday = typeof wednesday.$inferSelect;
export type Thursday = typeof thursday.$inferSelect;
export type Friday = typeof friday.$inferSelect;
export type Saturday = typeof saturday.$inferSelect;
export type Sunday = typeof sunday.$inferSelect;