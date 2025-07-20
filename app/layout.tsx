import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Madan Gopal Jha - Full Stack Developer Portfolio",
  description:
    "Passionate Full Stack Web Developer specializing in MERN stack - Crafting dynamic, responsive web applications",
  keywords: "full stack developer, mern stack, react, node.js, javascript, web developer, madan gopal jha",
    generator: 'v0.dev'
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
