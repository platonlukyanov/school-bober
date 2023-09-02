import React from 'react'

interface LessonCardProps {
    lessonName: string
    lessonCaption: string
    className?: string
}

function LessonCard({ lessonName, lessonCaption, className }: LessonCardProps) {
    return (
        <div className={`rounded-2xl w-full flex justify-center items-center p-6 text-center ${className}`}>
            <div>
                <h3 className="font-bold text-xl mb-1">{lessonName}</h3>
                <p className="text-base opacity-50">{lessonCaption}</p>
            </div>
        </div>
    )
}

export default LessonCard