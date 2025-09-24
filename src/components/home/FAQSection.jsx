'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I track missed calls?',
      answer:
        'CallGauge can send an automatic SMS when you miss a call, alerting you or your client right away. You can also reply with a custom message, like offering a callback. This keeps you connected and responsive.',
    },
    {
      question: 'How can I track phone calls online?',
      answer:
        'Sign up for CallGauge in 30 seconds—no credit card needed. Get a local or toll-free number, forward calls to your phone, and use the online dashboard to record calls and see which campaigns are working.',
    },
    {
      question: 'How does call tracking help with marketing?',
      answer:
        'CallGauge shows you which ads or channels bring in calls by using unique numbers for each campaign. This helps you focus your budget on what works and ditch what doesn’t, saving time and money.',
    },
    {
      question: 'How does call tracking work?',
      answer:
        'CallGauge gives you a unique number that forwards calls to your line. It captures details like the caller’s number, call time, and source. Features like recording and AI transcription help you analyze and improve your campaigns.',
    },
    {
      question: 'Why should I track incoming calls?',
      answer:
        'Tracking calls with CallGauge tells you exactly which ads or sites drive leads. This lets you make smart choices about your marketing budget and focus on what brings in customers.',
    },
    {
      question: 'How do I track calls on Google Ads?',
      answer:
        'Use CallGauge to create landing pages with unique numbers for each Google Ad. Forward calls to your team and check the analytics to see which ads get the most calls, then tweak your strategy for better results.',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Heading as="h3" className="mx-auto mt-2 max-w-4xl">
            Everything you need to know about CallGauge.
          </Heading>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-700">
            We’ve compiled answers to the most common questions about our
            AI-powered call tracking platform.
          </p>
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
