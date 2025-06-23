import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AGV Dashboard',
  description: '-',
  generator: 'AGV.com',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
