'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function ServiceProvidersFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How can call tracking help my service business?',
      answer:
        'By showing you which ads and campaigns drive actual calls, you’ll know exactly where to invest and where you have to stop wasting money i.e. channels that don’t work.',
    },
    {
      question: 'What if I miss a call while on the job?',
      answer:
        'CallGauge AI sends you instant notifications and voicemail-to-text, so you can follow up quickly and never miss the job.',
    },
    {
      question: 'Can I make my small business sound more professional?',
      answer:
        'Yes! With call menus, customized greetings, and call flows, even a single-person business can present a polished and professional image to customers.',
    },
    {
      question: 'Is it affordable for service providers?',
      answer:
        'Absolutely. At just $0.50 per number, it’s one of the most cost-effective call tracking platforms available in the industry.',
    },
    {
      question: 'Do I need technical skills to set it up?',
      answer:
        'Not at all. CallGauge AI is designed to be simple and easy to use, perfect for busy service providers.',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h3" className="mx-auto mt-2 max-w-4xl">
            FAQs – Call Tracking for Service Providers
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
