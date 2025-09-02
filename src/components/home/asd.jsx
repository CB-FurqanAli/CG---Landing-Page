'use client'
import {
  CreditCard,
  DollarSign,
  MapPin,
  Phone,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const CallGaugeSections = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const targetAudiences = [
    {
      title: 'High-Volume Businesses',
      icon: TrendingUp,
      description: 'Scale your call tracking across thousands of campaigns',
      color: 'from-blue-500 to-purple-600',
      delay: 'delay-100',
    },
    {
      title: 'Lead Generation Teams',
      icon: Phone,
      description: 'Convert more prospects with intelligent call attribution',
      color: 'from-purple-500 to-pink-600',
      delay: 'delay-200',
    },
    {
      title: 'Marketing & SEO Agencies',
      icon: Users,
      description: 'Manage clients and prove ROI with detailed call analytics',
      color: 'from-pink-500 to-red-600',
      delay: 'delay-300',
    },
    {
      title: 'Local Service Providers',
      icon: MapPin,
      description: 'Track local campaigns and optimize your marketing spend',
      color: 'from-red-500 to-orange-600',
      delay: 'delay-400',
    },
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Unbeatable Pricing',
      description:
        'Track numbers for just $0.50 each—while others charge up to $3.00.',
      color: 'text-green-400',
      bgColor: 'from-green-500/10 to-emerald-500/10',
      delay: 'delay-100',
    },
    {
      icon: Zap,
      title: 'Effortless Setup',
      description:
        'Start tracking calls in minutes with AI-powered automation.',
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/10 to-amber-500/10',
      delay: 'delay-200',
    },
    {
      icon: CreditCard,
      title: 'Client Access & Billing',
      description:
        'Give clients their own dashboards and bill per qualified call.',
      color: 'text-blue-400',
      bgColor: 'from-blue-500/10 to-cyan-500/10',
      delay: 'delay-300',
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-pink-500/10 blur-3xl delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Who Is CallGauge AI For Section */}
        <section className="mb-32">
          <div
            className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h2 className="mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Who Is CallGauge AI For?
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {targetAudiences.map((audience, index) => {
              const IconComponent = audience.icon
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-700 ${audience.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                >
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Gradient background on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${audience.color} z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                    ></div>

                    {/* Icon with animated background */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br ${audience.color} p-0.5 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900">
                          <IconComponent className="h-8 w-8 text-white transition-colors duration-300 group-hover:text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="relative z-10 mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                      {audience.title}
                    </h3>
                    <p className="relative z-10 leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                      {audience.description}
                    </p>

                    {/* Animated border */}
                    <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why Choose CallGauge AI Section */}
        <section>
          <div
            className={`mb-16 text-center transition-all delay-500 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h2 className="mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Why Choose CallGauge AI?
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-green-400 to-blue-400"></div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-700 ${benefit.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                >
                  <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} z-0 rounded-3xl transition-opacity duration-500`}
                    ></div>

                    {/* Floating icon */}
                    <div className="relative z-10 mb-6 flex justify-center">
                      <div className="relative">
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                        >
                          <IconComponent
                            className={`h-10 w-10 ${benefit.color} transition-transform duration-300 group-hover:scale-110`}
                          />
                        </div>
                        {/* Pulsing ring */}
                        <div
                          className={`absolute inset-0 rounded-2xl ${benefit.color.replace('text-', 'border-')} border-2 opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-50`}
                        ></div>
                      </div>
                    </div>

                    <div className="relative z-10 text-center">
                      <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-100">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 z-0 rounded-3xl opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                      <div className="absolute inset-0 translate-x-[-100%] -skew-x-12 transform rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call-to-action with animated elements */}
          {/*<div*/}
          {/*  className={`mt-16 text-center transition-all delay-700 duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}*/}
          {/*>*/}
          {/*  <div className="relative inline-block">*/}
          {/*    <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">*/}
          {/*      <span className="relative z-10">*/}
          {/*        Start Tracking Calls Today*/}
          {/*      </span>*/}
          {/*      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>*/}
          {/*      <div className="absolute inset-0 translate-x-[-100%] skew-x-12 transform bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]"></div>*/}
          {/*    </button>*/}
          {/*    <p className="mt-3 text-sm font-medium text-gray-400">*/}
          {/*      *No credit card needed*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </section>
      </div>

      {/* Floating particles animation */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-2 w-2 animate-bounce rounded-full bg-white/20`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default CallGaugeSections
