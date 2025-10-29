import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

import Image from 'next/image'
import img1 from '/public/company/1.jpg'
import img2 from '/public/company/2.jpg'
import img3 from '/public/company/3.jpg'
import img4 from '/public/company/4.jpg'

export const metadata = {
  title: 'About',
  description:
    'We’re on a mission to empower businesses with affordable, scalable call tracking solutions that maximize ROI.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Building the Future of Marketing Clarity</Heading>
      <Lead className="mt-6 max-w-3xl text-lg">
        Every problem that refuses to be ignored, give rise to a great idea. For
        us, it was watching marketers spend thousands of dollars on campaigns
        without knowing which ones truly worked. Calls were being made, leads
        were coming in, but the data told only half of the story. <br />
        <br /> We built CallGauge AI to change that scenario for good. CallGauge
        AI, a platform that helps marketers and agencies see the complete and
        true picture, tracking every call back to its exact campaign, keyword
        and channel with precision and speed. <br /> <br /> Our purpose is
        simple: to replace guesswork with clarity and give every marketer the
        confidence to make decisions backed by transparent and truthful data.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600">
            We are here to make marketing attribution transparent, accurate and
            accessible to every business that grows through real conversations.
          </p>
          <p className="mt-8 text-lg text-gray-600">
            We believe clarity is what drives confidence. When marketers can see
            the truth behind every call, they can make smarter decisions that
            help their businesses grow forward and faster.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={img1}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={img2}
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src={img3}
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <Image
                alt=""
                src={img4}
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Raised</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={5} end={10} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Businesses Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={8} end={15} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Calls Tracked</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={75} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Clients Managed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={20} end={40} />K
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function FeaturesSection() {
  return (
    <section
      id="features"
      className="mt-20 bg-indigo-50 bg-[radial-gradient(circle_at_20%_20%,rgba(15,98,254,0.10),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.06),transparent_30%)] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-semibold">What Makes Us Different</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          CallGauge AI, is built for modern marketers who expect clarity, speed
          and effortless integration because true confidence begins with
          transparent data.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur-md">
            <h3 className="font-semibold">98% Attribution Accuracy</h3>
            <p className="mt-2 text-sm text-gray-600">
              Achieve unparalleled precision with AI-powered attribution
              modeling. Every call is traced to its true source, so you always
              know which campaigns drive real results with complete certainty.
            </p>
          </article>

          <article className="rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur-md">
            <h3 className="font-semibold">15-Minute Setup</h3>
            <p className="mt-2 text-sm text-gray-600">
              Go live in minutes, not weeks. Our streamlined onboarding gets you
              tracking calls even before your coffee gets cold.
            </p>
          </article>

          <article className="rounded-lg bg-white/60 p-6 shadow-sm backdrop-blur-md">
            <h3 className="font-semibold">Integration-First Platform</h3>
            <p className="mt-2 text-sm text-gray-600">
              CallGauge AI connects with 50+ tools like HubSpot, Salesforce and
              Google Ads so all of your data always stays in sync.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <Image
        width={150}
        height={150}
        quality={80}
        alt=""
        src={img}
        className="size-12 rounded-full"
      />
      {/*<img alt="" src={img} className="size-12 rounded-full" />*/}
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  const team = [
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      image: '/team/michael-foster.jpg',
    },
    {
      name: 'Dries Vincent',
      role: 'Head of Sales',
      image: '/team/dries-vincent.jpg',
    },
    {
      name: 'Celeste Vandermark',
      role: 'Lead Developer',
      image: '/team/celeste-vandermark.jpg',
    },
    {
      name: 'Courtney Henry',
      role: 'Product Designer',
      image: '/team/courtney-henry.jpg',
    },
    {
      name: 'Marcus Eldridge',
      role: 'Product Manager',
      image: '/team/marcus-eldridge.jpg',
    },
    {
      name: 'Whitney Francis',
      role: 'Marketing Lead',
      image: '/team/whitney-francis.jpg',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Engineer',
      image: '/team/leonard-krasner.jpg',
    },
    {
      name: 'Nolan Sheffield',
      role: 'UX Designer',
      image: '/team/nolan-sheffield.jpg',
    },
    {
      name: 'Emily Selman',
      role: 'Customer Success Lead',
      image: '/team/emily-selman.jpg',
    },
  ]

  return (
    <Container className="mt-20">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Built by call tracking innovators.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        CallGauge was founded by a team passionate about making call tracking
        accessible, with backing from investors who believe in affordable
        innovation.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            CallGauge began when founders Alex, Sarah, and Jordan, former
            marketing and tech specialists, saw businesses struggling with
            overpriced call tracking tools like CallRail. They wondered: why not
            build a solution that’s powerful yet affordable? Starting with a
            simple idea—local numbers at $0.50 each—they created CallGauge to
            disrupt the industry.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, CallGauge empowers over 15,000 businesses and agencies with
            intuitive call tracking, from solo marketers to large teams managing
            thousands of clients. Our platform delivers insights at a fraction
            of the cost, helping customers track more and spend less.
          </p>
        </div>
        <div className="-mt-12 max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            {/*<Image alt="" src={img5} className="block size-full object-cover" />*/}
            <Image alt="" src={img4} className="block size-full object-cover" />
          </div>
        </div>
      </div>

      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <section id="team" className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold">
            Built by Innovators Who Believe in Clarity
          </h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            The team behind CallGauge AI brings over twelve years of combined
            experience in analytics, AI and product development.
            <br /> We’ve seen how confusing or incomplete data and inaccurate
            call tracking hold marketing teams back. That’s why we’re creating a
            smarter, more transparent platform that makes every decision clearer
            to make and every result easier to trust.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />
                <h4 className="mt-4 font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Backed by visionaries in tech.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re proud to be supported by leading investors who share our vision
        for affordable, impactful call tracking solutions.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />

          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz is a tech investment powerhouse, supporting
            innovative startups that challenge industry norms. Their expertise
            in scaling SaaS solutions has been instrumental in CallGauge’s
            growth.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel invests in forward-thinking companies that redefine markets.
            Their belief in CallGauge’s mission to make call tracking affordable
            and scalable has fueled our rapid expansion.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Values() {
  return (
    <Container className="my-32">
      <Subheading>Our Values</Subheading>
      <Heading as="h3" className="mt-2">
        What drives us every day.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        At CallGauge, our core principles guide everything we do, from building
        intuitive tools to supporting our customers’ growth.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Core Principles</Subheading>
          <ul className="mt-6 space-y-6 text-sm/6 text-gray-600">
            <li>
              <strong>Affordability:</strong> We believe powerful call tracking
              shouldn’t break the bank. That’s why we offer numbers at just
              $0.50 and transparent pricing to help businesses of all sizes
              thrive.
            </li>
            <li>
              <strong>Simplicity:</strong> Our platform is designed to be
              intuitive, so you can set up call flows and gain insights without
              wading through complexity.
            </li>
            <li>
              <strong>Innovation:</strong> We’re always pushing to deliver
              cutting-edge features—like AI transcription included in every
              plan—to keep you ahead of the curve.
            </li>
            <li>
              <strong>Customer Success:</strong> Your growth is our priority. We
              provide fast, expert support to ensure you get the most out of
              CallGauge.
            </li>
          </ul>
          <div className="mt-10">
            <Button href="#" className="w-full sm:w-auto">
              Start with CallGauge
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <FeaturesSection />

      <Team />
      <Investors />
      <Values />
      <Footer />
    </main>
  )
}
