import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { neobrutalism } from '@clerk/themes'
import Script from 'next/script'
import JotaiProvider from '~/providers/jotai'
import { ClerkProvider } from '@clerk/nextjs'
import { ruRU } from '@clerk/localizations'

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
        <ClerkProvider localization={ruRU} appearance={{
            baseTheme: neobrutalism,
            variables: {
                colorPrimary: '#ebaa81'
            }
        }}>
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
                </body>
            </html>
        </ClerkProvider>
    )
}
