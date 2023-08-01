import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'

const poppins = Poppins({ weight: ["400", "600"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Wheather using the api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
