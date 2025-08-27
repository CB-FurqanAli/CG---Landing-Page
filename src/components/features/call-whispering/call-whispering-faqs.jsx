'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function CallWhisperingFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What will caller hear during call whisper?',
      answer:
        'The caller will hear regular ringing of the call, whispering message will be played only to the receiver. ',
    },
    {
      question: 'Should I use call whispering on every number? ',
      answer:
        'No use should use call whispering only on numbers where it makes sense like Google Ads, offline promotions or Facebook campaigns. ',
    },
    {
      question: 'Can I use call recording and call whispering together? ',
      answer:
        'Yes! Call Gauge AI  supports both features at the same time seamlessly to ensure full context and performance tracking. ',
    },
    {
      question: 'Does call whispering reduce spam calls?',
      answer:
        'No, call whispering have no role in reducing spam calls, but Call gauge Pro provides another powerful spam blocking tool to deal with spam calls.',
    },
  ]
  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h3" className="mx-auto mt-2 max-w-4xl">
            FAQs – Call Tracking for Agencies
          </Heading>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h4>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h4>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
