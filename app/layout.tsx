import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'David Méndez Rosa',
  description: 'My personal portfolio',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/Personal-Portfolio/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
