import { InferSelectModel } from "drizzle-orm";

export type Subject = InferSelectModel<typeof import('./schema').subjects>
export type Homework = InferSelectModel<typeof import('./schema').homeworks>