'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function CallRecordingFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How can I notify the caller that the call is being recorded? ',
      answer:
        'You can add a custom voice message at the start of the call to let the caller know that the call is going to be recorded by using Call Gauge AI ’s text-to-speech or upload an audio file option. ',
    },
    {
      question:
        'How much it costs to enable inbound and outbound call recording? ',
      answer:
        'Call Gauge AI  offers free inbound and outbound call recording feature which makes it stand out among other call tracking solutions as most of them do charge for call recording. ',
    },
    {
      question: 'Is it legal to record calls?',
      answer:
        'It depends on the law of the state you live in. Recording business calls is legal in all 50 states of US, some states require single party consent (only you) and some require the consent of both parties i.e. you and the caller. So, beware of the law of your state. ',
    },

    {
      question: 'Is there any limit for call recording? ',
      answer:
        'No, there is no limit on the duration of call recording, your call will be recorded even if it lasts for an hour. You can easily listen back to your recorded calls from call logs.  ',
    },
    {
      question: 'Where are all the call recordings stored? ',
      answer:
        'On call logs page all information of the call is organized and there you can also find your call recordings.  ',
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
