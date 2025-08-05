import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function CallRecordingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:grid-cols-2 md:items-center">
      <div>
        {/*Call recording made easier*/}
        <div className="mt-4">
          <div className="mb-16 text-center text-3xl font-semibold sm:text-4xl">
            There will be a diagram regarding call recording and its steps
            floating around in circle.
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                AI-Enhanced Call Recording, Made Simpler
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-600 sm:text-lg">
                <p>
                  Searching for a{' '}
                  <strong> smart call tracking platform </strong> to record your
                  everyday business calls effortlessly? You’ve reached your
                  destination!
                  <br />
                  <br />
                  <strong> CallGauge AI </strong> automates the entire call
                  recording process by intelligently capturing every interaction
                  without the need of manual intervention.
                  <br />
                  <br />
                  Our <strong> AI-enhanced call recording feature </strong>{' '}
                  ensures clarity, compliance and accessibility so you can{' '}
                  <strong>
                    {' '}
                    focus on important conversations while we take care of the
                    tech{' '}
                  </strong>
                  .
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup Call recording for your business?
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge AI — It&#39;s Free!
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

        {/*Step 1: Sign Up:*/}
        <div className="mt-32">
          <div className="mb-20 text-center text-xl font-semibold sm:text-2xl">
            Let&#39;s walk you through how call recording setup works:
          </div>

          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Step 1: Quick & Easy Sign Up:
          </h2>
          <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            First of all you have to create a Call Gauge AI account which will
            take only about a few seconds. We’ll provide you with a free
            business phone number so you can get started instantly.
            <br />
            From the moment when you are set up, our{' '}
            <strong> AI enriched system </strong> will start its work by
            recording every conversation automatically leaving you with no
            worries.
          </p>

          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            You could:
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Listen the recordings right after the call ends.
              </li>
            </ul>

            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Download these recordings anytime.</li>
            </ul>
            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Share the calls with anyone you want like clients, employees and
                teammates.
              </li>
            </ul>
          </div>
        </div>

        {/*Step 2: Get a Phone number and Build your call flow:*/}
        <div className="mt-40">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Step 2: Get a Business Number & Design Your Call Flow
          </h2>
          <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            Once you signed in, choose a new phone number or{' '}
            <strong> port in your existing number</strong>—your first number is
            always free.
            <br />
            Now, design your <strong> customized AI-powered call flow</strong>:
          </p>
          {/*1st*/}
          <div>
            <h2 className="mt-12 text-center text-xl font-semibold sm:text-2xl">
              Simple Flow:
            </h2>
            <div className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-4 rounded-full bg-gradient-to-r from-blue-50 to-purple-100 py-8">
              <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
                <span className="font-semibold text-blue-600">
                  Forward Call
                </span>
              </div>

              <div className="text-2xl text-gray-500">➜</div>

              <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
                <span className="font-semibold text-purple-600">Record</span>
              </div>

              <div className="text-2xl text-gray-500">➜</div>

              <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">
                <span className="font-semibold text-green-600">Done</span>
              </div>
            </div>
          </div>
          {/*2nd */}
          {/*<div>*/}
          {/*  <h2 className="mt-12 text-center text-xl font-semibold sm:text-2xl">*/}
          {/*    Advanced Flow with AI Automation:*/}
          {/*  </h2>*/}
          {/*  <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-4 rounded-full bg-gradient-to-r from-blue-50 to-purple-100 py-8">*/}
          {/*    <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">*/}
          {/*      <span className="text-sm font-semibold text-blue-600 sm:text-base">*/}
          {/*        AI Voice Greeting*/}
          {/*      </span>*/}
          {/*    </div>*/}

          {/*    <div className="text-2xl text-gray-500">➜</div>*/}

          {/*    <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">*/}
          {/*      <span className="text-sm font-semibold text-indigo-600 sm:text-base">*/}
          {/*        Smart Routing*/}
          {/*      </span>*/}
          {/*    </div>*/}

          {/*    <div className="text-2xl text-gray-500">➜</div>*/}

          {/*    <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">*/}
          {/*      <span className="text-sm font-semibold text-purple-600 sm:text-base">*/}
          {/*        Voicemail Settings*/}
          {/*      </span>*/}
          {/*    </div>*/}

          {/*    <div className="text-2xl text-gray-500">➜</div>*/}

          {/*    <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md">*/}
          {/*      <span className="text-sm font-semibold text-green-600 sm:text-base">*/}
          {/*        SMS After Call*/}
          {/*      </span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          <div>
            <h2 className="mt-12 text-center text-xl font-semibold sm:text-2xl">
              Advanced Flow with AI Automation:
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Add personalized greetings with AI voice synthesis.
                </li>
                <li className="text-left">
                  Enable smart call routing & forwarding.
                </li>
              </ul>

              <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Configure voicemail settings.</li>
              </ul>
              <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Trigger automated SMS alerts after the call is ended.
                </li>
              </ul>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
              Our AI enhanced call recording feature optimizes these flows in
              real-time to{' '}
              <strong>
                {' '}
                reduce call drop-offs and hence improve customer experience
              </strong>
              .
            </p>
          </div>
        </div>

        {/*Step 3: Enable Call Recording*/}
        <div className="mt-40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="my-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900">
                Step 3: Enable Call Recording
              </h2>
              <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
                The last step is to turn on the call recording feature and by
                clicking just a single checkbox, you can enable call recording
                for all inbound and outbound calls.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 text-white md:grid-cols-2">
              <div className="rounded-2xl bg-[#EF8BCB] p-6 shadow-md transition hover:shadow-lg">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                    P
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">Pro Tip:</h3>
                </div>
                <p>
                  Add an AI-generated pre-call notification to inform your
                  callers about the fact that the conversation is being
                  recorded.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F0B100] p-6 shadow-md transition hover:shadow-lg">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                    C
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">
                    CallGauge AI&#39;s compliance assistant:
                  </h3>
                </div>
                <p>
                  helps ensure you meet local recording laws by providing
                  region-based consent suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*In other words it’s your system, your ways.*/}
        <div className="overflow-hidden">
          <Container className="pb-16">
            <h2 className="mt-20 text-center text-xl font-semibold sm:text-3xl">
              In other words it’s your system, your ways.
            </h2>
            <Screenshot
              width={1116}
              height={686}
              // src="/screenshots/app.png" // Replace with actual CallGauge dashboard screenshot
              src="/screenshots/dummy2.png" // Replace with actual CallGauge dashboard screenshot
              className="mt-12 sm:max-w-[76rem]"
            />
          </Container>
        </div>

        {/*AI-Enhanced Call Recording: Always On, Always Accessible*/}

        <div>
          <h2 className="mt-16 text-center text-4xl font-bold">
            AI-Enhanced Call Recording: Always On, Always Accessible
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
            Congratulations! Your <strong> AI-enhanced Call Recording </strong>{' '}
            is now ready to use. Every call will be automatically recorded,
            securely stored and easily accessible from your{' '}
            <strong> Call Logs</strong>.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Search through recordings by keywords or caller ID (thanks to AI
                transcription indexing).
              </li>
            </ul>

            <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Download, share, or review recordings anytime, anywhere.
              </li>
            </ul>
            <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">No storage limits. No hidden fees.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Set up call recording for your business phone numbers now !
            </h2>
            <p className="mt-4 text-lg">
              Start a trial — no credit card required.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="#"
                className="rounded-xl bg-[#F15E16] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Start a Free Trial
              </a>
              <p className="text-sm">✅ 14-day money back guarantee</p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"></div>
        </section>
      </div>
    </section>
  )
}
