'use client'
import { HelpCircle } from 'lucide-react'

export function PortingFaq() {
  const faqs = [
    {
      q: 'How long does the porting process take?',
      a: 'Timelines depend on your current carrier. Mostly, if your details are accurate, your numbers can be moved over within 7–10 business days, after you submit a port request.',
    },

    {
      q: 'Is there a cost to port numbers into CallGauge AI?',
      a: 'No, porting your phone numbers into CallGauge AI is completely free. If you ever decide to move your phone numbers out then you have to pay one-time fee that is $10 to unlock your numbers.',
    },
    {
      q: 'Can I port numbers into a trial or free account?',
      a: 'Not an option at the moment. Porting is available only for active paid accounts. You’ll need to upgrade before submitting your request.',
    },
    {
      q: 'What information do I need to submit a port request?',
      a: 'Typically, you’ll need your current provider’s details and a PIN to port your phone numbers. You can find the complete requirements inside our Port Request Form.',
    },
    {
      q: 'How do I get my porting PIN from my existing provider?',
      a: 'Most carriers require you to contact their support center and request a PIN to transfer your numbers.Once you have it, you can include it with your port request to CallGauge AI.',
    },
    {
      q: 'Can I move numbers out of CallGauge AI later?',
      a: 'Of course. You’re always in control of your numbers. To transfer out, simply submit a port-out request from your CallGauge AI account.',
    },
    {
      q: 'Will I be able to set up my numbers before the transfer is complete?',
      a: 'Yes. Once your port request is approved by our platform, your numbers will be added to your CallGauge AI dashboard, usually giving you 1–4 days to configure call flows and routing before they officially go live.',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Common Questions About Porting to CallGauge AI
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-1 h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
