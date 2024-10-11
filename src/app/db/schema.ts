import { createInsertSchema } from "drizzle-zod";
import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);
