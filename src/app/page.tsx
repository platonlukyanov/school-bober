import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen p-6">
            <nav className="flex justify-between">
                <h1 className="text-2xl font-bold">Понедельник</h1>
                <Image src="/bober.svg" alt="B" width={35} height={35}/>
            </nav>
        </main>
    )
}
