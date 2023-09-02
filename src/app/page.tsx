import Image from 'next/image'
import ActiveScheduleItemIndicator from '~/components/ActiveScheduleItemIndicator'
import BreakCard from '~/components/BreakCard'
import LessonCard from '~/components/LessonCard'

export default function Home() {
    return (
        <main className="min-h-screen p-6">
            <nav className="flex justify-between">
                <h1 className="text-2xl font-bold">Понедельник</h1>
                <Image src="/bober.svg" alt="B" width={35} height={35}/>
            </nav>
            <section className="mt-6 flex flex-col gap-6">
                <div className="flex items-center">
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
                    />
                </div>
            </section>
        </main>
    )
}
