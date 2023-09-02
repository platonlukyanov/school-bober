import Image from 'next/image'
import ActiveScheduleItemIndicator from '~/components/ActiveScheduleItemIndicator'
import BreakCard from '~/components/BreakCard'
import LessonCard from '~/components/LessonCard'
import Schedule from '~/components/Schedule'
import changeTimeZone from '~/utils/changeTimeZone'
import getNowTime from '~/utils/getNowTime'
import getRussianDayOfTheWeek from '~/utils/getRussianDayOfTheWeek'
import toCapitalized from '~/utils/toCapitalized'

export default function Home() {
    const nowDatetime = changeTimeZone(getNowTime())
    const day = getRussianDayOfTheWeek(nowDatetime)

    return (
        <main className="min-h-screen p-6">
            <nav className="flex justify-between">
                <h1 className="text-2xl font-bold">{toCapitalized(day)}</h1>
                <Image src="/bober.svg" alt="B" width={35} height={35}/>
            </nav>
            <Schedule />
            {/* <div className="flex items-center">
                    <ActiveScheduleItemIndicator />
                    <LessonCard
                        lessonName="История ⌛️"
                        lessonCaption="8:30-9:15"
                        className="bg-amber-200"
                    />
                </div>
                <div className="flex items-center">
                    <ActiveScheduleItemIndicator active/>
                    <BreakCard
                        breakDuration="15 минут"
                        breakCaption="8:30-9:15"
                    /> */}
        </main>
    )
}
