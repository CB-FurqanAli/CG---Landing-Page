import CaseStudiesFaqPage from '@/components/case-studies/case-studies'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'Case Studies',
  description:
    'Port your phone numbers to CallGauge easily and for free. Keep your existing numbers and start tracking calls seamlessly.',
}

export default function CaseStudies() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <CaseStudiesFaqPage />
      <Footer />
    </main>
  )
}
