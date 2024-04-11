import type { Metadata } from 'next'

import './globals.css'

import { DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import ModalProvider from '@/providers/modal-provider'

const DM_Sans_Font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logic Nest: SaaS Automation Platform',
  description:
    'Automate your SaaS business with our platform, created by developers for developers. (tahazzot.me/about)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={DM_Sans_Font.className + ' dark:bg-black bg-white'}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
