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
              CallGauge AI isn’t just a call tracking tool, it’s a complete{' '}
              <strong> solution for client management </strong>. Designed for
              agencies, resellers and businesses that serve multiple clients,
              our platform enables you to assign each{' '}
              <strong> client a dedicated sub-account </strong>. With this, they
              can independently monitor their communications without needing
              your constant assistance.
            </p>
          </div>
        </div>
      </div>
      {/*What Makes Our Client Portal Stand Out?*/}
      <div className="mt-32">
        {/*Section Title*/}
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What Makes Our Client Portal Stand Out?
        </h2>

        {/*Feature Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Individual Client Access
            </h3>
            <p>
              Each client gets his own secure login to access only his assigned
              data — including calls, SMS and voicemails. No unnecessary
              exposure and no confusion.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Transparency That Builds Trust
            </h3>
            <p>
              Clients can view their communication history in real-time, which
              eliminates guesswork and repetitive updates — helping you build
              lasting trust and credibility.
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Instant Access to Call Recordings
            </h3>
            <p>
              Clients can listen to their own calls anytime. Whether it’s for
              lead verification, dispute resolution or service training, it’s
              always available.
            </p>
          </div>

          {/*Feature 4 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Self-Serve Simplicity
            </h3>
            <p>
              Your clients can log in anytime to monitor their activity
              therefore, saving you time on administrative tasks while offering
              them full visibility.
            </p>
          </div>

          {/*Feature 5 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              “See What They See” Mode
            </h3>
            <p>
              Need to assist a client or provide a demo? Instantly access their
              view without needing their credentials. It’s ideal for onboarding,
              troubleshooting and support.
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
      {/*Deliver a Professional, Self-Branded Experience*/}
      <div className="mt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {/* Left: Image */}
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Deliver a Professional, Self-Branded Experience
            </h2>

            <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
              <p>
                With CallGauge AI’s advanced client portal, you can offer your
                clients a premium experience that makes them feel empowered and
                respected. Clear data access = stronger relationships, reduced
                support load and improved satisfaction.
              </p>
              <p>
                Today’s clients expect transparency and control.{' '}
                <strong>
                  {' '}
                  CallGauge AI helps you exceed those expectations with
                  intelligent tools built to scale your business efficiently
                </strong>
                .
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
              src="/call-flow/create-members.png"
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
