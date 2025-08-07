export default function WhiteLabelingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*What is White Labeling in Call Tracking?*/}
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What is White Labeling in Call Tracking?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            White labeling allows you to rebrand our{' '}
            <strong>
              {' '}
              CallGauge AI’s enterprise-level call tracking platform{' '}
            </strong>{' '}
            and deliver it under your own business identity. You’ll have a fully
            functional SaaS product—
            <strong>your logo, your domain, your client interface</strong>—while
            CallGauge AI handles the backend technology, server infrastructure,
            security and maintenance.
          </div>

          <h2 className="mt-8 text-center text-xl font-semibold sm:text-2xl">
            This feature is designed for:
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/*Feature 1 */}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">Marketing Agencies</h3>
              <p>wanting to scale services under their own name.</p>
            </div>

            {/*Feature 2 */}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">Telecom Resellers</h3>
              <p>looking to offer branded communication tools.</p>
            </div>

            {/*Feature 3 */}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">Software Providers</h3>
              <p>expanding their product suite.</p>
            </div>
            {/*Feature 4 */}
            <div className="col-2 rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
              <h3 className="mb-2 text-xl font-semibold">Enterprises</h3>
              <p>managing multiple brands or client portals.</p>
            </div>
          </div>
        </div>
      </div>

      {/*Key Benefits of CallGauge AI’s White Labeling Feature*/}
      <div className="mt-32 rounded-2xl bg-white bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-6 shadow-lg sm:bg-linear-145">
        <h2 className="my-8 text-center text-3xl font-bold sm:text-4xl">
          Key Benefits of CallGauge AI’s White Labeling Feature
        </h2>

        <div className="mx-auto max-w-4xl px-6">
          <ol className="list-inside list-decimal space-y-6 text-gray-700">
            <li>
              <strong>Custom Domain (Your URL, Not Ours)</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Use your own branded domain (e.g.,{' '}
                  <strong> calls.youragency.com </strong>) so your clients
                  interact directly with your brand.
                </li>
                <li>
                  With a professional and customized URL, build your authority.
                </li>
              </ul>
            </li>

            <li>
              <strong>Secure & Trusted Experience (SSL Included)</strong>

              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  After your domain setup, CallGauge AI will{' '}
                  <strong> automatically install an SSL certificate </strong>{' '}
                  ensuring all your client interactions are protected with HTTPS
                  security.
                </li>
              </ul>
            </li>

            <li>
              <strong>Seamless Client Access Under Your Brand</strong>
              <ul className="mt-2 ml-6 list-inside list-disc space-y-1">
                <li>
                  Provide your clients with a{' '}
                  <strong> fully branded portal</strong>—logo, colors and
                  interface that reflect your business identity.
                </li>
                <li>
                  Build long-term trust and retain clients by delivering a
                  unified and professional experience.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      {/*White labeling setup in Call Gauge AI:*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          White labeling setup in Call Gauge AI:
        </h2>

        <div className="mt-10 text-center leading-relaxed">
          <p className="mx-auto my-2 max-w-4xl text-lg text-gray-600">
            The following are the steps which you can follow to setup white
            labeling in Call gauge Pro.
          </p>
          <h2 className="mt-8 text-xl font-semibold">
            Add an A Record to your Domain:
          </h2>
          {/*1st cards*/}
          <div className="mt-8 grid grid-cols-1 gap-6 text-lg text-gray-600 sm:grid-cols-2 md:grid-cols-3">
            <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Log into the account of your domain provider like GoDaddy,
                Namecheap.
              </li>
              <li className="text-left">
                Navigate to your DNS or Domain management settings.
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Create a new A Record with the following values.
              </li>
              <li className="text-left">
                Hostname: Enter @ for your main domain, or specify a subdomain
                (e.g., calls).
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#FDDBC2] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                Value: Set this to 192.211.52.34 (our server’s public IP
                address).
              </li>
              <li className="text-left">
                TTL: Leave as default (usually “Automatic” or 1 hour).
              </li>
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-lg text-gray-600">
            (No idea about this, it was written like this in callscaler)
          </p>

          {/*2nd cards*/}
          <h2 className="mt-16 text-xl font-semibold">
            Wait for DNS propagation and SSL installation:
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 text-lg text-white sm:grid-cols-2">
            <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                DNS changes can take up to 24 hours to be fully effective and
                during this time period your domain will point to our server.
              </li>
            </ul>

            <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
              <li className="text-left">
                When the propagation will be completed, we’ll install your SSL
                certificate automatically for a secure HTTPS connection.
              </li>
            </ul>
          </div>
        </div>
        {/*Note:*/}
        <div className="mx-auto mt-16 max-w-4xl rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-sm text-yellow-800">
              <strong className="block font-semibold">Note:</strong>
              <span className="font-medium text-gray-900">
                DNS propagation{' '}
              </span>
              time may vary based on your service provider.
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Need Assistance? We’re Here to Help!
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Our professional support team is always ready to assist you with
            domain setup, DNS configurations, or any technical queries. Reach
            out anytime for fast and friendly help.
          </p>
          {/*<a*/}
          {/*  href="/contact"*/}
          {/*  className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-blue-700"*/}
          {/*>*/}
          {/*  Contact Support*/}
          {/*</a>*/}
        </div>
      </section>
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
