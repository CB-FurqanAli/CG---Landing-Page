import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function PayPerCallIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*Maximize revenue with Call Gauge AI’s Pay Per Call feature:*/}
      <div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Maximize revenue with Call Gauge AI’s Pay Per Call feature:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Pay per call feature of Call Gauge AI makes invoicing for
                qualified calls effortless. You don’t have to worry about
                spreadsheets, manual invoices or chasing down payments. It’s all
                automated, accurate billing that enhances your business revenue.
              </p>
            </div>
            <div className="mt-6">
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
      {/*Here’s what included:*/}
      <div className="mt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="my-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Here’s what included:
            </h2>
            <p className="mx-auto my-12 max-w-2xl text-lg text-gray-600">
              The following are the benefits that you’ll get by using Call Gauge
              Pro’s Pay Per Call billing suite.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                  S
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Smooth Stripe integration:
                </h3>
              </div>
              <p className="text-gray-600">
                Connect your Stripe account easily and start sending invoices to
                your clients in an automated way. Payments will pool directly
                into your Stripe account without any further delay.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                  A
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Automated invoicing for Qualified calls:
                </h3>
              </div>
              <p className="text-gray-600">
                Invoices are generated automatically and sent to your clients on
                the basis of your call criteria. No manual work is required.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                  F
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Flexible billing schedules:
                </h3>
              </div>
              <p className="text-gray-600">
                You can choose a billing schedule that fits your cash flow
                needs, weekly or monthly.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                  R
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Set your billing rules:
                </h3>
              </div>
              <p className="text-gray-600">
                You are the controller of the billing rules. If you want to bill
                the calls that last longer than 2 minutes, you can do that
                easily. You can set rules based on this call duration to ensure
                that you bill for real leads only.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold text-white">
                  C
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-800">
                  Client specific setup:
                </h3>
              </div>
              <p className="text-gray-600">
                You can now assign specific numbers to particular clients and
                can customize the billing rules per client or number. This is of
                great importance for the agencies that handle multiple clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Here was a video explanation.*/}
      <div className="">
        <div className="mt-4 text-center text-red-400">
          Here was a video explanation.
        </div>

        <div className="overflow-hidden">
          <Container className="pb-16">
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
      {/*How Stripe Integration works:*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          How Stripe Integration works:
        </h2>

        <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
          <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Set your billing frequency like weekly or monthly whatever your
                preference is.
              </li>
              <li className="text-left">
                Define what a qualified call is. (e.g. above 120 seconds)
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Connect your Stripe account.</li>
              <li className="text-left">
                Call Gauge AI will track calls and sends automated invoices
                accordingly.
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Clients receive a payable invoice through email.
              </li>
              <li className="text-left">
                Payments will go directly to your Stripe account.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Why use Call Gauge AI’s Pay Per Call feature?*/}
      <div className="mt-40">
        {/*Section Title*/}
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          Why use Call Gauge AI’s Pay Per Call feature?
        </h2>

        {/*Feature Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Save time:</h3>
            <p>
              Time-consuming invoicing tasks will be automated to save time.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Improve cash flow:</h3>
            <p>Get paid faster and more reliably.</p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Eliminate errors:</h3>
            <p>Get rid of the mistakes that could happen manually.</p>
          </div>
          {/*Feature 4 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Boost transparency:</h3>
            <p>
              Due to clear and professional invoices to the clients,
              transparency increases.
            </p>
          </div>
        </div>
      </div>

      {/*To take full control of your call-based revenue by using Call Gauge AI’s pay per call billing feature. Sign up today for a free trial and get started!*/}
      <div className="mt-40">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              To take full control of your call-based revenue by using Call
              Gauge Pro’s pay per call billing feature.
            </h2>
            <p className="mt-4 text-lg">
              Sign up today for a free trial and get started!
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
        </section>
      </div>
    </section>
  )
}
