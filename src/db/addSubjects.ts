import { subjectsDict } from "~/data";
import db from ".";
import { subjects } from "./schema";

export default async function addSubjectsToDB() {
    Object.entries(subjectsDict).forEach(async ([code, name]) => {
        await db.insert(subjects).values({
            code,
            title: name,
        })
    });
}

addSubjectsToDB().then(() => {
    console.log('Subjects added')
}).catch((error) => {
    console.error('Error adding subjects')
    console.error(error)
})
