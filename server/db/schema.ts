import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const contacts = pgTable('Contact', {
  //   id: serial('id').primaryKey(),
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  message: text('message'),
  //   createdAt: timestamp('created_at')
  //     .default(sql`CURRENT_TIMESTAMP`)
  //     .notNull(),
  createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
    .defaultNow()
    .notNull(),
})
