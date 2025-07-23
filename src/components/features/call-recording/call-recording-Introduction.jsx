import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function CallRecordingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:grid-cols-2 md:items-center">
      <div>
        {/*Call recording made easier*/}
        <div className="mt-4">
          <div className="mb-16 text-center text-3xl font-bold text-[#E281D5] sm:text-4xl">
            There will be a diagram regarding call recording and its steps
            floating around in circle.
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Call recording made easier
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  If you are in search of a call tracking software to create a
                  call recording setup for your business, you have reached your
                  destination. Call Gauge Pro makes it extremely simple for you
                  to capture every conversation on autopilot with no complicated
                  setup and no tech worries.
                </p>
                <p>
                  Let&#39;s walk you through how call recording setup works:
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
        <div className="mt-40">
          <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
            Step 1: Sign Up:
          </h2>
          <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            First of all you have to create a Call Gauge Pro account which will
            take only about a few seconds. You will get your first business
            phone number free so you can start working. From the point when you
            are set up, Call Gauge Pro will start its work by recording every
            conversation automatically leaving you with no worries.
          </p>

          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            You could:
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Listen the recordings right after the call ends.{' '}
              </li>
            </ul>

            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Download these recordings anytime.</li>
            </ul>
            <ul className="flex list-disc items-center rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Share the calls with anyone you want like clients, employees and
                teammates.{' '}
              </li>
            </ul>
          </div>
        </div>

        {/*Step 2: Get a Phone number and Build your call flow:*/}
        <div className="mt-40">
          <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
            Step 2: Get a Phone number and Build your call flow:
          </h2>
          <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            Once you have signed in, pick your phone number of your choice or
            you can simply port your number in. We offer you first business
            phone number free. Next you are required to create a call flow, a
            way which your clients’ call will follow. This is adventurous as you
            can choose all the steps of call flow according to your needs.
          </p>
          {/*1st*/}
          <h2 className="text-center text-xl font-semibold sm:text-2xl">
            If you want it to be simple then:
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Forward the call.</li>
            </ul>

            <ul className="flex list-disc items-center rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Record the audio.</li>
            </ul>
            <ul className="flex list-disc items-center rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Finished.</li>
            </ul>
          </div>
          {/*2nd */}
          <div>
            <h2 className="mt-12 text-center text-xl font-semibold sm:text-2xl">
              If you are in a mood to do it in a fancy way then:
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Add custom greetings.</li>
                <li className="text-left">Add voicemail settings.</li>
              </ul>

              <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Set call forwarding.</li>
              </ul>
              <ul className="flex list-disc items-center rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Trigger SMS notifications</li>
              </ul>
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

        {/*Step 3: Turn on Call Recording:*/}
        <div className="mt-32">
          <div className="mb-12">
            <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Step 3: Turn on Call Recording:
            </h2>
            <p className="mx-auto my-8 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
              Last step is to turn on the call recording by clicking the check
              box. It would be better if you write a message to let your caller
              know about the fact that call would be recorded. This depends upon
              the laws where you are operating, if it’s mandatory to let the
              caller know then you have to.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/679a8b95e178179bada0d823_call-tracking-fs_3.webp"
                loading="lazy"
                alt="Activate call analytics data in your martech tools with Invoca integrations"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}

            <div>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  You have successfully integrated “Call recording” feature in
                  your call flow. Call Gauge Pro will now record the calls and
                  you can listen, download and share these with whoever you want
                  to.
                </p>
                <p>
                  Ready to try this feature out? Click on the button given below
                  to sign up for a 7 day’s free trial and see it yourself how it
                  works.
                </p>
              </div>

              <div className="mt-8 gap-4 text-center">
                <a
                  href={'#'}
                  className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
                >
                  Start a 7 day trial
                </a>
                <p className="mt-2 font-semibold text-red-600">
                  Risk free for 14 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
