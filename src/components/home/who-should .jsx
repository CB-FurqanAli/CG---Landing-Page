export default function WhoShould() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Who Is CallGauge AI For?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Built for businesses that rely on calls—and want smarter, AI-powered
            ways to track and grow.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-xl text-white">
              🔁
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              High-Volume Businesses
            </h3>
            <p className="mt-4 text-gray-600">
              Track thousands of calls efficiently with intelligent automation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-xl text-white">
              🎯
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Lead Generation Teams
            </h3>
            <p className="mt-4 text-gray-600">
              Optimize every lead with AI-powered call scoring and attribution.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-xl text-white">
              📈
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Marketing & SEO Agencies
            </h3>
            <p className="mt-4 text-gray-600">
              Offer clients smart tracking, reporting, and call
              insights—automated.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition hover:shadow-xl">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-xl text-white">
              🏪
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Local Service Providers
            </h3>
            <p className="mt-4 text-gray-600">
              Capture more calls, reduce missed opportunities, and grow
              affordably.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
