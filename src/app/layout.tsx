import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import JotaiProvider from '~/providers/jotai'

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
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/bober.png"></link>
                <meta name="theme-color" content="#fff" />
                <Script
                    defer
                    data-domain="xn--90aam8am.fun"
                    src="https://plausible.io/js/script.js"
                />
            </head>
            <body className={montserrat.className}>
                <JotaiProvider>
                    {children}
                </JotaiProvider>
                <Link href="https://www.flaticon.com/ru/free-icons/" title="бобр иконки" className="text-sm text-slate-300 absolute bottom-0">Бобр иконки от Freepik - Flaticon</Link>
            </body>
        </html>
    )
}
