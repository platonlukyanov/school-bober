import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import { z } from "zod";
import db from "~/db";
import { homeworks } from "~/db/schema";
import { homeworkSchema } from "~/validation/homework";
import superjson from 'superjson';

type Input = z.infer<typeof homeworkSchema>

export async function POST(req: Request, res: NextApiResponse) {
    if (!req.body) {
        return Response.json({ message: 'Request body must be set' }, {
            status: 400,
        })
    }
    const serializedData = superjson.parse(await req.text())
    const { content, lessonDate, subject: subjectCode, imageUrl } = homeworkSchema.parse(serializedData)

    const subject = await db.query.subjects.findFirst({
        where: (subjects, { eq }) => (eq(subjects.code, subjectCode)),
    })

    if (!subject) {
        return Response.json({ message: 'Subject not found' }, {
            status: 404,
        })
    }

    const newHomework = await db.insert(homeworks).values({
        content: content ?? '',
        subjectId: subject.id,
        fromLessonDate: lessonDate.toISOString(),
        imageUrl,
    }).returning()

    console.log(newHomework)
    return Response.json({ status: 'success' })
}