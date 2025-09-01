import { Button } from '@/components/button'

export const TrackMoreNumbers = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-[41px]">
          Track <span className="text-indigo-600">6x More Numbers</span> — Stay
          Within Budget
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
          CallGauge AI redefines call tracking by offering industry-low pricing
          that lets you scale without limits. Monitor more campaigns, support
          more clients, and cover more websites—without stretching your budget.
        </p>

        {/* Highlight Card */}
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-indigo-100 bg-white p-8 shadow-xl">
          <p className="text-xl font-semibold text-gray-900">
            Experience call tracking freedom with
            <span className="block text-indigo-600">
              no hidden fees, no caps, and just $0.50 per number.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Start for free
          </Button>
          <Button
            variant="secondary"
            href="#"
            className="px-8 py-3 text-lg font-semibold"
          >
            Watch a demo
          </Button>
        </div>
        {/* Footnote */}
        <p className="mt-4 text-sm font-medium text-red-500 italic">
          *No credit card needed
        </p>
      </div>
    </section>
  )
}
