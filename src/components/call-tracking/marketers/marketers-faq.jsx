'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function MarketersFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Can I track calls from Google Ads and Facebook Ads?',
      answer:
        'Yes. With Dynamic Number Insertion, you can track calls from any channel, campaign, ad, or keyword. ',
    },

    {
      question: ' Does CallGauge AI integrate with my CRM?',
      answer:
        'Yes. You can sync calls, leads, and insights directly into your CRM or ad platform using integrations and Zapier.',
    },
    {
      question: 'How does CallGauge AI improve ROI?',
      answer:
        'By showing exactly which campaigns generate calls and by analyzing conversations to reveal customer intent, you can optimize spend and scale winners.  ',
    },
    {
      question: ' How does AI help marketers?',
      answer:
        'Our AI automatically transcribes calls, scores leads, detects sentiment, and surfaces insights—saving you hours of manual review.',
    },
    {
      question: 'Is reporting client-friendly?',
      answer:
        'Absolutely. Generate clean, branded reports or give stakeholders secure access to real-time dashboards.',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h3" className="mx-auto mt-2 max-w-4xl">
            FAQs – Call Tracking for Marketers
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
