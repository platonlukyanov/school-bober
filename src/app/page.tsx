import Image from 'next/image'
import Link from 'next/link'
import Schedule from '~/components/Schedule'
import SelectDayOfWeek from '~/components/SelectDayOfWeek'


export default function Home() {
    return (
        <main className="min-h-screen p-6 flex justify-center">
            <div className="w-full max-w-md">
                <nav className="flex justify-between">
                    <SelectDayOfWeek />
                    <Image src="/bober.svg" alt="B" width={35} height={35}/>
                </nav>
                <Schedule />
                <Link href="https://www.flaticon.com/ru/free-icons/" title="бобр иконки" className="text-sm text-slate-300 mt-4">Бобр иконки от Freepik - Flaticon</Link>
            </div>
        </main>
    )
}
