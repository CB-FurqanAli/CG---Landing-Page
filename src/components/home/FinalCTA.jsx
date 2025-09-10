'use client'

// components/HeroSection.tsx
import { Button } from '@/components/button'

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
          <span className="mr-3 h-2 w-2 rounded-full bg-yellow-400"></span>
          <span className="text-sm font-medium">
            Don&apos;t Leave Your Marketing ROI on the Table
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
          Finally Know Which Ads Drive Revenue‑Generating Calls
        </h2>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
          Stop wasting ad spend on campaigns that don’t convert. With CallGauge
          AI, track and attribute every call and finally see which ads deliver
          real ROI.
        </p>

        {/* CTAs */}
        <div className="my-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Start Your Free 14-Day Trial
          </Button>
          <Button
            variant="secondary"
            href="#"
            className="px-8 py-3 text-lg font-semibold text-white"
          >
            Schedule Executive Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: '247%', label: 'Avg ROI Increase' },
            { value: '5 min', label: 'Setup Time' },
            { value: '98%', label: 'Attribution Accuracy' },
            { value: '$0', label: 'Setup Cost' },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl bg-white/5 p-4">
              <div className="mb-1 text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8 text-sm text-blue-100">
          {[
            'No credit card required',
            'Setup in 5 minutes',
            'Cancel anytime',
            '100% money-back guarantee',
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <svg
                className="mr-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// export default function WhyChoose() {
//   const features = [
//     {
//       // icon: <LogOut className="h-8 w-8 text-blue-500" />,
//       title: '💸 Unbeatable Pricing',
//       description:
//         'Track numbers for just $0.50 each—while others charge up to $3.00.',
//     },
//     {
//       // icon: <Info className="h-8 w-8 text-blue-500" />,
//       title: '⚡ Effortless Setup',
//       description:
//         'Start tracking calls in minutes with AI-powered automation.',
//     },
//     {
//       // icon: <Plus className="h-8 w-8 text-blue-500" />,
//       title: '👥 Client Access & Billing',
//       description:
//         'Give clients their own dashboards and bill per qualified call.',
//     },
//   ]
//
//   return (
//     <section className="bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-8 sm:bg-linear-145 sm:p-16">
//       <div className="mb-12 text-center">
//         <h2 className="text-3xl font-semibold sm:text-[41px]">
//           Why Choose CallGauge AI?
//         </h2>
//       </div>
//
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
//         {features.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-start gap-4 rounded-2xl bg-white/40 p-6 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]"
//           >
//             <div className="text-4xl">{item.icon}</div>
//             <h3 className="text-xl font-semibold text-gray-900">
//               {item.title}
//             </h3>
//             <p className="w-full text-sm text-gray-800">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
