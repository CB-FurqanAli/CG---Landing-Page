'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SuccessJourneySection = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: '01',
      title: 'Join 15,000+ Winners',
      description:
        'Connect with thousands of creators sharing strategies, tips, and success stories in our exclusive community.',
      image: '/api/placeholder/280/400',
      rotation: -3.2,
    },
    {
      id: '02',
      title: 'Master GravityWrite',
      description:
        'Complete video training series covering everything from basics to advanced content strategies.',
      image: '/api/placeholder/280/400',
      rotation: 24,
    },
    {
      id: '03',
      title: 'Knowledge Center',
      description:
        'Detailed guides, tutorials, and best practices for every content creation challenge.',
      image: '/api/placeholder/280/400',
      rotation: 45,
    },
    {
      id: '04',
      title: 'Real Success Stories',
      description:
        'Real case studies showing how businesses like yours achieved breakthrough results.',
      image: '/api/placeholder/280/400',
      rotation: 68,
    },
    {
      id: '05',
      title: 'Expert Support',
      description:
        'Get personalized help with your account, partnerships, and content strategy questions.',
      image: '/api/placeholder/280/400',
      rotation: 90,
    },
    {
      id: '06',
      title: 'The GravityWrite Blog',
      description:
        'Weekly insights, industry trends, and proven strategies for content marketing success.',
      image: '/api/placeholder/280/400',
      rotation: 118,
    },
  ]

  // Auto-rotate functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [steps.length])

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="h-5 w-5 fill-current text-white"
    >
      <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
    </svg>
  )

  const StarParticle = ({ className, rotation = 0 }) => (
    <div
      className={`absolute ${className}`}
      style={{ transform: `rotate(${rotation}deg) scale(1.15)` }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        className="fill-current text-blue-400"
      >
        <path d="M7 0l1.545 4.635L14 5.635l-3.635 2.73L11.545 14 7 11.27 2.455 14l1.18-5.635L0 5.635l5.455-1L7 0z" />
      </svg>
    </div>
  )

  const TriangleParticle = ({ className, rotation = 0 }) => (
    <div
      className={`absolute ${className}`}
      style={{ transform: `rotate(${rotation}deg) scale(1.15)` }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="fill-current text-purple-400"
      >
        <path d="M6 0l6 12H0l6-12z" />
      </svg>
    </div>
  )

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      {/* Background Particles */}
      <StarParticle className="top-20 left-10" rotation={183} />
      <TriangleParticle className="top-32 right-16" rotation={213} />
      <StarParticle className="right-20 bottom-20" rotation={183} />
      <TriangleParticle className="bottom-32 left-20" rotation={183} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl">
            Your Content Success Journey Starts Here
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            GravityWrite brings everything together in one intelligent platform
            that understands ROI, not just writing. Our AI creates content
            that&#39;s factually accurate, SEO-optimized, and designed.
          </p>
        </div>

        {/* Success Journey Cards */}
        <div className="relative">
          {/* Mobile View - Stack */}
          <div className="space-y-8 md:hidden">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                      <span className="text-2xl font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-slate-800">
                      {step.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center space-x-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
                    >
                      <span>Learn more</span>
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Circular Layout */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto h-[600px] w-full">
              {steps.map((step, index) => {
                const isActive = index === currentStep
                const angle = index * 60 - 90 // 60 degrees apart, starting from top
                const radius = 220
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                return (
                  <div
                    key={step.id}
                    className={`absolute h-96 w-72 cursor-pointer transition-all duration-700 ease-in-out ${
                      isActive ? 'z-20 scale-110' : 'z-10 scale-90 opacity-70'
                    }`}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${step.rotation}deg)`,
                    }}
                    onClick={() => setCurrentStep(index)}
                  >
                    {/* Card Background with Gradient */}
                    <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>

                      {/* Card Content */}
                      <div className="relative flex h-full flex-col justify-between p-8 text-white">
                        {/* Step Number */}
                        <div className="mb-4">
                          <h3 className="mb-6 text-6xl font-bold opacity-90">
                            {step.id}
                          </h3>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="mb-4 text-xl font-semibold">
                            {step.title}
                          </h3>
                          <p className="mb-6 text-sm leading-relaxed text-white/90">
                            {step.description}
                          </p>

                          <Link
                            href="https://auth.gravitywrite.com/register"
                            className="group inline-flex items-center space-x-2 font-semibold text-white transition-colors hover:text-white/80"
                          >
                            <span>Learn more</span>
                            <div className="transition-transform group-hover:translate-x-1">
                              <ArrowIcon />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Center Circle with Current Step Info */}
              <div className="absolute top-1/2 left-1/2 z-30 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-4 border-blue-100 bg-white shadow-xl">
                <div className="text-center">
                  <div className="mb-1 text-2xl font-bold text-blue-600">
                    {steps[currentStep].id}
                  </div>
                  <div className="text-xs font-medium text-gray-500">of 6</div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="mt-12 flex justify-center space-x-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'scale-125 bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessJourneySection
