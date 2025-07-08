const cardData = [
  {
    title: 'Drive more leads',
    description:
      'Get granular attribution down to the keyword to fully understand how your campaigns drive conversions over the phone. With clear visibility of customer intent and lead quality, you can optimize every campaign to drive more leads online and over the phone.',
    icon: (
      <svg
        className="h-12 w-12 text-green-700"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8h8" stroke="currentColor" strokeWidth="2" />
        <path d="M8 16h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Boost conversion clarity',
    description:
      'Understand customer intent with precision and adjust your strategy to maximize the potential of every call and click, boosting conversion rates through informed decision-making.',
    icon: (
      <svg
        className="h-12 w-12 text-green-700"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9.5 8.5C9.5 7.67 10.17 7 11 7h2c.83 0 1.5.67 1.5 1.5S13.83 10 13 10h-2c-.83 0-1.5.67-1.5 1.5S9.17 13 10 13h2c.83 0 1.5.67 1.5 1.5S12.83 16 12 16h-2c-.83 0-1.5-.67-1.5-1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M12 6v2m0 8v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Optimize campaign ROI',
    description:
      'Fine-tune your campaigns using keyword-level attribution and customer journey insights to ensure each investment yields measurable returns.',
    icon: (
      <svg
        className="h-12 w-12 text-green-700"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2v20" stroke="currentColor" strokeWidth="2" />
        <path
          d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M7 17l3 3-3 3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export default function AsdDsa() {
  return (
    <div className="mx-auto my-20 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-lg bg-[#F2F5E4] p-5 shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="flex items-center gap-3">
            {card.icon}
            <h3 className="text-xl font-semibold text-gray-900">
              {card.title}
            </h3>
          </div>
          <p className="text-md mt-2 leading-relaxed text-gray-800">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  )
}
