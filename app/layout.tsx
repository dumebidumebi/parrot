import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Headers from '@/components/Header'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import ClientProviders from '@/components/ui/ClientProviders'
import FirebaseAuthProvider from '@/components/ui/FirebaseAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parrot',
  description: 'chat with anyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientProviders>
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
      <FirebaseAuthProvider>
        <ThemeProvider 
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
        <Headers/>
        {children}
        </ThemeProvider>
        </FirebaseAuthProvider>
        </body>
    </html>
    </ClientProviders>
  )
}
