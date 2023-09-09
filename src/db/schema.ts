import { pgTable, serial, text, varchar, date } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm'

export const subjects = pgTable('subjects', {
    id: serial('id').primaryKey(),
    code: varchar('code'),    
});

export const subjectsRelations = relations(subjects, ({ many }) => ({
    homeworks: many(homeworks),
}))

export const homeworks = pgTable('homeworks', {
    id: serial('id').primaryKey(),
    subjectId: text('subject_id').notNull(),
    fromLessonDate: date('date').notNull(),
    content: text('content').notNull(),
});

export const homeworksRelations = relations(homeworks, ({ one }) => ({
    subject: one(subjects, {
        fields: [homeworks.subjectId],
        references: [subjects.id],
    }),
}));