import { Container } from '@/components/container'
import { CallFlowFaqs } from '@/components/features/call-flows/call-flow-faqs'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead } from '@/components/text'

export const metadata = {
  title: 'Advanced Call Flows',
  description:
    'Master your inbound calls with CallGauge’s advanced call flow tools. Build custom routing, automate tasks, and enhance every call experience effortlessly.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Advanced Call Flows
          </Heading>
          <h2 className="mt-8 text-xl font-medium md:text-2xl">
            A feature, made simpler for you
          </h2>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Want to automate and streamline your business’s call flow? Call
            Gauge Pro provides all the tools you need to create a smooth,
            efficient and hassle free setup.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={'#'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              Get Started Free
            </a>
            <p className="mt-2 font-semibold text-red-600">
              14-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CallFlowIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:grid-cols-2 md:items-center">
      <div>
        {/*Introduction*/}
        <div>
          <div className="mb-16 text-center text-3xl font-bold text-[#E281D5] sm:text-4xl">
            There will be an image of call flow and all its relevant features
          </div>

          <div>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Introduction
            </h2>
            <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
              <p className="my-2">
                Call flow is a process which involves many steps and directs how
                inbound phone calls would be handled in your business. Call
                Gauge Pro lets you set up your call flow in a way you want it to
                be. There are several options that you can choose like,
                customized greetings, call forwarding, voicemails,
                multi-ringing, missed call notifications, call recording, etc.
              </p>
              <p className="mt-4">
                Call flow automation can help small businesses route inbound
                phone calls, missed calls management and creating a better
                customer experience. Because of this you can easily manage
                leads, track call activity and send automated texts and email
                notifications when a call is missed.
              </p>
              <p className="mt-4">
                With Call Gauge Pro’s visual call flow builder, you can
                customize each step easily. Your inbound phone call will follow
                those steps which you will choose. Mostly our users use 2-5
                steps to manage their phone calls in an efficient manner.{' '}
              </p>
            </div>
          </div>
        </div>

        {/*Customized greetings*/}
        <div className="mt-40">
          <div className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            The following are the features which we are currently offering in
            our call flow setup.
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Customized greetings:
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Take a professional start by adding a customized greetings
                  which will be played before a call is connected. There are two
                  options i.e. text to speech or upload your own audio file
                  (WAV/ MP3).
                </p>
                <p>
                  This feature is perfect when you want to let your customers
                  know that call is going to be recorded or while sharing a
                  quick announcement. So, a brief message would be played before
                  the call gets connected.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business now
                </p>
                <p className="text-lg font-semibold text-red-600">
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

        {/*Call forwarding*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}

            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Call forwarding:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Call forwarding is often the most important step of call flow
                  setup. Call Gauge Pro makes it incredibly simple for you to
                  incorporate it in you call flow. Call forwarding lets you to
                  forward the incoming call to any number of your choice, it can
                  be: your sales team, any other specific department, your
                  client or any other destination.
                </p>
                <p>
                  You have full control over calls, where you want them to be
                  forwarded and how long they would ring. By default, calls
                  would ring for 20 sec before moving to the next step if not
                  answered, but you can of course customize this delay between
                  10 to 50 sec.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business now
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Voicemail setup*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Voicemail setup:
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  With Call Gauge Pro’s built-in voicemail feature, you will
                  never miss a message. If a call isn’t answered due to any
                  reason you can route a caller to voicemail setup using either
                  text-to-speech or a custom audio file (WAV/MP3).
                </p>
                <p>
                  All your voicemails would be saved and easily accessible
                  within your account. An SMS with the voicemail recording would
                  be sent to any number of your choice, this could be you, your
                  client, or any of your team member handling call backs.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-lg italic">
                  <strong className="text-red-600">Note:</strong> You can skip
                  call forwarding and can direct your callers to voicemails if
                  that suits you better.
                </p>
              </div>
              <div className="mt-8 flex justify-center gap-4">
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

        {/*Send Missed Call Texts:*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Send Missed Call Texts:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  If your call is not answered and you have used call forwarding
                  then Call Gauge Pro will detect it and send automated text to
                  keep the communication flowing. This is a powerful tool which
                  lets your to notify your clients, employees and even callers
                  that they have missed a call. By using this feature you can
                  inform your caller to adopt an alternative way to contact you
                  or push them to fill a form.
                </p>
                <p>
                  At the bottom of this module you can see an option “Include
                  caller number in the text”. This would be useful while sending
                  the text message to client or employee and not the caller.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business now
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Email notifications & automations*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Email notifications & automations:
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Stay well informed with Call Gauge Pro’s another outstanding
                  feature “Email notifications & automations”. These real-time
                  reports will email you whenever a qualified customer call will
                  reach your business call flow.
                </p>
                <p>
                  To get informed only about meaningful interactions, we offer
                  you to apply filter “Only send email if the call is over X
                  seconds”. By default it is set to “90 seconds” but it is
                  flexible to fit your needs. Hence helping you to avoid
                  robo-calls, spams or unqualified leads
                </p>
                <p>
                  This email gets sent as soon as the call ends. So keep your
                  clients, employees, team mates or relevant person informed.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business now
                </p>
                <p className="text-lg font-semibold text-red-600">
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

        {/*Multi-ringing setup*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Multi-ringing setup:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Lastly Call Gauge Pro offers multi-ringing feature which
                  enables you to ring multiple phone numbers at the same time
                  and first one pick up gets the call. This will be helpful in
                  reducing the customer waiting time and ensures that someone is
                  always there to answer the call. So, more customers can be
                  dealt as it would take less time to answer the call.
                </p>
                <p>
                  This feature is also best when it comes to lead distribution
                  among clients in the same vertical. Up to 10 numbers can be
                  added in this module.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business now
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
              <div className="mt-8 flex justify-center gap-4">
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
          </div>
        </div>
        {/*Additional features & settings:*/}

        <div className="mt-40">
          {/*Section Title*/}
          <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
            Additional features & settings:
          </h2>
          <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            There are some additional features and settings in call flow setup
            which gives you full control and customization over your call
            handling experience.
          </p>

          {/*Feature Cards Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/*Feature 1 */}

            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                ✅ Press 1 to connect:
              </h3>
              <p>
                Get rid of spam and robo-calls by our last feature of “Press 1
                to connect”. When you enable this feature, the callers must
                press 1 to get the call connected. But we recommend using this
                feature only when you are experiencing too many spam calls.
              </p>
            </div>

            {/*Feature 2 */}
            <div className="rounded-2xl bg-[#F39FCA] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                🎭 Caller ID customization:
              </h3>
              <p>
                You can choose Call Gauge Pro number to be displayed instead of
                caller’s number to the recipient. By doing this agents and
                clients can save and recognize the number- hence they know
                before answering about what kind of call is coming through.
              </p>
            </div>

            {/*Feature 3 */}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                🔒 Call recording and Pre-call whisper:
              </h3>
              <p>
                With this you can automatically record calls, which later on can
                be used to monitor quality, train agents and improve first-call
                resolution. Furthermore pre-call whisper message can be
                activated to give your team quick context before answering the
                phone call.
              </p>
            </div>

            {/*Feature 4 */}
            <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">📩 SMS forwarding:</h3>
              <p>
                You can forward SMS to any other number by just one click, so
                you never miss a message.
              </p>
            </div>
          </div>
          <p className="mx-auto my-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            All these features are available on call flow settings page and can
            be toggled ON/OFF easily, giving you a flexible control over your
            calls.
          </p>
        </div>

        {/*Want to setup a call flow for your business?*/}
        <div className="mt-40">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Want to setup a call flow for your business?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              By using Call Gauge Pro, you can get a phone number in just a few
              clicks and can get started with our above mentioned features to
              experience full control over your call flows. You can add more
              numbers and call flows according to your needs.
            </p>
            <p className="mt-4">
              Whether you are lead generation expert looking to route and
              maximize call volume or a contact center aiming to streamline
              inbound calls, our call flow makes its super easy for you.
            </p>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mt-8 space-y-3">
              <p className="text-lg text-blue-600 italic">
                Try Call Gauge Pro today and start managing your calls smartly!
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href={'#'}
                className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                Start for free
              </a>
              <p className="mt-2 font-semibold text-red-600">
                *no credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CallFlows() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />

      <CallFlowIntroduction />
      <CallFlowFaqs />
      <Footer />
    </main>
  )
}
