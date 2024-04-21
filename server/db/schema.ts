import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export const contacts = pgTable("Contact", {
  // id: serial('id').primaryKey(),
  // id: text('id').primaryKey().default(sql`uuid_generate_v4()`),
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid())
    .notNull(),
  name: text("name"),
  email: text("email"),
  message: text("message"),
  //   createdAt: timestamp('created_at')
  //     .default(sql`CURRENT_TIMESTAMP`)
  //     .notNull(),
  createdAt: timestamp("createdAt", { precision: 3, mode: "string" })
    .defaultNow()
    .notNull(),
});
