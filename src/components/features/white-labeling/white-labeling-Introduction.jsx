import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function WhiteLabelingIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*Introduction*/}
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Introduction
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              White labeling feature of Call Gauge AI allows you to brand our
              call tracking solution as your own. By customizing the platform
              with your own URL, logo and brand colors, you can seamlessly
              create a more trustworthy experience for your customers and can
              enhance your professional identity.
            </p>
          </div>
        </div>
      </div>

      {/*Benefits of Call Gauge AI’s white labeling feature:*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Benefits of Call Gauge AI’s white labeling feature:
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          You will gain the following benefits by using our white labeling
          feature.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Customizable Domain:</h3>
            <p>
              {' '}
              you can use your own personal URL, so clients can interact with
              your brand and this will enhance your credibility and authority.{' '}
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Trusted and Secure experience:{' '}
            </h3>
            <p>
              once DNS propagation got completed, we’ll install an SSL
              certificate to make sure you have secure connection on your
              domain.
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Seamless Client Access:
            </h3>
            <p>
              offers your clients a consistent experience under your own brand,
              building trust and making your services truly integrated.
            </p>
          </div>
        </div>

        <div className="mx-auto my-10 max-w-4xl rounded-md border-l-4 border-pink-400 bg-pink-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-sm text-pink-700">
              <strong className="block font-medium text-pink-800">
                Need help?{' '}
              </strong>
              Our friendly and professional support team is here to assist you.
              If you run into any setup issues just reach out and we’ll help
              you.
            </div>
          </div>
        </div>
      </div>

      {/*Here was a video explanation.*/}
      <div>
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
