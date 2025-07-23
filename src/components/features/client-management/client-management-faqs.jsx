'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export function ClientManagementFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How could I give my client access to the portal?',
      answer:
        'You have to add your client as a sub-user from your Call Gauge AI account. Once created, your clients will receive their login credentials via email and then they can have access to the portal.',
    },
    {
      question: 'What data would my client see in the portal?',
      answer:
        'Clients can only view the limited data according to the nature of their sub-accounts. It’s all in your control, you can allow what a client can have access to.',
    },
    {
      question: 'Is the client portal secure?',
      answer:
        'Yes, it’s absolutely safe and secure. Clients have their unique login and they can only view their own data which is assigned to them. Your main account remains private and in yours control only.',
    },
    {
      question: 'Can I see what my client see?',
      answer:
        'Yes, you can login to their account via your own account and see what they can. You don’t need their password to troubleshoot and assist with questions.',
    },
    {
      question: 'How many clients can I add?',
      answer:
        'It depends on your subscription plan. Number of sub-users varies from plan to plan. See our different plans to choose what suits you best. You can add sub-users in any plan by paying a minimal amount.',
    },
    {
      question: 'What to do when a client forgets his login credentials?',
      answer:
        'No worries! You can easily resend the login details via email just by clicking a button from your Call Gauge AI account.',
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
        Client Management FAQs
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
