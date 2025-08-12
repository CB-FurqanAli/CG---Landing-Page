export default function ZapierIntegrationIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*What is Zapier?*/}
      <div>
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">What is Zapier?</h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Zapier is a powerful automation platform that connects CallGauge
                AI to thousands of other apps—CRMs, email tools, spreadsheets,
                databases, and more. You can create workflows (called Zaps) that
                trigger actions based on your call activity, with just a few
                clicks.
              </p>
            </div>
          </div>
          {/* Right: Text Content */}
          <div className="w-full">
            <img
              src="https://www.whatconverts.com/wp-content/uploads/2025/05/call-tracking-story-img.png"
              alt="From Basic Call Tracking to Complete Marketing Attribution"
              className=""
            />
          </div>
        </div>
      </div>

      {/*How to Integrate Zapier with CallGauge AI*/}
      <div className="mt-40">
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How to Integrate Zapier with CallGauge AI
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              Follow these easy steps to create your first Zap and streamline
              your business workflows:
            </p>
          </div>
        </div>
      </div>
      {/*Log in to Zapier:*/}
      <div className="mt-16">
        <div className="px-6">
          <div className="grid grid-cols-1 gap-10 text-white md:grid-cols-2">
            {/*1st*/}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  L
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Log In to Zapier{' '}
                </h3>
              </div>
              <p>
                Go to zapier.com and sign in. Don’t have an account? Create one
                for free.
              </p>
            </div>
            {/*2nd*/}
            <div className="rounded-2xl bg-[#B564FB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  C
                </div>
                <h3 className="ml-4 text-xl font-semibold">Create a New Zap</h3>
              </div>
              <p>
                Click <strong> “Create Zap” </strong> to build a new automation
                workflow.
              </p>
            </div>
            {/*3rd*/}
            <div className="rounded-2xl bg-[#B564FB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  S
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Set CallGauge AI as the Trigger App
                </h3>
              </div>
              <p>
                Search for <strong> “CallGauge AI” </strong> and select it.
                <br />
                Choose <strong> “New Call” </strong> as the trigger event to
                capture every incoming or tracked call.
              </p>
            </div>
            {/*4th*/}
            <div className="rounded-2xl bg-[#F0B100] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  C
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Connect Your CallGauge AI Account
                </h3>
              </div>
              <p>
                Authorize access using your{' '}
                <strong> API Token and account email </strong>.
                <br />
                To find your token, go to your CallGauge AI dashboard is greater
                then <strong> Settings </strong> is greater then{' '}
                <strong> API Tokens </strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Configure & Test the Trigger*/}
      <div className="mt-32">
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
            <h2 className="text-3xl font-bold sm:text-4xl">
              Configure & Test the Trigger
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Enter your <strong> CallGauge AI </strong> email address. Test
                the connection to pull a sample call and verify data flow.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-lg font-semibold text-red-600">
                Try Call Gauge AI — It&#39;s Free!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Add Your Action Steps*/}
      <div className="mt-40">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Right: Text Content */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Add Your Action Steps
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>Now add the tasks you want to automate. For example</p>

              <div>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    <strong>Sync Call Data to Your CRM</strong> <br />
                    <strong>
                      {' '}
                      Automatically add new leads or contacts{' '}
                    </strong>{' '}
                    to CRMs like HubSpot, Salesforce or Zoho.
                  </li>
                  <li>
                    <strong>Send Email Alerts </strong> <br />
                    Notify your team via Gmail or Outlook when a call is missed
                    or qualified.
                  </li>
                  <li>
                    <strong>Log Calls in Google Sheets</strong> <br />
                    Automatically save call data like caller ID, duration and
                    timestamp to a spreadsheet.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Left: Image */}
          <div className="w-full">
            <img
              src="https://www.whatconverts.com/wp-content/uploads/2025/05/call-tracking-story-img.png"
              loading="lazy"
              alt="Smart Call Forwarding"
              className="feature-set_image"
            />
          </div>
        </div>
      </div>

      {/*Test and Publish:*/}
      <div className="mt-32">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Right: Text Content */}
          <div className="w-full">
            <img
              src="https://www.whatconverts.com/wp-content/uploads/2025/05/call-tracking-story-img.png"
              alt="From Basic Call Tracking to Complete Marketing Attribution"
              className=""
            />
          </div>

          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Test and Publish</h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Run a test using sample data to ensure everything works
                perfectly, then publish your Zap.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Why Connect Zapier to CallGauge AI?*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Why Connect Zapier to CallGauge AI?
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Save Time</h3>
            <p>Automate repetitive tasks effortlessly.</p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Increase Efficiency</h3>
            <p>No more manual data entry.</p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Stay Informed</h3>
            <p>Real-time alerts, CRM syncs, and smart call routing.</p>
          </div>
          {/*Feature 4 */}
          <div className="col-2 rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Work Smarter</h3>
            <p>
              {' '}
              Use data to drive workflows in the apps your team already uses.{' '}
            </p>
          </div>
        </div>
      </div>

      {/*Sign up today for a free trial and get started!*/}
      <div className="my-32">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to Automate?
            </h2>
            <p className="mt-4 text-lg">
              {' '}
              With Zapier + CallGauge AI, you can eliminate busywork and focus
              on growth. Whether you&#39;re managing leads, syncing call data or
              sending notifications, Zapier makes it automatic.{' '}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="#"
                className="rounded-xl bg-[#F15E16] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Start a Free Trial
              </a>
              <p className="text-sm font-medium">
                No credit card required – just smarter workflows.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
