import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProviders from '@/components/ClientProviders'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat Language Translator',
  description: 'Convert chat to 10 different languages',
  developer: 'Samuel Osei Adu'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // to use useSession with client providers
    <ClientProviders> 
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <FirebaseAuthProvider>
            <ThemeProvider 
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </ClientProviders>
  )
}
