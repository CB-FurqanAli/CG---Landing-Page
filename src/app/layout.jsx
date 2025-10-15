import '@/styles/tailwind.css'

export const metadata = {
  title: {
    default: 'CallGauge AI - Track Every Call',
    template: '',
  },
  description: '',
  keywords: [
    'AI call tracking',
    'call analytics',
    'marketing attribution',
    'call transcription',
    'CallGauge',
  ],
  openGraph: {
    title: 'CallGauge AI - Track Every Call',
    description:
      'AI-powered call tracking and analytics to help you convert more calls into customers. Ideal for businesses in the USA, UK, and Canada.',
    url: 'https://cg-landing-page-eight.vercel.app',
    siteName: 'CallGauge AI',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
