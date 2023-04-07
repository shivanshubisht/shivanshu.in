import './globals.css'

export const metadata = {
  title: "Shivanshu's Personal Website",
  description: "Shivanshu's Personal Website, Front End Developer in Next JS",
  image: '/favicon.ico',
  url: 'https://shivanshu.in',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
