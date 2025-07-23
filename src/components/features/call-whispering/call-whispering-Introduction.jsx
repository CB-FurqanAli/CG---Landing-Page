import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function CallWhisperingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      <div>
        {/*Introduction*/}
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Introduction
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              A call whispering message in fact a small text-to-speech greeting
              that only the receiver of the call will listen and not the caller.
              It is played before the call connects to give the receiver certain
              information regarding call like:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Who is calling and from where?</li>
                <li className="text-left">Who referred them?</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Which campaign caller belongs to?</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#F0B100] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  What product or service they are interested in?
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p>
              Call whispering enables the receiver to be more prepared to have a
              productive conversation and hence can convert calls into leads
              faster.
            </p>
          </div>
        </div>

        {/*Why use call whispering:*/}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Why use call whispering:
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Call whispering messages are helpful in improving sales
              conversations by providing insights to your teammates whenever
              phone rings. Which means:
            </p>
            <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Less confusion for your team.</li>
                <li className="text-left">More personalized calls.</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">Faster lead qualifications.</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">More conversions</li>
              </ul>
            </div>
          </div>
        </div>

        {/*How to set up call whispering:*/}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How to set up call whispering:
          </h2>
          <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
            <p className="mx-auto my-2 max-w-4xl">
              Call Gauge Pro lets you to purchase as many numbers as you want at
              only $0.5 per number. You can manage these numbers and can add
              call whispering on each number at such an affordable price.
            </p>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-medium">
              To add a customize call whispering message all you have to do is:
            </p>
            <div className="mt-12 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#b483e6] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Go to Call Flow settings of your number.
                </li>
                <li className="text-left">Click “Edit Call Flow.</li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  On the right side find “Pre-call whisper Message.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Enter your customized message and save.
                </li>
              </ul>
            </div>
          </div>
          <div className="overflow-hidden">
            <Container className="pb-16">
              <h2 className="mt-20 text-center text-xl font-semibold sm:text-3xl">
                That’s it. Now this customized message will be played to the
                receiver before that call get connected each time.
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
        </div>
      </div>
      {/*Who should use Call Whispering feature:*/}
      <div className="mt-40">
        {/*Section Title*/}
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          Who should use Call Whispering feature:
        </h2>

        {/*Feature Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Marketing agencies:</h3>
            <p>
              to show clients from where the calls are coming and to prove ROI.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Sales teams:</h3>
            <p>to know which offer or funneled to the call.</p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Support teams:</h3>
            <p>to prep agents for VIP or priority support calls.</p>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Set up call whispering for your business phone numbers
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
