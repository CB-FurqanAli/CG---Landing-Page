import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Login | CallGauge AI – Call Tracking & Analytics Dashboard',
  description:
    'Access your CallGauge AI dashboard to manage call tracking, analytics, and AI-powered attribution. Secure login for users in the USA, UK, and Canada.',
}

function LoginPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          🚧 Website Under Development
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          We’re currently working hard to bring you an amazing experience. Our
          application is still under development — but you can get early access!
        </p>
        <p className="mb-8 text-lg text-gray-600">
          If you&#39;d like to **book in advance**, please visit our{' '}
          <a
            href="/demo"
            className="font-semibold text-red-500 hover:underline"
          >
            Schedule Your Demo
          </a>{' '}
          page to send us a message. Early demo bookings will receive an
          **exclusive special offer** when we launch!
        </p>
        <div className="flex justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-red-500"></div>
        </div>
      </div>
    </section>
  )
}

export default function Login() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <LoginPage />
      <Footer />
    </main>
  )
}
