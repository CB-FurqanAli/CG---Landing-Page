import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '',
    default: 'CallGauge AI - Track Every Call',
  },
  description:
    'CallGauge AI helps businesses track, analyze, and optimize every call using AI insights.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
