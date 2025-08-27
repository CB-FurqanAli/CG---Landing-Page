'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function ClientManagementFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What data would my client see in the portal?',
      answer:
        'Clients can only view the limited data according to the nature of their sub-accounts. It’s all in your control, you can allow what a client can have access to.',
    },
    {
      question: 'How could I give my client access to the portal?',
      answer:
        'You have to add your client as a sub-user from your Call Gauge AI account. Once created, your clients will receive their login credentials via email and then they can have access to the portal.',
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
