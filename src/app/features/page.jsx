import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { default as CallFlowsCard } from '@/components/features/call-flows-card'
import CustomGreetingsCards from '@/components/features/custom-greetings-cards'
import DynamicNumberCard from '@/components/features/dynamic-number-card'
import FeatureCards from '@/components/features/feature-cards'
import FeatureCards1 from '@/components/features/feature-cards1'
import ReportingCards from '@/components/features/reporting-cards'
import WhiteLabelingCard from '@/components/features/white-labeling-card'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'CallGauge AI Features – Smart Call Tracking & Automation',
  description:
    'Boost conversions with CallGauge AI. AI-powered call tracking, DNI, PPC, white labeling, voicemails—all from one affordable platform. Start free today!',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <div className="glass-effect mb-1 inline-flex items-center rounded-full bg-gray-100 px-6 py-3 text-sm">
            <span className="font-semibold">
              🚀 Advanced Call Tracking & Analytics
            </span>
          </div>
          <Heading as="h1" className="mx-auto max-w-5xl text-4xl md:text-5xl">
            AI-Powered Features That Redefine Call Tracking & Attribution
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-xl">
            CallGauge AI turns every call into actionable insights with advanced
            attribution, real-time analytics, and AI-powered reporting, so you
            can maximize ROI with confidence.
          </Lead>
          <div className="my-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button
              variant="secondary"
              href="#"
              className="px-8 py-3 text-lg font-semibold"
            >
              Watch a Demo
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 font-medium sm:flex-row">
            <p>✅ No credit card required</p>
            <p>✅ Setup in less than 5 minutes</p>
            <p>✅ Cancel anytime</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Get Started Today</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Experience CallGauge Risk-Free
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to explore all features—no
            commitment required.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="#">
              Try CallGauge Now
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AutoMations() {
  return (
    <div className="mx-auto mb-30 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCards
        title="🔊 Call Recording"
        description="Automatically record every call, replay anytime, and download MP3 files for sharing."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fd2f07ac6bafd28e0_dollar-hand-holding.svg"
        link="features/call-recording"
      />
      <FeatureCards
        title="⚡ Zapier Integration"
        description="Connect CallGauge AI to 5,000+ apps and trigger automated workflows instantly."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fb9830683d5eb4f37_horizontal-bar-chart.svg"
        link="features/zapier-integration"
      />

      <FeatureCards
        title="📣 Call Whisper"
        description="Hear caller details before the conversation starts for better context."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fc3aab2b7fdbae39d_money-trend-up.svg"
        link="features/call-whispering"
      />
    </div>
  )
}

function CallTrackingNumbers() {
  return (
    <div className="mx-auto mb-30 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCards
        title="🔢 Call Tracking Numbers"
        description="Add unlimited numbers in minutes—scale effortlessly at just $0.40 per number."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fb9830683d5eb4f37_horizontal-bar-chart.svg"
        link="features/tracking-numbers"
      />

      <FeatureCards
        title="📥 Voicemail Routing"
        description="Send unanswered calls to voicemail or set delayed voicemail routing."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fd2f07ac6bafd28e0_dollar-hand-holding.svg"
        link="features/voicemail"
      />
      <FeatureCards
        title="💼 Pay-Per-Call Billing"
        description="Charge clients for qualified calls automatically—performance-based pricing built in."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fc3aab2b7fdbae39d_money-trend-up.svg"
        link="features/pay-per-call"
      />
    </div>
  )
}

function ClientPortal() {
  return (
    <div className="mx-auto mb-30 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <FeatureCards
        title="🔐 Client Portal"
        description="Give clients their own dashboard to view calls, messages, and reports."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fb9830683d5eb4f37_horizontal-bar-chart.svg"
        link="features/client-management"
      />

      <FeatureCards1
        title="🔁 Number Porting"
        description="Easily transfer existing numbers to CallGauge AI with no downtime."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fc3aab2b7fdbae39d_money-trend-up.svg"
        link="#"
      />
      <FeatureCards1
        title="🧠 Spam Call Blocking"
        description="AI-powered filters block robocalls and spam before they waste your time."
        icon="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fd2f07ac6bafd28e0_dollar-hand-holding.svg"
        link="#"
      />
    </div>
  )
}

function Reporting() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <ReportingCards
          title="📊 Reporting & Analytics"
          description="Track performance metrics in real time with clean, AI-powered dashboards."
          image="/feature-page/Reporting -Analytics.jpeg"
        />
        <ReportingCards
          title="🔄 Press-1 Filtering"
          description="Block spam by requiring callers to press 1 before connecting."
          image="/feature-page/Press-1.jfif"
        />
        <ReportingCards
          title="💬 SMS Forwarding"
          description="Forward incoming text messages to any phone number you choose."
          image="/feature-page/sms-forwarding.jfif"
        />
      </div>
    </div>
  )
}

function VoiceMails() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <ReportingCards
          title="🔔 Voicemail Notifications"
          description="Receive instant alerts with embedded voicemail recordings for quick follow-ups."
          image="/feature-page/voicemail-noti.png"
        />
        <ReportingCards
          title="📨 Missed Call Alerts"
          description="Never lose a lead—get notified instantly when a call is missed."
          image="/feature-page/call-alerts.jfif"
        />
        <ReportingCards
          title="🛠️ Automations"
          description="Use AI and triggers to automate repetitive tasks across the call workflow."
          image="feature-page/automations.jfif"
        />
      </div>
    </div>
  )
}

function CustomGreeting() {
  return (
    <div className="mx-auto my-48 grid max-w-7xl gap-10 px-4 sm:grid-cols-1 lg:grid-cols-2">
      <CustomGreetingsCards
        title="🤖 AI Call Summaries"
        description="Get transcribed calls with one-line AI summaries and key bullet points."
        image="/feature-page/ai-summaries.jfif"
      />
      <CustomGreetingsCards
        title="👋 Custom Greetings"
        description="Upload audio or use text-to-speech for professional greeting messages."
        image="/feature-page/custom-greetings.jfif"
      />
    </div>
  )
}

function EmailCall() {
  return (
    <div className="mx-auto my-48 grid max-w-7xl gap-10 px-4 sm:grid-cols-1 lg:grid-cols-2">
      <CustomGreetingsCards
        title="📤 Email Call Details"
        description="Send call recordings and data instantly via email to any recipient."
        image="/feature-page/email-call.jpeg"
      />
      <CustomGreetingsCards
        title="📈 Auto-Reports"
        description="Send scheduled reports to clients or team members automatically."
        image="/feature-page/auto-reports.png"
      />
    </div>
  )
}

export default function Features() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />

      <div>
        <CallFlowsCard />
      </div>

      <AutoMations />

      <div>
        <DynamicNumberCard />
      </div>

      <CallTrackingNumbers />
      <WhiteLabelingCard />
      <ClientPortal />

      <div>
        <CustomGreeting />
        <Reporting />
      </div>

      <div>
        <EmailCall />
        <VoiceMails />
      </div>

      <CTASection />
      <Footer />
    </main>
  )
}
