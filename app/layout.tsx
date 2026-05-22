import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ChangelogAI — Customer-Facing Changelogs from GitHub Commits",
  description: "Connect your GitHub repo, let AI extract customer-relevant changes, and publish polished changelogs in minutes. Built for product managers and founders."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="15229848-78ea-41be-a3a7-ddff1a984496"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
