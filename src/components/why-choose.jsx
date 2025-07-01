const steps = [
  {
    // step: 'Step 1',
    title: 'High volume businesses.',
    // desc: 'Pay $0.4 per phone number where our competitors are offering it at $3.00.',
    img: 'https://www.salestrail.io/hubfs/step-1.png',
  },
  {
    // step: 'Step 2',
    title: 'Lead generation companies.',
    // desc: 'To join your Salestrail organization and track calls',
    img: 'https://www.salestrail.io/hubfs/step-2.png',
  },
  {
    // step: 'Step 3',
    title: 'Marketing agencies and SEO agencies.',
    // desc: 'On the phones of the people whose calls should be tracked',
    img: 'https://www.salestrail.io/hubfs/step-3.png',
  },
  {
    // step: 'Step 4',
    title: 'Local businesses.',
    // desc: 'Access call data on the call analytics dashboard',
    img: 'https://www.salestrail.io/hubfs/step-4.png',
  },
]

export default function WhyChoose() {
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
            className="rounded-xl bg-white p-6 text-center shadow-sm"
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
            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      {/*<div className="mt-10 space-x-4 text-center">*/}
      {/*  <button className="rounded-md border border-black px-6 py-2 font-semibold text-black transition hover:bg-black hover:text-white">*/}
      {/*    BOOK A DEMO*/}
      {/*  </button>*/}
      {/*  <button className="rounded-md bg-black px-6 py-2 font-semibold text-white transition hover:bg-gray-800">*/}
      {/*    GET FREE TRIAL*/}
      {/*  </button>*/}
      {/*</div>*/}
    </section>
  )
}
