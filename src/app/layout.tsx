import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { inter } from '@/config/fonts'



export const metadata: Metadata = {
  title: 'Teslo | shop',
  description: 'Una tienda virtual de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
