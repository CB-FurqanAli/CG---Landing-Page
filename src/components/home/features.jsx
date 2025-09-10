'use client'
import { Button } from '@/components/button'

const features = [
  {
    icon: '🎯',
    color: 'bg-blue-500',
    title: 'Call Flows & Smart Routing',
    description:
      'Stop losing leads to missed or misdirected calls. With intelligent greetings, round-robin, multi-ring, and after-hours rules, CallGauge AI ensures every caller reaches the right person or team.',
    lastline:
      '➡ Capture more opportunities and convert more conversations into revenue.',
    points: [
      'Intelligent greetings & menus',
      'Round-robin & multi-ring routing',
      'After-hours & fallback rules',
    ],
  },
  {
    icon: '🤖',
    color: 'bg-green-500',
    title: 'Call Recording & AI Search',
    description:
      'Go beyond basic recordings. CallGauge AI captures every conversation in high quality with MP3 downloads, while AI‑powered transcripts and summaries turn calls into searchable insights.',
    lastline:
      '➡ Turn conversations into insights that improve compliance, training, and marketing impact.',
    points: [
      'High‑quality MP3 recordings',
      'AI‑powered transcripts & summaries',
      'Searchable call history',
    ],
  },
  {
    icon: '📈',
    color: 'bg-teal-500',
    title: 'Automations That Save Time',
    description:
      'Scale your marketing impact without adding extra work. CallGauge AI connects to your CRM, email, Slack, and 5,000+ apps through Zapier to trigger instant follow‑ups, update records, and share call details — all with zero coding.',
    lastline:
      '➡ Eliminate busywork and focus on the activities that actually grow your ROI.',
    points: [
      'Instant follow‑ups & alerts',
      'CRM updates & data sync',
      'Works with 5,000+ apps via Zapier',
    ],
  },
  {
    icon: '📊',
    color: 'bg-purple-500',
    title: 'Spam Blocking & Press‑1 Filters',
    description:
      'Don’t let spam eat into your ad budget. CallGauge AI blocks robo‑calls with AI filters and press‑1 screening, keeping your attribution clean and budgets optimize.',
    lastline:
      '➡ Protect your campaigns and ensure every dollar spent delivers real performance.',
    points: [
      'AI-powered spam detection',
      'Press‑1 caller verification',
      'Accurate attribution protection',
    ],
  },
  {
    icon: '🔗',
    color: 'bg-orange-500',
    title: 'White Label & Client Portal',
    description:
      'Give clients full transparency under your own brand. Agencies can deliver dashboards, branded reports, and secure logins while keeping CallGauge AI invisible.',
    lastline:
      '➡ Protect your campaigns and ensure every dollar spent delivers real performance.',
    points: [
      'Custom dashboards & reports',
      'Client logins & permissions',
      'White‑label branding',
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2">
            <span className="text-sm font-semibold text-blue-800">
              🚀 POWERFUL FEATURES
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Features That Turn Every Call Into Measurable ROI
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            From call routing to reporting, <strong> CallGauge AI </strong>{' '}
            ensures every lead is tracked, attributed, and optimized for maximum
            ROI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`h-12 w-12 ${feature.color} mb-6 flex items-center justify-center rounded-xl text-white`}
              >
                <span className="text-xl">{feature.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="mb-6 text-gray-600">{feature.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium">{feature.lastline}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#" className="px-8 py-3 text-lg font-semibold">
            Try All Features Free for 14 Days
          </Button>
        </div>
      </div>
    </section>
  )
}

// 'use client'
// import {
//   CreditCard,
//   DollarSign,
//   MapPin,
//   Phone,
//   TrendingUp,
//   Users,
//   Zap,
// } from 'lucide-react'
// import { useEffect, useState } from 'react'
//
// const CallGaugeSections = () => {
//   const [isVisible, setIsVisible] = useState(false)
//
//   useEffect(() => {
//     setIsVisible(true)
//   }, [])
//
//   const targetAudiences = [
//     {
//       title: 'High-Volume Businesses',
//       icon: TrendingUp,
//       description: 'Scale your call tracking across thousands of campaigns',
//       color: 'from-blue-600 to-purple-700',
//       iconColor: 'text-blue-600',
//       delay: 'delay-100',
//     },
//     {
//       title: 'Lead Generation Teams',
//       icon: Phone,
//       description: 'Convert more prospects with intelligent call attribution',
//       color: 'from-purple-600 to-pink-700',
//       iconColor: 'text-purple-600',
//       delay: 'delay-200',
//     },
//     {
//       title: 'Marketing & SEO Agencies',
//       icon: Users,
//       description: 'Manage clients and prove ROI with detailed call analytics',
//       color: 'from-pink-600 to-red-700',
//       iconColor: 'text-pink-600',
//       delay: 'delay-300',
//     },
//     {
//       title: 'Local Service Providers',
//       icon: MapPin,
//       description: 'Track local campaigns and optimize your marketing spend',
//       color: 'from-red-600 to-orange-700',
//       iconColor: 'text-red-600',
//       delay: 'delay-400',
//     },
//   ]
//
//   const benefits = [
//     {
//       icon: DollarSign,
//       title: 'Unbeatable Pricing',
//       description:
//         'Track numbers for just $0.50 each—while others charge up to $3.00.',
//       iconColor: 'text-green-600',
//       cardColor: 'from-green-50 to-emerald-50',
//       borderColor: 'border-green-200',
//       hoverBorder: 'hover:border-green-400',
//       delay: 'delay-100',
//     },
//     {
//       icon: Zap,
//       title: 'Effortless Setup',
//       description:
//         'Start tracking calls in minutes with AI-powered automation.',
//       iconColor: 'text-amber-600',
//       cardColor: 'from-amber-50 to-yellow-50',
//       borderColor: 'border-amber-200',
//       hoverBorder: 'hover:border-amber-400',
//       delay: 'delay-200',
//     },
//     {
//       icon: CreditCard,
//       title: 'Client Access & Billing',
//       description:
//         'Give clients their own dashboards and bill per qualified call.',
//       iconColor: 'text-blue-600',
//       cardColor: 'from-blue-50 to-cyan-50',
//       borderColor: 'border-blue-200',
//       hoverBorder: 'hover:border-blue-400',
//       delay: 'delay-300',
//     },
//   ]
//
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
//       {/* Subtle animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-gradient-to-br from-indigo-100/20 to-blue-100/20 blur-3xl delay-500"></div>
//       </div>
//
//       <div className="relative z-10 container mx-auto px-6 py-20">
//         {/* Who Is CallGauge AI For Section */}
//         <section className="mb-32">
//           <div
//             className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           >
//             <h2 className="mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-5xl font-bold text-transparent md:text-5xl">
//               Who Is CallGauge AI For?
//             </h2>
//             <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
//           </div>
//
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {targetAudiences.map((audience, index) => {
//               const IconComponent = audience.icon
//               return (
//                 <div
//                   key={index}
//                   className={`group cursor-pointer transition-all duration-700 ${audience.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
//                 >
//                   <div className="relative h-full rounded-2xl border border-white/40 bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-purple-300 hover:bg-white/90 hover:shadow-xl hover:shadow-purple-200/50">
//                     {/* Gradient background on hover */}
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${audience.color} z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
//                     ></div>
//
//                     {/* Icon with animated background */}
//                     <div className="relative z-10 mb-6">
//                       <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
//                         <IconComponent
//                           className={`h-8 w-8 ${audience.iconColor} transition-transform duration-300 group-hover:scale-110`}
//                         />
//                       </div>
//                     </div>
//
//                     <h3 className="relative z-10 mb-4 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
//                       {audience.title}
//                     </h3>
//                     <p className="relative z-10 leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
//                       {audience.description}
//                     </p>
//
//                     {/* Subtle shimmer effect */}
//                     <div className="absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
//                       <div className="absolute inset-0 translate-x-[-100%] -skew-x-12 transform rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </section>
//
//         {/* Why Choose CallGauge AI Section */}
//         <section>
//           <div
//             className={`mb-16 text-center transition-all delay-500 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           >
//             <h2 className="mb-6 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 bg-clip-text text-5xl font-bold text-transparent md:text-5xl">
//               Why Choose CallGauge AI?
//             </h2>
//             <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-green-600 to-blue-600"></div>
//           </div>
//
//           <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
//             {benefits.map((benefit, index) => {
//               const IconComponent = benefit.icon
//               return (
//                 <div
//                   key={index}
//                   className={`group cursor-pointer transition-all duration-700 ${benefit.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
//                 >
//                   <div
//                     className={`relative h-full rounded-3xl bg-gradient-to-br p-8 ${benefit.cardColor} border ${benefit.borderColor} ${benefit.hoverBorder} transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gray-200/50`}
//                   >
//                     {/* Enhanced background on hover */}
//                     <div className="absolute inset-0 z-0 rounded-3xl bg-white/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
//
//                     {/* Icon container */}
//                     <div className="relative z-10 mb-6 flex justify-center">
//                       <div className="relative">
//                         <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
//                           <IconComponent
//                             className={`h-10 w-10 ${benefit.iconColor} transition-transform duration-300 group-hover:scale-110`}
//                           />
//                         </div>
//                         {/* Pulsing ring */}
//                         <div
//                           className={`absolute inset-0 rounded-2xl ${benefit.borderColor} border-2 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-40`}
//                         ></div>
//                       </div>
//                     </div>
//
//                     <div className="relative z-10 text-center">
//                       <h3 className="mb-4 text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-lg leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
//                         {benefit.description}
//                       </p>
//                     </div>
//
//                     {/* Gentle shimmer effect */}
//                     <div className="absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
//                       <div className="absolute inset-0 translate-x-[-100%] -skew-x-12 transform rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//
//           {/* Call-to-action */}
//           <div
//             className={`mt-16 text-center transition-all delay-700 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//           >
//             <div className="relative inline-block">
//               <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-300/40">
//                 <span className="relative z-10">
//                   Start Tracking Calls Today
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//                 <div className="absolute inset-0 translate-x-[-100%] skew-x-12 transform bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]"></div>
//               </button>
//               <p className="mt-3 text-sm font-medium text-gray-500">
//                 *No credit card needed
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//
//       {/* Floating particles animation - adjusted for light background */}
//       <div className="pointer-events-none absolute inset-0">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className={`absolute h-2 w-2 animate-bounce rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30`}
//             style={{
//               left: `${10 + i * 15}%`,
//               top: `${20 + (i % 2) * 40}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${3 + i * 0.5}s`,
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   )
// }
//
// export default CallGaugeSections
