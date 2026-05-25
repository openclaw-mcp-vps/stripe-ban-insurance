import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PayGuard — Payment Processor Ban Protection',
  description: 'Insurance-like service that helps businesses recover from sudden payment processor bans with backup solutions. Monitor, failover, and stay compliant.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9dc4d7d7-c306-412b-9d90-4d5c8487200a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
