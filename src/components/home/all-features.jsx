'use client'

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-br from-[#0066ff] via-[#0052cc] to-[#003d99] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
          <span className="mr-3 h-2 w-2 rounded-full bg-green-400"></span>
          <span className="text-sm font-medium">Ready to Start Tracking?</span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          Stop Guessing. Start Tracking.
        </h2>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100 lg:text-2xl">
          Join 2,500+ businesses who stopped wasting ad spend and started
          optimizing with complete call attribution. See results in your first
          week.
        </p>

        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-500 shadow-lg transition hover:scale-105 hover:bg-gray-50"
          >
            Start Your 14-Day Free Trial
          </a>
          <a
            href="/contact"
            className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
          >
            Schedule a Demo
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
          {[
            { stat: '247%', desc: 'Avg ROI Increase' },
            { stat: '98%', desc: 'Attribution Accuracy' },
            { stat: '2.5K+', desc: 'Happy Customers' },
          ].map((item, i) => (
            <div key={i}>
              <div className="mb-2 text-3xl font-bold text-white">
                {item.stat}
              </div>
              <div className="text-sm text-blue-100">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// import { CheckCircleIcon } from '@heroicons/react/24/solid'
// import Link from 'next/link'
//
// export function FeaturesSection() {
//   const features = [
//     'Clean USA & Canadian Numbers',
//     'AI Powered Tracking & Analytics',
//     'SMS & Call Forwarding',
//     'Inbound Call Tracking',
//     'Effortless Client Management',
//     'Free Call Recording',
//     'Call Whispering',
//     'Missed Call Notifications',
//     'Fully Automated Reporting System',
//   ]
//
//   return (
//     <section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
//         {/* Left Content */}
//         <div className="max-w-xl">
//           <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
//             We offer all the features you need
//           </h2>
//           <p className="mt-4 text-lg text-gray-300">
//             At the lowest possible prices — designed to scale with your
//             business.
//           </p>
//
//           <ul className="mt-8 space-y-4">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-start gap-3">
//                 <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-orange-500" />
//                 <span className="text-base text-gray-200">{feature}</span>
//               </li>
//             ))}
//           </ul>
//
//           <div className="mt-10 flex items-center gap-6">
//             <Link
//               href={'/demo'}
//               className="rounded-md bg-orange-500 px-6 py-3 text-lg font-semibold shadow-md transition hover:bg-orange-600"
//             >
//               View Interactive Demo
//             </Link>
//             <p className="text-gray-400 italic">No credit card needed.</p>
//           </div>
//         </div>
//
//         {/* Right Video */}
//         <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
//           <iframe
//             className="h-full w-full"
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="Demo Video"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   )
// }
