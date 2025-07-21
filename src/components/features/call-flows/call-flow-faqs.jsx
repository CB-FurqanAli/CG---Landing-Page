'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
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
      question: 'Why call flow is important for my business? ',
      answer:
        'Call flows are very important for a business as it ensure that every call is handled efficiently and properly, routed to the right person or department. It provides consistent customer experience. They are helpful in reducing missed calls, improving response time and increasing customer satisfaction level. ',
    },
    {
      question: 'Can I customize my call flow? ',
      answer:
        'Yes, you can fully customize call flows according to your business needs. You can add different steps which you think are necessary for your business and can skip others altogether. ',
    },
    {
      question: 'How many numbers can I add to one call flow? ',
      answer:
        'You can add as many numbers as you want to a single call flow. It would be easy and time saving rather create a new call flow for every number every time. ',
    },
    {
      question:
        'Am I bound by law to let the caller know about call recording? ',
      answer:
        'It depends on the law of the state and country you live in. But it’s better to let the caller know about recording the call by playing a disclaimer message about this.',
    },
    {
      question:
        'Can I create different call flows for different campaigns and numbers? ',
      answer:
        'Yes, you can create as many call flows as you want. Different call flows can be easily created for different campaigns and numbers. ',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  const toggleFAQ = (index, column) => {
    const globalIndex =
      column === 'left' ? index : index + leftColumnFaqs.length
    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
  }

  return (
    <Container className="py-24">
      <Heading as="h3" className="mx-auto mt-2 max-w-3xl text-center">
        Call Flow FAQs
      </Heading>
      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-md transition-all duration-300 hover:bg-[#FDE0C1] hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index, 'left')}
                className="flex w-full items-center justify-between rounded-xl p-5 text-left focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}-left`}
              >
                <h4 className="pr-6 text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </h4>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}-left`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 p-5 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="border-l-4 border-pink-600 pl-4 text-base leading-7 text-gray-800 sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-md transition-all duration-300 hover:bg-[#FDE0C1] hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index, 'right')}
                className="flex w-full items-center justify-between rounded-xl p-5 text-left focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                aria-expanded={openIndex === index + leftColumnFaqs.length}
                aria-controls={`faq-answer-${index}-right`}
              >
                <h4 className="pr-6 text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </h4>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index + leftColumnFaqs.length
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}-right`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index + leftColumnFaqs.length
                    ? 'max-h-96 p-5 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="border-l-4 border-pink-600 pl-4 text-base leading-7 text-gray-800 sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
