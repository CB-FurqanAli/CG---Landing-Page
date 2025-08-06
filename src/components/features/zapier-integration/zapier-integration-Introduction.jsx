import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function ZapierIntegrationIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*Introduction*/}
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How to link Zapier in Call gauge Pro
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              It’s real simple to link Zapier in Call Gauge AI. Just follow
              these easy steps and get started.
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
                  Log in to Zapier:
                </h3>
              </div>
              <p>
                Visit Zapier and login to your account, if you don’t have any
                then you have to create a free account first.Visit Zapier and
                login to your account, if you don’t have any then you have to
                create a free account first.
              </p>
            </div>
            {/*2nd*/}
            <div className="rounded-2xl bg-[#B564FB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  C
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Create a new Zap:
                </h3>
              </div>
              <p>
                Click on “Create Zap” option on the top-left corner to start a
                new automation workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*Here was a video explanation.*/}
      <div>
        <div className="mt-20 overflow-hidden">
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

      {/*Set Call Gauge AI as the trigger app:*/}
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
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Set Call Gauge AI as the trigger app:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                In the trigger section search for “Call Gauge AI”. Choose “New
                Call” as the trigger event to start tracking each and every new
                call.
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

      {/*Connect your Call Gauge AI account:*/}
      <div className="mt-32">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Left: Image */}

          <div>
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Connect your Call Gauge AI account:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Enter your <strong>API Token and account email </strong>
                to authorize Zapier to get access to your Call Gauge AI account.
                You can easily find your API token by clicking on the top-right
                menu of your Call Gauge AI account’s dashboard. It will appear
                under <strong>“API Tokens”</strong>.
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

      {/*Configure and test the trigger:*/}
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
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Configure and test the trigger:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                While configuring trigger settings enter your Call Gauge AI
                account email. Test the trigger to fetch a sample call record to
                ensure the proper working of integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Add action steps based on your workflow:*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Add action steps based on your workflow:
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          Now you can add the actions you want to automate. For example:
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Add a new contact to your CRM:{' '}
            </h3>
            <p>
              {' '}
              select your CRM (e.g. Hubspot) as the action app. Set it up by
              creating a new contact with the details of caller.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Send an Email Notification:
            </h3>
            <p>
              choose your email service like Gmail. Customize the message to
              include relevant call details and define the recipient.
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Log data in Google Sheets:
            </h3>
            <p>
              use the Google Sheets as your action app. Map all your required
              call data like caller ID, time etc. to the appropriate columns and
              choose your target spreadsheet.
            </p>
          </div>
        </div>
      </div>

      {/*Test and Publish:*/}
      <div className="mt-32">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:items-center">
          {/* Left: Image */}

          <div>
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Test and Publish:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Test each action by using the sample data to ensure that
                everything is working fine and then only publish your Zap.
              </p>
            </div>
            <div className="mt-16 space-y-3">
              <p className="text-lg font-semibold text-red-600">
                Want to test it for creating your own Zap?
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

      {/*Sign up today for a free trial and get started!*/}
      <div className="my-32">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Sign up today for a free trial and get started!
            </h2>
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
