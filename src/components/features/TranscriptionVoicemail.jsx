// components/TrackingSection.tsx
import { Screenshot } from '@/components/screenshot'
import Link from 'next/link'
export default function TranscriptionVoicemail() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-8 inline-flex items-center rounded-full bg-green-100 px-6 py-3">
              <span className="font-bold text-green-800">
                👤 Transcription & Voicemail
              </span>
            </div>

            <h2 className="mb-8 text-4xl leading-tight font-black tracking-tight text-gray-900 lg:text-5xl">
              Never Lose Context, Even on{' '}
              <span className="bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                Missed Calls
              </span>
            </h2>

            <p className="mb-10 text-xl leading-relaxed text-gray-600">
              Turn missed calls into opportunities with CallGauge AI. Voicemails
              and AI transcripts are stored in one place, giving your team
              instant context to act faster, follow up smarter, and close more
              deals with confidence.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                {
                  title: 'AI Transcription',
                  desc: ' Accurate transcripts with speaker identification make conversations easy to review and analyze.',
                },
                {
                  title: 'SMS to Email Forwarding',
                  desc: ' Forward text updates tied to your tracking numbers directly to your inbox for centralized access.',
                },
                {
                  title: 'Voicemail Inbox',
                  desc: 'Store and review all recordings with caller details, duration, and source tracking.',
                  link: 'features/white-labeling',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-500">
                    <span className="text-sm font-bold text-white">✓</span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">{item.desc}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="mt-2 inline-block font-bold text-blue-600 hover:underline"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rotate-2 transform rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden">
                <div>
                  <Screenshot
                    width={1116}
                    height={686}
                    // src="/screenshots/app.png" // Replace with actual CallGauge dashboard screenshot
                    src="/screenshots/dummy2.png" // Replace with actual CallGauge dashboard screenshot
                    className="sm:max-w-[76rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
