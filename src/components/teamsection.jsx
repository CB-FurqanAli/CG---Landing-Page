'use client'

import Image from 'next/image'

export default function TeamSection() {
  const CEO = {
    name: 'Your CEO Name',
    role: 'Founder & CEO',
    image: '/company/4.jpg',
    bio: 'Sets the vision and product direction, ensuring CallGauge AI delivers clarity and measurable impact for every customer.',
  }

  const team = [
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      image: '/team/michael-foster.jpg',
    },
    {
      name: 'Dries Vincent',
      role: 'Head of Sales',
      image: '/team/dries-vincent.jpg',
    },
    {
      name: 'Celeste Vandermark',
      role: 'Lead Developer',
      image: '/team/celeste-vandermark.jpg',
    },
    {
      name: 'Courtney Henry',
      role: 'Product Designer',
      image: '/team/courtney-henry.jpg',
    },
    {
      name: 'Marcus Eldridge',
      role: 'Product Manager',
      image: '/team/marcus-eldridge.jpg',
    },
    {
      name: 'Whitney Francis',
      role: 'Marketing Lead',
      image: '/team/whitney-francis.jpg',
    },
    {
      name: 'Leonard Krasner',
      role: 'Senior Engineer',
      image: '/team/leonard-krasner.jpg',
    },
    {
      name: 'Nolan Sheffield',
      role: 'UX Designer',
      image: '/team/nolan-sheffield.jpg',
    },
    {
      name: 'Emily Selman',
      role: 'Customer Success Lead',
      image: '/team/emily-selman.jpg',
    },
  ]

  const filteredTeam = team.filter((m) => m.name !== CEO.name)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-gray-700 md:text-xl">
              Behind CallGauge AI is a team of builders, analysts, and
              innovators who share one belief — clarity leads to better
              decisions.
            </p>
          </div>

          {/* CEO – Spotlight Card (Enhanced) */}
          <section aria-labelledby="ceo-spotlight" className="mt-16">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
              <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <Image
                    src={CEO.image}
                    alt={CEO.name}
                    width={180}
                    height={180}
                    className="h-40 w-40 rounded-2xl object-cover ring-4 ring-indigo-100 sm:h-44 sm:w-44"
                    priority
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white shadow-sm">
                    {CEO.role}
                  </span>
                </div>

                <div className="sm:flex-1">
                  <h3
                    id="ceo-spotlight"
                    className="text-3xl font-bold text-gray-900"
                  >
                    {CEO.name}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                    {CEO.bio}
                  </p>

                  {/* Skill badges */}
                  <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                    <span className="rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                      Vision & Strategy
                    </span>
                    <span className="rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                      Product Leadership
                    </span>
                    <span className="rounded-full bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 ring-1 ring-gray-200">
                      Data-Driven Growth
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900">The Team</h3>
            <p className="mt-2 max-w-4xl text-gray-600">
              We come from backgrounds in marketing, software engineering, data
              analytics, and customer support. Every member of our team is
              focused on one goal: helping businesses understand what truly
              drives their growth.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTeam.map((m) => (
                <li
                  key={m.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={80}
                      height={80}
                      className="h-16 w-16 rounded-full object-cover ring-1 ring-gray-200"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {m.name}
                      </h4>
                      <p className="text-sm text-gray-500">{m.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Culture  */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-white p-10 shadow-sm md:p-12">
            <h3 className="text-center text-2xl font-bold text-gray-900 md:text-3xl">
              Our Culture
            </h3>
            <div className="mx-auto mt-5 max-w-3xl space-y-6 text-gray-700">
              <p className="text-base leading-relaxed md:text-lg">
                We work collaboratively, listen actively, and improve
                continuously. We believe in transparency — both in our data and
                in how we operate.
              </p>
              <p className="text-base leading-relaxed md:text-lg">
                Every improvement we make, every feature we release, and every
                insight we share is driven by a commitment to clarity,
                precision, and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
