'use client'
import changeTimeZone from "~/utils/changeTimeZone";
import ActiveScheduleItemIndicator from "./ActiveScheduleItemIndicator";
import LessonCard from "./LessonCard";
import { SubjectCode, schedule } from "~/data";
import getNowTime from "~/utils/getNowTime";
import BreakCard from "./BreakCard";
import getMinutesBetweenTimestrings from "~/utils/getMinutesBetweenTimestrings";
import { isEarlier } from "~/utils/isLater";
import { useAtomValue } from "jotai";
import selectedDayOfWeekAtom, { currentDatetimeAtom } from "~/atoms/selectedDayOfWeek";
import getLessonCompletionPercentage from "~/utils/getLessonCompletionPercentage";
import getBreakCompletionPercentage from "~/utils/getBreakCompletionPercentage";
import React from "react";

const subjectToTWClass = new Map<SubjectCode, string>();
subjectToTWClass.set('algebra', 'bg-blue-200')
subjectToTWClass.set('geometry', 'bg-green-200')
subjectToTWClass.set('russian', 'bg-red-200')
subjectToTWClass.set('literature', 'bg-yellow-200')
subjectToTWClass.set('english', 'bg-purple-200')
subjectToTWClass.set('history', 'bg-amber-200')
subjectToTWClass.set('geography', 'bg-pink-200')
subjectToTWClass.set('biology', 'bg-green-200')
subjectToTWClass.set('chemistry', 'bg-yellow-200')
subjectToTWClass.set('physics', 'bg-blue-200')
subjectToTWClass.set('informatics', 'bg-blue-200')
subjectToTWClass.set('social-studies', 'bg-pink-200')
subjectToTWClass.set('physical-education', 'bg-gray-200')
subjectToTWClass.set('economics', 'bg-green-200')
subjectToTWClass.set('law', 'bg-red-200')
subjectToTWClass.set('conversation-about-important', 'bg-yellow-600')
subjectToTWClass.set('mhc', 'bg-gray-200')
subjectToTWClass.set('obzh', 'bg-gray-200')
subjectToTWClass.set('russian-2', 'bg-red-200')
subjectToTWClass.set('career-guidance', 'bg-yellow-200')
subjectToTWClass.set('astronomy', 'bg-blue-200')

const sunday = -1;

export default function Schedule() {
    const nowDatetime = useAtomValue(currentDatetimeAtom)
    const selectedDayOfWeek = useAtomValue(selectedDayOfWeekAtom)
    const numericDayOfWeek = selectedDayOfWeek - 1
    const todaysSchedule = schedule[numericDayOfWeek]
    const isSelectedDayToday = selectedDayOfWeek == changeTimeZone(getNowTime()).getDay()

    if (numericDayOfWeek == sunday) {
        return <section className="mt-6 flex flex-col gap-6">
            <div className="flex items-center w-full">
                <LessonCard
                    lessonName="Выходной"
                    lessonCaption="Сегодня нет уроков"
                    className="bg-gray-200"
                />
            </div>
        </section>
    }

    const currentTime = nowDatetime.getHours() + ':' + nowDatetime.getMinutes()

    return <section className="mt-6 flex flex-col gap-6">
        {todaysSchedule.lessons.map((lesson, index) => {
            let nextBreak = null;

            if (index < todaysSchedule.lessons.length - 1) {
                nextBreak = todaysSchedule.breaks[index]
            }

            const isPreviousLessonGone = index > 0 && isEarlier(todaysSchedule.lessons[index - 1].end, currentTime)
            const isCurrentLessonGone = isEarlier(lesson.end, currentTime)
            const isPreviousBreakGone = index > 0 && isEarlier(todaysSchedule.breaks[index - 1].end, currentTime)
            const isCurrentBreakGone = Boolean(nextBreak && isEarlier(nextBreak.end, currentTime))
            
            const lessonCompletionPercentage = getLessonCompletionPercentage(lesson, currentTime)
            const breakCompletionPercentage = nextBreak && getBreakCompletionPercentage(nextBreak, currentTime)

            return <div key={lesson.code + 'block' + selectedDayOfWeek.toString() + index}>
                <div className="flex items-center w-full" key={lesson.code}>
                    <ActiveScheduleItemIndicator
                        active={lesson.start < currentTime && lesson.end > currentTime}
                    />
                    <LessonCard
                        lessonName={lesson.lessonName}
                        lessonCaption={`${lesson.start}-${lesson.end}`}
                        className={subjectToTWClass.get(lesson.code) ?? 'bg-gray-200'}
                        gone={isSelectedDayToday && isCurrentLessonGone}
                        progress={lessonCompletionPercentage ?? 0}
                    />
                </div>
                {nextBreak && <div className="flex items-center" key={lesson.code + '_break'}>
                    <ActiveScheduleItemIndicator
                        active={nextBreak.start < currentTime && nextBreak.end > currentTime}
                    />
                    <BreakCard
                        breakDuration={getMinutesBetweenTimestrings(nextBreak.start, nextBreak.end) + ' минут'}
                        breakCaption={`${nextBreak.start}-${nextBreak.end}`}
                        gone={isSelectedDayToday && isCurrentBreakGone}
                        needsAttention={isSelectedDayToday && (isPreviousBreakGone || !isCurrentBreakGone)}
                        progress={breakCompletionPercentage ?? 0}
                    />
                </div>}
            </div>
        })}
    </section>
}