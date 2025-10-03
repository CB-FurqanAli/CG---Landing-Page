import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'CallGauge vs. CallRail: Top Call Tracking Alternative for 2025',
  description:
    'Compare CallGauge and CallRail to find the best call tracking software for your business. Discover why CallGauge is the top alternative with affordable pricing and powerful features.',
}

function ApiPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          🔧 API Page In Progress
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          We’re working on powerful APIs to help you connect and extend our
          platform. Stay tuned — documentation and endpoints are coming soon!
        </p>
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
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
      <ApiPage />
      <Footer />
    </main>
  )
}
