'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function SmallBusinessFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: ' I don’t have a marketing team. Can I still use CallGauge AI?',
      answer:
        'Yes! Our platform is specially designed to be simple and user-friendly. You don’t need technical skills or a team to get started.',
    },
    {
      question: ' How can call tracking help my business grow? ',
      answer:
        'By showing you which ads generate calls, you can cut your expenses on marketing that doesn’t work and spend more on what brings in customers.',
    },
    {
      question: ' What happens if I miss a call?',
      answer:
        'CallGauge AI instantly notifies you and sends voicemail notifications so you can follow up quickly and never lose a lead.',
    },
    {
      question: ' Is it affordable for small businesses?',
      answer:
        'Absolutely. With numbers starting at just $0.50, it’s one of the most cost-effective call tracking solutions available in the market.',
    },
    {
      question: 'Can I set up custom greetings for my callers?',
      answer:
        'Yes! You can record personalized greetings and set up call menus to give your business a professional presence.',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h3" className="mx-auto mt-2 max-w-4xl">
            FAQs – Call Tracking for Small Businesses
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
