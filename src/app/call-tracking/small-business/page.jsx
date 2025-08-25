import SmallBusinessPage from '@/components/call-tracking/small-business/small-business'
import { SmallBusinessFaq } from '@/components/call-tracking/small-business/small-business-faq'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Call Tracking for Small Businesses',
  description:
    'Grow your small business with CallGauge’s affordable call tracking. Track leads, improve customer service, and save time with easy-to-use tools.',
}

export default function SmallBusinesses() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <SmallBusinessPage />
      <SmallBusinessFaq />
      <Footer />
    </main>
  )
}
