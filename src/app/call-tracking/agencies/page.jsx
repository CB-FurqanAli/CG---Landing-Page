import AgenciesPage from '@/components/call-tracking/agencies/agencies'
import { AgenciesFAQ } from '@/components/call-tracking/agencies/agencies-faq'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Call Tracking for Agencies',
  description:
    'Discover how CallGauge’s call tracking software helps agencies cut costs, track campaigns, and boost ROI with powerful features and affordable pricing.',
}

export default function Agencies() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <AgenciesPage />
      <AgenciesFAQ />
      <Footer />
    </main>
  )
}
