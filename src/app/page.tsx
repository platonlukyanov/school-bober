import Image from 'next/image'
import Schedule from '~/components/Schedule'
import SelectDayOfWeek from '~/components/SelectDayOfWeek'


export default function Home() {
    return (
        <main className="min-h-screen p-6">
            <nav className="flex justify-between">
                <SelectDayOfWeek />
                <Image src="/bober.svg" alt="B" width={35} height={35}/>
            </nav>
            <Schedule />
        </main>
    )
}
