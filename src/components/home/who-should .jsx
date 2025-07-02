const steps = [
  {
    title: 'High volume businesses.',
    img: 'https://www.salestrail.io/hubfs/step-1.png',
  },
  {
    title: 'Lead generation companies.',
    img: 'https://www.salestrail.io/hubfs/step-2.png',
  },
  {
    title: 'Marketing agencies and SEO agencies.',
    img: 'https://www.salestrail.io/hubfs/step-3.png',
  },
  {
    title: 'Local businesses.',
    img: 'https://www.salestrail.io/hubfs/step-4.png',
  },
]

export default function WhoShould() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          Who should use Call Gauge Pro?
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 text-center shadow-md hover:shadow-xl"
          >
            <p className="mb-2 text-sm font-semibold text-gray-600">
              {item.step}
            </p>
            <img
              src={item.img}
              alt={item.title}
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
