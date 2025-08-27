'use client'

import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { useState } from 'react'

export function VoiceMailFaqs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Will I be notified about a voicemail?',
      answer:
        'Yes, Call Gauge Pro sends an SMS notification with voicemail recording link to any number you choose.',
    },

    {
      question:
        'Can I choose the duration after which the call goes to voicemail?',
      answer:
        'Absolutely! You can not only choose the number of seconds after which your call will go on voicemail but you can forward all of your calls directly to the voicemail if needed.',
    },
    {
      question: 'Can I customize voicemail greetings?',
      answer:
        'Yes, you can either use our text-to-speech option to create a professional greeting or you can also upload your own audio file to give it a personalized touch.',
    },

    {
      question: 'Can I turn voicemail feature off if I want to?',
      answer:
        'Yes off course! It’s up to you. If you don’t want it you can simply disable it with just a few clicks.',
    },
    {
      question: 'Where can I listen to my voicemail?',
      answer:
        'All your voicemails are stored in an organized manner on Voicemails page in your Call Gauge Pro account. You can listen them back or can download and share with whoever you want to.',
    },
    {
      question: 'How long are the voicemails stored in my account?',
      answer:
        'Voicemails are normally stored indefinitely by default, unless you choose to delete them.',
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
