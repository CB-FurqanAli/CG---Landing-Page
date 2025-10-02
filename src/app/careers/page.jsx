import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Careers',
  description:
    'Review the Terms of Use for CallGauge, outlining the rules and conditions for using our call tracking services.',
}
function CareersPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          🚀 Careers Page In Progress
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          We’re building an amazing team at{' '}
          <span className="font-semibold text-blue-600">CallGauge.ai</span>.
          Exciting career opportunities are coming soon — stay tuned for open
          roles and ways to join us!
        </p>
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-blue-500"></div>
        </div>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <CareersPage />
      <Footer />
    </main>
  )
}
