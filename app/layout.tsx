import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@fontsource/archivo/400.css'
import '@fontsource/archivo/700.css'
import Navigation from '../components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IdeaAscend - Responsive',
  description: 'Mobile-first responsive website for IdeaAscend platform',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className + ' font-archivo'}>
      <body className="antialiased bg-white text-gray-900 min-h-screen">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 