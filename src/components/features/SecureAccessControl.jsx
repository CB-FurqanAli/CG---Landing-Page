'use client'
import { Screenshot } from '@/components/screenshot'
import Link from 'next/link'

export default function SecureAccessControl() {
  return (
    <section id="analytics" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-full bg-red-100 px-6 py-3">
              <span className="font-bold text-red-800">
                Secure Access & Control
              </span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Keep Data Protected and{' '}
              <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Clients Confident
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              CallGauge AI safeguards every call and customer detail with
              enterprise-level security while empowering you with full
              visibility and control. From role-based permissions to secure
              portals, your business and your clients stay protected at every
              step.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: 'Role-Based Access',
                  desc: 'Define permissions by role so each team member gets the access they need—nothing more.',
                },

                {
                  title: 'Encrypted Call Storage',
                  desc: 'All calls are stored securely with encryption, keeping sensitive data protected and compliant.',
                },
                {
                  title: 'Activity Logs',
                  desc: 'Track every login, change, and action with detailed activity logs for auditing and accountability.',
                },
                {
                  title: 'Client Portal',
                  desc: 'Provide clients with their own secure dashboards and reports to build trust and deliver transparency.',
                  link: 'features/client-management',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="mt-2 inline-block font-bold text-blue-600 hover:underline"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            <div className="transform rounded-3xl border border-gray-200 bg-white shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden">
                <div>
                  <Screenshot
                    width={1024}
                    height={920}
                    src="/features/secure-access-control.png"
                    className="sm:max-w-[76rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
