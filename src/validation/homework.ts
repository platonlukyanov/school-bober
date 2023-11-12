import { z } from "zod";

export const homeworkSchema = z.object({
    subject: z.string({
        required_error: "Пожалуйста, выберите предмет",
    }).min(1).max(100),
    content: z.string().max(1000, {
        message: "Максимальная длина текста задания 1000 символов",
    }).optional(),
    lessonDate: z.date({
        required_error: "Укажите день, когда ДЗ было задано"
    }),
    imageUrl: z.string().optional(),
})
