import React from 'react'
import AddHomeworkForm from '~/components/AddHomeworkForm'
import db from '~/db'

async function AddHomeworkPage() {
    const subjects = await db.query.subjects.findMany()

    return (
        <main className="flex justify-center">
            <div className="p-6 max-w-lg">
                <h1 className="text-2xl font-bold mb-6">Добавить домашнее задание</h1>
                <AddHomeworkForm subjects={subjects}/>
            </div>
        </main>
    )
}

export default AddHomeworkPage