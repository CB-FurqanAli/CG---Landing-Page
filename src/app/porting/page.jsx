import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import PortingPage from '@/components/porting/porting'

export const metadata = {
  title: 'Number Porting',
  description:
    'Port your phone numbers to CallGauge easily and for free. Keep your existing numbers and start tracking calls seamlessly.',
}

export default function Porting() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <PortingPage />
      <Footer />
    </main>
  )
}
