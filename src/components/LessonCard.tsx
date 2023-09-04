'use client'
import React, { useEffect, useRef } from 'react'

interface LessonCardProps {
    lessonName: string
    lessonCaption: string
    className?: string
    gone?: boolean,
    needsAttention?: boolean
    progress?: number
    progressClassname?: string
}

function LessonCard({ lessonName, lessonCaption, gone, className, needsAttention, progress, progressClassname }: LessonCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref || !ref.current || !needsAttention) return;
        const margin = 100;
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        }) 
    }, [needsAttention])

    return (
        <div
            ref={ref}
            className={`rounded-2xl w-full flex justify-center
                        items-center p-6 text-center
                        relative
                        ${className}
                        ${gone ? 'bg-slate-200 text-slate-500 border-none' : ''}`}>
            <div className={`absolute h-full z-0 rounded-l-xl left-0 ${progressClassname ? progressClassname : 'bg-slate-600 opacity-10'}`} style={{ width: `${progress}%` }} />
            <div className="relative">
                <h3 className="font-bold text-xl mb-1">{lessonName}</h3>
                <p className="text-base opacity-50">{lessonCaption}</p>
            </div>
        </div>
    )
}

export default LessonCard