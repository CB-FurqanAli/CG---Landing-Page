export default function WhyChoose() {
  const features = [
    {
      // icon: <LogOut className="h-8 w-8 text-blue-500" />,
      title: '💸 Unbeatable Pricing',
      description:
        'Track numbers for just $0.50 each—while others charge up to $3.00.',
    },
    {
      // icon: <Info className="h-8 w-8 text-blue-500" />,
      title: '⚡ Effortless Setup',
      description:
        'Start tracking calls in minutes with AI-powered automation.',
    },
    {
      // icon: <Plus className="h-8 w-8 text-blue-500" />,
      title: '👥 Client Access & Billing',
      description:
        'Give clients their own dashboards and bill per qualified call.',
    },
  ]

  return (
    <section className="bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-8 sm:bg-linear-145 sm:p-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Why Choose CallGauge AI?
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white/40 p-6 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="w-full text-sm text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
