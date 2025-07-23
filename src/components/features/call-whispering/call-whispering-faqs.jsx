'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
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
        'Yes! Call Gauge Pro supports both features at the same time seamlessly to ensure full context and performance tracking. ',
    },
    {
      question: 'Does call whispering reduce spam calls?',
      answer:
        'No, call whispering have no role in reducing spam calls, but Call gauge Pro provides another powerful spam blocking tool to deal with spam calls.',
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
      <Heading
        as="h3"
        className="mx-auto mt-2 max-w-3xl text-center text-pink-400"
      >
        Call Whispering FAQs
      </Heading>
      <div className="my-20 grid grid-cols-1 gap-8 md:grid-cols-2">
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
