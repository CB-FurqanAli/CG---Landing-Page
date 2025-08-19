export default function PayPerCallIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*What is Pay Per Call Billing?*/}
      <div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What is Pay Per Call Billing?
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                CallGauge AI’s <strong> Pay Per Call </strong> feature allows
                you to charge clients automatically for qualified calls based on
                your customized criteria. No more manual spreadsheets, delayed
                invoicing or tracking calls one-by-one. We automate the entire
                workflow with unmatched accuracy and full transparency.
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
              src="/call-flow/Pay-Per-Call-image.png"
              loading="lazy"
              alt="Activate call analytics data in your martech tools with Invoca integrations"
              className="feature-set_image"
            />
          </div>
        </div>
      </div>

      {/*Key Benefits of CallGauge AI’s White Labeling Feature*/}
      <div className="mt-32 rounded-2xl bg-white bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-6 shadow-lg sm:bg-linear-145">
        <h2 className="my-8 text-center text-3xl font-bold sm:text-4xl">
          Key Features of Our Pay Per Call Suite
        </h2>

        <div className="mx-auto max-w-4xl px-6">
          <ol className="list-inside list-decimal space-y-6 text-gray-700">
            {/*1st*/}
            <li>
              <strong>Seamless Stripe Integration</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Connect your Stripe account in seconds and start sending
                  automated invoices. Funds are deposited directly into your
                  Stripe account—no extra steps or delays.
                </li>
              </ul>
            </li>
            {/*2nd*/}
            <li>
              <strong>Automated Invoicing for Qualified Calls</strong>

              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Define what qualifies as a billable call (e.g. over 2
                  minutes), and CallGauge AI will generate and send professional
                  invoices to your clients — all on autopilot.
                </li>
              </ul>
            </li>
            {/*3rd*/}
            <li>
              <strong>Custom Billing Schedules</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Set your preferred billing frequency — weekly, monthly, or
                  custom — to match your business needs and cash flow cycles.
                </li>
              </ul>
            </li>
            {/*4th*/}
            <li>
              <strong>Flexible Billing Rules</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  You’re in control. Set call duration thresholds or other
                  qualification metrics to ensure you&#39;re only billing for
                  real, high-quality leads.
                </li>
              </ul>
            </li>
            {/*5th*/}
            <li>
              <strong>Client-Specific Configuration</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Assign unique phone numbers to each client and create
                  individual billing rules per client or per number. Perfect for
                  agencies managing multiple accounts.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      {/*How It Works: Stripe Integration in Action*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          How It Works: Stripe Integration in Action
        </h2>

        <div className="mt-10 text-center text-lg leading-relaxed text-gray-600">
          <div className="mt-16 grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Choose your billing cycle (weekly/monthly).
              </li>
              <li className="text-left">
                Define what counts as a qualified call (e.g. calls over 120
                seconds).
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">Connect your Stripe account.</li>
              <li className="text-left">
                CallGauge AI tracks calls and auto-generates invoices.
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Clients receive their invoice via email.
              </li>
              <li className="text-left">
                Payments land directly in your Stripe account.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*Why Use CallGauge AI’s Pay Per Call?*/}
      <div className="mt-40">
        {/*Section Title*/}
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          Why Use CallGauge AI’s Pay Per Call?
        </h2>

        {/*Feature Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">⏳ Save Time</h3>
            <p>Say goodbye to the tasks related to manual billings</p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">💸 Improve Cash Flow</h3>
            <p>
              Get paid faster withAI enhanced automated and timely invoicing.
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              ✔️ Eliminate Human Errors
            </h3>
            <p>Accurate invoicing reduces billing disputes.</p>
          </div>
          {/*Feature 4 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              🔍 Increase Transparency
            </h3>
            <p>Clients receive clear, itemized invoices they can trust.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-32">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Take Control of Your Call-Based Revenue
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            With{' '}
            <span className="font-semibold text-blue-600">CallGauge AI</span>,
            you’re not just tracking calls — you’re monetizing them smarter and
            faster. Whether you’re an agency, telecom reseller, or service
            provider, our <span className="font-semibold">Pay Per Call</span>{' '}
            feature is designed to scale with your business.
          </p>
          <div className="mb-6 flex items-center justify-center gap-3 text-sm text-gray-600">
            <span>✅ No credit card needed — just results.</span>
          </div>
        </div>
      </div>

      {/*To take full control of your call-based revenue by using Call Gauge AI’s pay per call billing feature. Sign up today for a free trial and get started!*/}
      <div className="my-40">
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
