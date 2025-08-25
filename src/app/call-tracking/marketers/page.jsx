import MarketersPage from '@/components/call-tracking/marketers/marketers'
import { MarketersFAQ } from '@/components/call-tracking/marketers/marketers-faq'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Call Tracking for Marketers',
  description:
    'Boost your marketing ROI with CallGauge’s affordable call tracking software. Monitor campaigns, optimize ad spend, and enhance customer experience effortlessly.',
}

export default function Marketers() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <MarketersPage />
      <MarketersFAQ />
      <Footer />
    </main>
  )
}
