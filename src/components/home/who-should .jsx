const steps = [
  {
    title: 'High volume businesses',
    img: 'https://www.salestrail.io/hubfs/step-1.png',
  },
  {
    title: 'Lead generation companies',
    img: 'https://www.salestrail.io/hubfs/step-2.png',
  },
  {
    title: 'Marketing & SEO agencies',
    img: 'https://www.salestrail.io/hubfs/step-3.png',
  },
  {
    title: 'Local businesses',
    img: 'https://www.salestrail.io/hubfs/step-4.png',
  },
]

export default function WhoShould() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
          Who Should Use <span className="text-[#DF80D9]">Call Gauge Pro?</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-gray-600">
          Tailored for ambitious teams and businesses looking to track, analyze,
          and improve call-based performance.
        </p>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-gradient-to-br from-[#fdf4ff] to-[#f3e8ff] px-6 pt-16 pb-8 shadow-lg transition hover:shadow-xl"
            >
              {/* Avatar image */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="h-20 w-20 rounded-full bg-white p-2 shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                Perfect for enhancing call tracking and conversion analysis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
