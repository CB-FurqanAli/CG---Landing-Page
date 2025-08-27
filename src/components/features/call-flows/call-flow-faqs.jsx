'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function CallFlowFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is a Call Flow? ',
      answer:
        'A call flow is a step by step predefined path that a call follows in your business. It tracks and manages the inbound calls and often involves steps like, Greetings, Call forwarding, Call recording, voicemails and much more. ',
    },
    {
      question: 'How many numbers can I add to one call flow? ',
      answer:
        'You can add as many numbers as you want to a single call flow. It would be easy and time saving rather create a new call flow for every number every time. ',
    },
    {
      question:
        'Can I create different call flows for different campaigns and numbers? ',
      answer:
        'Yes, you can create as many call flows as you want. Different call flows can be easily created for different campaigns and numbers. ',
    },

    {
      question: 'Can I customize my call flow? ',
      answer:
        'Yes, you can fully customize call flows according to your business needs. You can add different steps which you think are necessary for your business and can skip others altogether. ',
    },
    {
      question:
        'Am I bound by law to let the caller know about call recording? ',
      answer:
        'It depends on the law of the state and country you live in. But it’s better to let the caller know about recording the call by playing a disclaimer message about this.',
    },
    {
      question: 'Why call flow is important for my business? ',
      answer:
        'Call flows are very important for a business as it ensure that every call is handled efficiently and properly, routed to the right person or department. It provides consistent customer experience. They are helpful in reducing missed calls, improving response time and increasing customer satisfaction level. ',
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
