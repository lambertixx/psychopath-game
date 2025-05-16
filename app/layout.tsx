import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ache o Psicopata!",
  description: "Um jogo para treinar seu diagnóstico",
  generator: "Murillo Lamberti",
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
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
