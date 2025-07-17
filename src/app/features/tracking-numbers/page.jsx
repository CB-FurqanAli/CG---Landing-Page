import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon, PlayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Scalable Call Tracking Numbers',
  description:
    'Monitor hundreds or thousands of phone numbers without breaking the bank. Get local, toll-free, or vanity numbers with the industry’s most competitive pricing—perfect for agencies and businesses of all sizes.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Call tracking numbers
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            With Call Gauge track countless phone numbers in just a few minutest
            at a price that nobody had ever offered!
          </Lead>
          <h2 className="mt-20 text-2xl font-semibold text-[#B867F9] md:text-3xl">
            Try Call Gauge Pro today
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            You will get $15 for free in your account to test our platform!
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Get Started Free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              *no credit card required
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TrackingNumbersContent() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="https://www.whatconverts.com/wp-content/uploads/2025/05/call-tracking-story-img.png"
            alt="From Basic Call Tracking to Complete Marketing Attribution"
            className=""
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
            What Are Call Tracking Numbers?
          </h2>
          <p className="mt-3 text-xl text-[#F0B100]">
            And how they help your marketing strategy succeed
          </p>

          <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
            <p>
              <strong>Call tracking phone numbers</strong> those unique numbers
              which are assigned to measure the effectiveness of your marketing
              campaign.
            </p>
            <p>
              Usually, businesses assign different tracking number to each
              marketing campaign. By attaching a unique number to each channel
              such as Google Ads, social media, print ads or website, you can
              easily know which marketing campaign is generating most leads.
              When a customer dials a tracking number, it got linked to its
              source automatically.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <p className="cursor-pointer text-lg text-blue-600 italic hover:underline">
              Want to setup call tracking number for your business now?
            </p>
            <p className="cursor-pointer text-lg font-semibold text-red-600 hover:underline">
              Try Call Gauge Pro — It&#39;s Free!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
function TrackingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        {/*Introduction*/}
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Introduction
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              Gone are the days when you used to pick your ringing phone without
              knowing if it is a new lead or a returning customer. Say hello to
              smarter conversations. With call tracking, every call tells a
              story about who is calling and from where?
            </p>
            <p className="mt-4">
              Even you can have insights about which ad or campaign caught their
              attention and generated a lead. So, in future you can measure and
              optimize your marketing efforts accordingly.
            </p>
          </div>
        </div>

        {/*What is a call tracking number?*/}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What is a call tracking number?
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              A tracking phone number is not just a number for receiving calls,
              instead it’s a great tool to get informed about:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Location of the caller.</li>
              </ul>

              <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  How long were they stay engaged on the phone call?
                </li>
              </ul>

              <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Which Ad or campaign they were derived from?
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              You can assign tracking numbers to your website, social media,
              mobile Ads and even to printed materials. Whether the call comes
              from your mobile service or main business line, you will get the
              information about what inspired the conversation.
            </p>
          </div>
        </div>

        {/*How does call tracking work?*/}
        <div className="mt-48">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                How does call tracking work?
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  <strong>In call tracking</strong>, unique local phone numbers
                  and toll free numbers are attached to specific marketing
                  sources. When someone fills out a form, clicks an ad or call
                  from a website, the number that appears to them is attached to
                  that specific channel.
                </p>
                <p>
                  These specific numbers appear on the caller ID when they
                  contact you and each call logged shows data like, location,
                  call duration, time stamp, device type etc.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p className="cursor-pointer text-lg text-blue-600 italic hover:underline">
                  Want to setup call tracking number for your business now?
                </p>
                <p className="cursor-pointer text-lg font-semibold text-red-600 hover:underline">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/679a8b95e178179bada0d823_call-tracking-fs_3.webp"
                loading="lazy"
                alt="Activate call analytics data in your martech tools with Invoca integrations"
                className="feature-set_image"
              />
            </div>
          </div>
        </div>

        {/*Why call tracking is essential?*/}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why call tracking is essential?
          </h2>

          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Call tracking plays an important role when you want to know the
              following details:
            </p>

            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Identify which of your campaigns is most efficient.
                </li>
                <li className="text-left">
                  Analyze which ads generate real leads.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Route your calls to the relevant team member automatically.
                </li>
                <li className="text-left">
                  Understand call patterns by location, time and device.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Learn who your best customers are.
                </li>
                <li className="text-left">
                  Minimize your cost by using features like automated greetings.
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              For example, when you have business in New York and running an ad
              campaign in Los Angeles, call tracking can show you exactly how
              well your campaign is converting.
            </p>
          </div>
        </div>

        {/*What are the benefits of call tracking?*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What are the benefits of call tracking?
          </h2>

          <div className="mt-10 text-center leading-relaxed">
            <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
              You can’t improve your marketing strategies until you don’t know
              which the most effective ones are. If you are not tracking down
              your phone calls, then you are definitely missing out important
              details regarding your customers and revenue generating
              opportunities.
            </p>
            <h2 className="mt-8 text-xl font-semibold">
              Here are some benefits call tracking offers you to increase your
              ROI.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 text-lg text-gray-600 sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Identify the areas where your best customers are calling from.
                </li>
                <li className="text-left">
                  Discover the peak calling time of your customers.
                </li>
                <li className="text-left">
                  Learn how your prospects found your business.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Reduce your telephone cost by using automated answering
                  messages.
                </li>
                <li className="text-left">
                  Enhance your call context with insights form live chat data.
                </li>
                <li className="text-left">Set up conference calls easily.</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Direct your customers to the relevant agent based on the
                  product or service.
                </li>
                <li className="text-left">
                  Track your conversations with customers to improve customer
                  services.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*How paid search optimized by using call tracking numbers?*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How paid search optimized by using call tracking numbers?
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Now businesses can maximize the impact of their paid search
              campaigns by pairing them up with call tracking phone numbers. By
              assigning unique tracking numbers to each campaign, ads or keyword
              groups you can:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Cut out expenses where they are wasted.
                </li>
                <li className="text-left">
                  Discover which keywords generate most calls via online ads.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Increase sales opportunities by effectively segmenting target
                  markets and hence resulting in increased ROI.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Shift budgets to the most effective campaigns from less
                  effective ones.
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              In nutshell, call tracking is data-driven marketing at its finest.
            </p>
          </div>
        </div>

        {/*Grow your business with call tracking.*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Grow your business with call tracking.
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Businesses can use call tracking to analyze phone calls across
              every touch point of customer interaction which includes the
              following:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Ads on your website.</li>
                <li className="text-left">A sales coupon and promotions.</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Information you share on trade shows.
                </li>
              </ul>
              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Lead generation forms.</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              With all the above information, businesses can design the
              marketing strategies according to what suits them best and can
              increase their ROI.
            </p>
          </div>
        </div>

        {/*What you need to see call tracking in action?*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What you need to see call tracking in action?
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              It’s really very simple to get started with call tracking. Here’s
              what you’ll need:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  <strong>A computer or laptop</strong> to access your call
                  tracking dashboard and manage your campaigns.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  <strong>A Call Gauge Pro account</strong> to sign up and then
                  set up multiple call tracking phone numbers to start
                  monitoring performance of the phone calls.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  <strong> A mobile phone</strong> to receive and test incoming
                  phone calls if needed.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*Setting up local and toll free tracking phone numbers.*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Setting up local and toll free tracking phone numbers.
          </h2>

          <div className="mt-10 text-center leading-relaxed">
            <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
              After creating the account, now it’s time to set up local and toll
              free tracking numbers according to your marketing needs.
            </p>
            <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
              You can do it in no time by using Call Gauge pro. With a wide
              range of area codes, you can find a number which will align with
              your business location or customer base.
            </p>
            <h2 className="mt-8 text-xl font-semibold">
              You can use these numbers to:
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 text-lg text-gray-600 sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Measure effectiveness of landing pages and lead forms of your
                  website.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Track calls from specific marketing channels.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Test new marketing campaigns.</li>
              </ul>
            </div>
          </div>
        </div>

        {/*Make your callers feel valued and track every touch point*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Make your callers feel valued and track every touch point
          </h2>

          <div className="mt-10 text-center leading-relaxed">
            <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
              By using Call Gauge Pro, you can personalize every phone call with
              custom greetings and smart routing. Even if the call volume of
              your business is quite high you can still make every customer feel
              special.
            </p>
            <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
              Want to know how many people called after seeing your Instagram
              ad? Or which landing page of your website derived most calls? Call
              Gauge Pro is the call tracking software that connects all the dots
              for you, so you can:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 text-lg text-gray-600 sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Track online to offline conversation.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Measure the performance of specific channel.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Improve your campaign targeting.</li>
              </ul>
            </div>
          </div>
        </div>

        {/*Use toll-free numbers in your call tracking strategy*/}

        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Use toll-free numbers in your call tracking strategy
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Even if your business mostly uses local numbers, adding toll-free
              numbers in your call tracking strategy can enhance your advantage
              over your competitors because toll-free numbers can:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Help your customers across regions to contact you.{' '}
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Increase the credibility of your brand and professionalism.
                </li>
              </ul>
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Make it easier for you to stand out among your competitors.{' '}
                </li>
                <li className="text-left">
                  Be helpful and effective in national campaigns or digital ads.{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              In social media platforms local area codes may be restricted and
              can be less effective, so toll-free tracking numbers can be of
              great importance. If your business handles a high volume calls,
              the added ease and nationwide reach of toll-free tracking numbers
              can be a real game changer and the cost is worth the return.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureHighlight({ title, description, image, alt, reverse = false }) {
  return (
    <div className="py-16">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>
          {image && (
            <div className="relative">
              <Image
                src={image}
                alt={alt}
                width={750}
                height={750}
                className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

function CoreFeatures() {
  const features = [
    {
      title: 'What Are Tracking Numbers?',
      description:
        'Tracking numbers are special phone numbers that reveal the source of every call. With CallGauge, you assign unique numbers to each marketing channel—ads, websites, or forms—to see exactly what’s driving your inbound calls.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Tracking Numbers Dashboard',
    },
    {
      title: 'Affordable Scalability',
      description:
        'Need hundreds of numbers? Thousands? CallGauge has you covered with local numbers at just $0.50/month and toll-free at $0.95/month—far cheaper than competitors—so you can scale without budget strain.',
      image: '/screenshots/coming-soon.png',
      alt: 'Scalable Pricing Options',
    },
    {
      title: 'Local & Toll-Free Options',
      description:
        'Choose from a wide range of area codes for local presence or go with toll-free numbers to boost your brand. Vanity numbers are available too, making your business memorable and trackable.',
      image: '/screenshots/coming-soon.png',
      alt: 'Number Selection Interface',
    },
    {
      title: 'Track Every Source',
      description:
        'Pinpoint where calls come from—online ads, social posts, or offline campaigns. CallGauge shows you caller locations, call durations, and more, so you know what’s working.',
      image: '/screenshots/coming-soon.png',
      alt: 'Source Tracking Analytics',
    },
    {
      title: 'Optimize Your Campaigns',
      description:
        'Use tracking numbers to measure ad performance. See which keywords or channels generate calls, then double down on what delivers results—no more guessing or wasted spend.',
      image: '/screenshots/coming-soon.png',
      alt: 'Campaign Optimization Tools',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Key Benefits
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Why Scalable Tracking Numbers Matter
        </Heading>
      </Container>
      {features.map((feature, index) => (
        <FeatureHighlight key={index} {...feature} reverse={index % 2 === 1} />
      ))}
    </div>
  )
}

function DemoSection() {
  return (
    <div
      className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36"
      id="demo"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading as="h2" className="text-3xl text-white md:text-4xl">
              See Scalable Tracking in Action
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Discover how CallGauge makes tracking thousands of numbers simple
              and affordable. Watch our 6-minute demo to see it work for your
              business.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Low-cost scaling
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Easy number
                management
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Actionable
                insights
              </li>
            </ul>
            <Button
              className="mt-8 inline-flex items-center gap-2"
              href="/demo"
            >
              <PlayIcon className="size-5" />
              Watch Demo Now
            </Button>
            <p className="mt-2 text-sm text-gray-400">No sign-up required</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800 shadow-xl">
            {/* <div className="absolute inset-0 h-auto backdrop-blur-xs"></div>
            <img
              src="https://callscaler.com/wp-content/uploads/2020/10/callscaler-cheap-call-tracking-1024x702.jpg"
              alt="Demo preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon className="size-16 cursor-pointer text-gray-700 opacity-80 transition-opacity hover:opacity-100" />
            </div> */}
            <video src="/demo/demo-video.mp4" controls></video>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const features = [
    {
      title: 'Instant Setup',
      description: 'Get new numbers in minutes—no delays or complicated steps.',
    },
    {
      title: 'Number Porting',
      description: 'Bring your existing numbers to CallGauge for free.',
    },
    {
      title: 'Real-Time Insights',
      description: 'Monitor call activity as it happens with live data.',
    },
    {
      title: 'Custom Caller ID',
      description: 'Show your brand name or number on every call.',
    },
    {
      title: 'Multi-Channel Attribution',
      description: 'Track calls across web, print, and more.',
    },
    {
      title: 'Bulk Number Management',
      description: 'Handle large sets of numbers with ease.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          More Advantages
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Extra Tools for Tracking Success
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
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
          <Subheading className="text-gray-500">Ready to Scale?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Start Tracking Numbers Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to explore scalable call
            tracking—no risk, no limits.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="#">
              Try It Now
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card needed • Instant setup
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function ScalableCallTrackingNumbers() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <TrackingNumbersContent />
      <TrackingIntroduction />
      {/*<CoreFeatures />*/}
      {/*<DemoSection />*/}
      {/*<AdditionalFeatures />*/}
      {/*<CTASection />*/}
      <Footer />
    </main>
  )
}
