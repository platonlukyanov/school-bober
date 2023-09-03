import changeTimeZone from "~/utils/changeTimeZone";
import ActiveScheduleItemIndicator from "./ActiveScheduleItemIndicator";
import LessonCard from "./LessonCard";
import { SubjectCode, schedule } from "~/data";
import getNowTime from "~/utils/getNowTime";
import getRussianDayOfTheWeek from "~/utils/getRussianDayOfTheWeek";
import BreakCard from "./BreakCard";
import getMinutesBetweenTimestrings from "~/utils/getMinutesBetweenTimestrings";
import isLater, { isEarlier } from "~/utils/isLater";

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
    const nowDatetime = changeTimeZone(getNowTime())
    const numericDayOfWeek = nowDatetime.getDay() - 1
    const todaysSchedule = schedule[numericDayOfWeek]

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

            return <> <div className="flex items-center w-full" key={lesson.code}>
                <ActiveScheduleItemIndicator
                    active={lesson.start < currentTime && lesson.end > currentTime}
                />
                <LessonCard
                    lessonName={lesson.lessonName}
                    lessonCaption={`${lesson.start}-${lesson.end}`}
                    className={subjectToTWClass.get(lesson.code) ?? 'bg-gray-200'}
                    gone={isCurrentLessonGone}
                    needsAttention={isPreviousLessonGone || !isCurrentLessonGone}
                />
            </div>
            {nextBreak && <div className="flex items-center" key={lesson.code + '_break'}>
                <ActiveScheduleItemIndicator
                    active={nextBreak.start < currentTime && nextBreak.end > currentTime}
                />
                <BreakCard
                    breakDuration={getMinutesBetweenTimestrings(nextBreak.start, nextBreak.end) + ' минут'}
                    breakCaption={`${nextBreak.start}-${nextBreak.end}`}
                    gone={isCurrentBreakGone}
                    needsAttention={isPreviousBreakGone || !isCurrentBreakGone}
                />
            </div>}
            </>
        })}
    </section>
}