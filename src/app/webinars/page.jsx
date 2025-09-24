import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'CallGauge vs. CallRail: Top Call Tracking Alternative for 2025',
  description:
    'Compare CallGauge and CallRail to find the best call tracking software for your business. Discover why CallGauge is the top alternative with affordable pricing and powerful features.',
}
// app/webinars/page.jsx   (Next.js App Router)
// or pages/webinars.js    (Next.js Pages Router)
function WebinarsPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          🎥 Webinars Page In Progress
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          We’re preparing live and recorded webinars to share insights, tips,
          and updates. Stay tuned — new sessions will be available here soon!
        </p>
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-green-500"></div>
        </div>
      </div>
    </section>
  )
}

export default function CallRailAlternative() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <WebinarsPage />
      <Footer />
    </main>
  )
}
