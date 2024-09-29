import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Lost Yeti Design Co',
  description:
    'A dynamic duo helping small businesses with their UX and web development needs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          workSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
