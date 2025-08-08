export default function CallFlowIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:grid-cols-2 md:items-center">
      <div>
        {/*Introduction*/}
        <div>
          <div className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            There will be an image of call flow and all its relevant features
          </div>

          <div>
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              Introduction
            </h2>
            <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
              <p className="my-2">
                A <strong>call flow </strong> is the blueprint for how incoming
                calls are managed within your business — from the first greeting
                to the final action. With <strong> CallGauge AI </strong>, you
                don’t just build a call flow — you{' '}
                <strong> orchestrate an intelligent call experience </strong>{' '}
                that adapts to your business goals and enhances every customer
                interaction.
              </p>
              <p className="mt-4">
                Whether you want to greet callers, forward calls, send
                follow-ups, or handle missed calls — our intuitive{' '}
                <strong> visual call flow builder </strong> makes it all fast,
                flexible, and fully AI-powered.
              </p>
            </div>
          </div>
        </div>

        {/*Customized Greetings*/}
        <div className="mt-40">
          <div className="mb-16 text-center text-3xl font-bold sm:text-4xl">
            AI-Enhanced Features of CallGauge Call Flows
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <div className="text-3xl font-bold sm:text-4xl">
                <h2>Customized Greetings</h2>
              </div>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Make every call feel professional from the start. Add a
                  tailored greeting using either:
                </p>

                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                      <strong>AI Text-to-Speech</strong>
                    </li>
                    <li>
                      Or upload your own <strong> WAV/MP3 audio file </strong>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-500">
                  Perfect for compliance messages, branding, or quick
                  announcements before the call connects.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business?
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full">
              <img
                src={'/call-flow/Greetings.png'}
                loading="lazy"
                alt="Customized Greetings"
                className="feature-set_image"
              />
            </div>
          </div>
        </div>

        {/* Smart Call Forwarding*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div className="w-full">
              <img
                src="/call-flow/Call-Forwarding.png"
                loading="lazy"
                alt="Smart Call Forwarding"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}

            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Smart Call Forwarding
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Send calls to the right destination in seconds — whether it’s
                  your sales rep, support desk, or a client’s number. With AI
                  logic, you control:
                </p>

                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                      <strong>Who gets the call</strong>
                    </li>
                    <li>
                      <strong>
                        How long it rings (customizable 10–40 sec){' '}
                      </strong>
                    </li>
                    <li>
                      <strong>What happens if no one picks up</strong>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-500">
                  CallGauge AI ensures your calls never go unanswered or
                  misrouted.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Voicemail Routing*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                AI Voicemail Routing
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  If a call isn’t answered, direct it to a voicemail powered by:
                </p>
                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>
                      <strong>Text-to-Speech</strong>
                    </li>
                    <li>Or your custom audio recording</li>
                  </ul>
                </div>

                <p className="text-gray-500">
                  Voicemails are saved in your dashboard and instantly sent via
                  SMS to a number you choose (you, a team member, or your
                  client).
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-lg italic">
                  <strong className="text-red-600">Note:</strong> ✔️ Skip
                  forwarding entirely and go straight to voicemail if preferred.
                </p>
              </div>
              <div className="mt-8 gap-4 text-center">
                <a
                  href={'#'}
                  className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
                >
                  Get Started Free
                </a>
                <p className="mt-2 font-semibold text-red-600">
                  *No credit card required
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full">
              <img
                src="/call-flow/voiceemail.png"
                loading="lazy"
                alt="Activate call analytics data in your martech tools with Invoca integrations"
                className="feature-set_image"
              />
            </div>
          </div>
        </div>

        {/*Missed Call Texts – Automated*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="/call-flow/Missed-Call-Texts.png"
                loading="lazy"
                alt="Missed Call Texts – Automated"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Missed Call Texts – Automated
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Don’t let missed calls become missed opportunities. CallGauge
                  AI automatically sends a <strong>custom SMS</strong> if a
                  forwarded call isn’t answered.
                  <br />
                  <br />
                  This keeps communication flowing and gives you the chance to:
                </p>

                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Notify a lead</li>
                    <li>Redirect them to a form</li>
                    <li>Alert your team/client</li>
                  </ul>
                </div>

                <p className="text-gray-500">
                  🔧 Optional setting: “Include caller number in message” for
                  added context.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Email Notifications & Automations*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Email Notifications & Automations
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Stay instantly informed when qualified calls come through.
                </p>
                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Get real-time email alerts after each call</li>
                    <li>
                      Apply filters like “Only send if call duration is greater
                      than X seconds” (default: 90s)
                    </li>
                  </ul>
                </div>
                <p className="text-gray-500">
                  This helps you avoid alerts for spam, bots, or unqualified
                  leads, keeping your inbox focused and useful.
                </p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full">
              <img
                src="/call-flow/Email-Notifications.png"
                loading="lazy"
                alt="Email Notifications & Automations"
                className="feature-set_image border-gray-400"
              />
            </div>
          </div>
        </div>

        {/*Multi-Ringing*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="/call-flow/Multi-Ringing.png"
                loading=""
                alt="Multi-Ringing"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Multi-Ringing</h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Speed up response times and reduce dropped calls by ringing up
                  to <strong>10 numbers simultaneously</strong>
                  <br />
                  The first person to answer gets the call — perfect for:
                </p>

                <div>
                  <ul className="list-inside list-disc space-y-2 text-gray-700">
                    <li>Distributed teams</li>
                    <li>Lead distribution among clients</li>
                    <li>High-priority inbound calls</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-lg text-blue-600 italic">
                  Want to setup call flow for your business?
                </p>
                <p className="text-lg font-semibold text-red-600">
                  Try Call Gauge Pro — It&#39;s Free!
                </p>
              </div>
              <div className="mt-8 gap-4 text-center">
                <a
                  href={'#'}
                  className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
                >
                  Get Started Free
                </a>
                <p className="mt-2 font-semibold text-red-600">
                  *No credit card required
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Additional features & settings:*/}
        <div className="mt-40">
          {/*Section Title*/}
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
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
            <div className="rounded-2xl bg-[#F39FCA] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                🕵 Caller ID Customization
              </h3>
              <p>
                Show your <strong> CallGauge number </strong> instead of the
                caller’s — so recipients know it a business call and can
                prioritize it accordingly.
              </p>
            </div>

            {/*Feature 2 */}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                ✅ “Press 1 to Connect” Anti-Spam Filter
              </h3>
              <p>
                Block bots and robocalls by enabling a confirmation prompt.
                Great for businesses receiving high volumes of spam traffic.
              </p>
            </div>

            {/*Feature 3 */}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                🔒 Call Recording + Pre-Call Whisper
              </h3>
              <div>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    Record calls automatically for training, quality control,
                    and compliance.
                  </li>
                  <li>
                    Add a pre-call whisper so agents get brief context before
                    picking up.
                  </li>
                </ul>
              </div>
            </div>

            {/*Feature 4 */}
            <div className="col-start-2 rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">📲 SMS Forwarding</h3>
              <p>
                Never miss a message. Instantly forward received texts to
                another number with just one toggle.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-32 mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">
              🔧 Total Flexibility at Your Fingertips
            </h2>
            <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
              <p className="my-2">
                Every feature can be toggled ON or OFF in your call flow
                settings. Build flows that match your exact business needs — and
                change them anytime.
              </p>
              <p className="mt-4">
                Whether your running a{' '}
                <strong> lead gen agency, client services firm</strong>, or
                <strong>inbound contact center</strong>, CallGauge AI helps you
                optimize every step of your communication funnel.
              </p>
            </div>
          </div>
        </div>

        {/*Want to setup a call flow for your business?*/}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Ready to Build Smarter Call Flows?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              With <strong> CallGauge AI </strong>, you can launch your first
              smart call flow in just a few clicks.
            </p>
            <p className="mt-4">
              Add as many numbers or flows as needed — and manage everything
              from one intelligent dashboard.
            </p>
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mt-8 space-y-3">
              <p className="text-lg text-blue-600 italic">
                Try Call Gauge Pro today and start managing your calls smartly!
              </p>
            </div>
            <div className="mt-8 gap-4">
              <a
                href={'#'}
                className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                Start for free
              </a>
              <p className="mt-2 font-semibold text-red-600">
                *No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
