import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Бобер / Расписание уроков и перемен',
    description: 'Расписание уроков и перемен. Узнайте, когда у вас уроки и перемены',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <Head>
                <script defer data-domain="xn--90aam8am.fun" src="https://plausible.io/js/script.js"></script>
            </Head>
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
