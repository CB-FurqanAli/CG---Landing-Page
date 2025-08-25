'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function AgenciesFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Can I manage multiple clients from one account?',
      answer:
        'Yes. CallGauge AI is built for agencies, allowing you to create dedicated sub-accounts for each client with separate reporting and billing. ',
    },
    {
      question: 'Can clients access their own call data?',
      answer:
        'Absolutely. Each client gets a secure login to view calls, texts, and voicemails related to their account. ',
    },
    {
      question: 'How do I prove ROI to my clients?',
      answer:
        'Our attribution system connects every call to the campaign, keyword, or channel that generated it. You can generate white-labeled reports or give clients portal access for full transparency. ',
    },
    {
      question: 'Does CallGauge AI support Pay Per Call billing',
      answer:
        'Yes. You can define qualified calls and automatically bill clients using our Stripe integration. ',
    },
    {
      question: ' How is CallGauge AI different from other tools?',
      answer:
        'Unlike traditional call tracking, we add AI analysis, automation, and billing features—giving agencies an all-in-one growth engine, not just a tracking tool.',
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
