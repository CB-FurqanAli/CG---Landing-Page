import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function ClientManagementIntroduction() {
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
              Call Gauge AI is not just a call tracking tool, it is built to
              manage clients effortlessly. Your clients will have their own
              separate sub-user login. This allows them to easily view and
              manage their calls and text messages, voicemails. which are
              related to their numbers without your constant involvement.
            </p>
          </div>
        </div>
      </div>
      {/*What makes our client portal special?*/}
      <div className="mt-40">
        {/*Section Title*/}
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          What makes our client portal special?
        </h2>

        {/*Feature Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Individual Client Logins:
            </h3>
            <p>
              Each client gets a unique sub-user login to access their own
              calls, message and voicemails, nothing more nothing less.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Transparency That Builds Trust:
            </h3>
            <p>
              There would be no more blind spots. All the clients will get full
              access to their communication history which reduces the back and
              forth updates necessity and builds credibility.
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Real-Time Call Recording Access:
            </h3>
            <p>
              Clients can instantly listen to their own call recordings. This is
              perfect for reviewing leads, resolving disputes and improving
              customer services.
            </p>
          </div>

          {/*Feature 4 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Self-Service Simplicity:
            </h3>
            <p>
              Clients can login any time to monitor their calls, view their
              texts and listen to their voicemails saving you a lot of admin
              work.
            </p>
          </div>

          {/*Feature 5 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              “See What They See” Mode:
            </h3>
            <p>
              You can instantly view the sub-account of your client exactly as
              he does-without needing his login credentials. This is ideal for
              onboarding, trouble-shooting and support.
            </p>
          </div>
        </div>

        {/*In other words it’s your system, your ways.*/}
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
      {/*Deliver premium client experience:*/}
      <div className="mt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
              Deliver premium client experience:
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                Call Gauge AI’s client portal helps in developing a strong
                client relationship. Clients feel respected, valued and heard
                when they could login to their own accounts and access their
                data. This increases client satisfaction and loyalty.Call Gauge
                Pro’s client portal helps in developing a strong client
                relationship. Clients feel respected, valued and heard when they
                could login to their own accounts and access their data. This
                increases client satisfaction and loyalty.
              </p>
              <p>
                In today’s fast paced world, clients want clarity and control.
                Call Gauge pro armed you with tools by which you can exceed
                those expectations and simplify your workflow.{' '}
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
      <div className="mt-40">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Set up client portal for your business phone numbers now !
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
        </section>
      </div>
    </section>
  )
}
