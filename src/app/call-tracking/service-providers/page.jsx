import ServiceProvidersPage from '@/components/call-tracking/service-providers/service-providers'
import { ServiceProvidersFaq } from '@/components/call-tracking/service-providers/service-providers-faq'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Call Tracking for Service Providers',
  description:
    'Streamline your service business with CallGauge’s affordable call tracking. Manage leads, improve service, and grow your customer base with ease.',
}

export default function ServiceProviders() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <ServiceProvidersPage />
      <ServiceProvidersFaq />
      <Footer />
    </main>
  )
}
