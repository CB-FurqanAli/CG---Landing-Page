export default function CallFlowIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 md:grid-cols-2 md:items-center">
      <div>
        {/*Introduction*/}
        <div>
          <div className="mb-16 text-center text-3xl font-bold text-[#E281D5] sm:text-4xl">
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
              <div className="item-center flex text-3xl font-bold sm:text-4xl">
                <h2>🎙</h2>
                <h2 className="text-[#DF80D9]">Customized Greetings</h2>
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
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/679a8b95e178179bada0d823_call-tracking-fs_3.webp"
                loading="lazy"
                alt="Activate call analytics data in your martech tools with Invoca integrations"
                className="feature-set_image"
              />
            </div>
          </div>
        </div>

        {/*Call forwarding*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}

            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Call forwarding:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Call forwarding is often the most important step of call flow
                  setup. Call Gauge Pro makes it incredibly simple for you to
                  incorporate it in you call flow. Call forwarding lets you to
                  forward the incoming call to any number of your choice, it can
                  be: your sales team, any other specific department, your
                  client or any other destination.
                </p>
                <p>
                  You have full control over calls, where you want them to be
                  forwarded and how long they would ring. By default, calls
                  would ring for 20 sec before moving to the next step if not
                  answered, but you can of course customize this delay between
                  10 to 50 sec.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Voicemail setup*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Voicemail setup:
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  With Call Gauge Pro’s built-in voicemail feature, you will
                  never miss a message. If a call isn’t answered due to any
                  reason you can route a caller to voicemail setup using either
                  text-to-speech or a custom audio file (WAV/MP3).
                </p>
                <p>
                  All your voicemails would be saved and easily accessible
                  within your account. An SMS with the voicemail recording would
                  be sent to any number of your choice, this could be you, your
                  client, or any of your team member handling call backs.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-lg italic">
                  <strong className="text-red-600">Note:</strong> You can skip
                  call forwarding and can direct your callers to voicemails if
                  that suits you better.
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
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/679a8b95e178179bada0d823_call-tracking-fs_3.webp"
                loading="lazy"
                alt="Activate call analytics data in your martech tools with Invoca integrations"
                className="feature-set_image"
              />
            </div>
          </div>
        </div>

        {/*Send Missed Call Texts:*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Send Missed Call Texts:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  If your call is not answered and you have used call forwarding
                  then Call Gauge Pro will detect it and send automated text to
                  keep the communication flowing. This is a powerful tool which
                  lets your to notify your clients, employees and even callers
                  that they have missed a call. By using this feature you can
                  inform your caller to adopt an alternative way to contact you
                  or push them to fill a form.
                </p>
                <p>
                  At the bottom of this module you can see an option “Include
                  caller number in the text”. This would be useful while sending
                  the text message to client or employee and not the caller.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Email notifications & automations*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Email notifications & automations:
              </h2>

              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Stay well informed with Call Gauge Pro’s another outstanding
                  feature “Email notifications & automations”. These real-time
                  reports will email you whenever a qualified customer call will
                  reach your business call flow.
                </p>
                <p>
                  To get informed only about meaningful interactions, we offer
                  you to apply filter “Only send email if the call is over X
                  seconds”. By default it is set to “90 seconds” but it is
                  flexible to fit your needs. Hence helping you to avoid
                  robo-calls, spams or unqualified leads.
                </p>
                <p>
                  This email gets sent as soon as the call ends. So keep your
                  clients, employees, team mates or relevant person informed.
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

        {/*Multi-ringing setup*/}
        <div className="mt-40">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Left: Image */}

            <div className="w-full">
              <img
                src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799a27b9dac8826f2df2067_call-tracking-fs_4.webp"
                loading="lazy"
                alt="AI call analytics accurately measure call quality with Invoca"
                className="feature-set_image"
              />
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
                Multi-ringing setup:
              </h2>
              <div className="mt-8 space-y-5 leading-relaxed text-gray-700 sm:text-lg">
                <p>
                  Lastly Call Gauge Pro offers multi-ringing feature which
                  enables you to ring multiple phone numbers at the same time
                  and first one pick up gets the call. This will be helpful in
                  reducing the customer waiting time and ensures that someone is
                  always there to answer the call. So, more customers can be
                  dealt as it would take less time to answer the call.
                </p>
                <p>
                  This feature is also best when it comes to lead distribution
                  among clients in the same vertical. Up to 10 numbers can be
                  added in this module.
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
          <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
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
                🎭 Caller ID customization:
              </h3>
              <p>
                You can choose Call Gauge Pro number to be displayed instead of
                caller’s number to the recipient. By doing this agents and
                clients can save and recognize the number- hence they know
                before answering about what kind of call is coming through.
              </p>
            </div>

            {/*Feature 2 */}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                ✅ Press 1 to connect:
              </h3>
              <p>
                Get rid of spam and robo-calls by our last feature of “Press 1
                to connect”. When you enable this feature, the callers must
                press 1 to get the call connected. But we recommend using this
                feature only when you are experiencing too many spam calls.
              </p>
            </div>

            {/*Feature 3 */}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">
                🔒 Call recording and Pre-call whisper:
              </h3>
              <p>
                With this you can automatically record calls, which later on can
                be used to monitor quality, train agents and improve first-call
                resolution. Furthermore pre-call whisper message can be
                activated to give your team quick context before answering the
                phone call.
              </p>
            </div>

            {/*Feature 4 */}
            <div className="col-start-2 rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">📩 SMS forwarding:</h3>
              <p>
                You can forward SMS to any other number by just one click, so
                you never miss a message.
              </p>
            </div>
          </div>
          <p className="mx-auto my-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            All these features are available on call flow settings page and can
            be toggled ON/OFF easily, giving you a flexible control over your
            calls.
          </p>
        </div>

        {/*Want to setup a call flow for your business?*/}
        <div className="mt-40">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Want to setup a call flow for your business?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              By using Call Gauge Pro, you can get a phone number in just a few
              clicks and can get started with our above mentioned features to
              experience full control over your call flows. You can add more
              numbers and call flows according to your needs.
            </p>
            <p className="mt-4">
              Whether you are lead generation expert looking to route and
              maximize call volume or a contact center aiming to streamline
              inbound calls, our call flow makes its super easy for you.
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
