'use client'
export default function AiInsights2() {
  return (
    <section id="ai-insights" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-green-100 px-6 py-3">
            <span className="font-bold text-green-800">🤖 AI INSIGHTS</span>
          </div>
          <h2 className="mb-8 text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
            AI-Powered{' '}
            <span className="bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Every phone call holds valuable data. CallGauge AI uses advanced AI
            to turn conversations into searchable transcripts, real-time
            coaching, and predictive insights, so you can convert more calls
            into revenue.
          </p>
        </div>

        {/* Grid Cards */}
        {/*<div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">*/}
        {/*  /!* Real-time Transcription *!/*/}
        {/*  <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">*/}
        {/*    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-500">*/}
        {/*      <span className="text-2xl text-white">📝</span>*/}
        {/*    </div>*/}
        {/*    <h3 className="mb-4 text-2xl font-bold text-gray-900">*/}
        {/*      Real-time Transcription*/}
        {/*    </h3>*/}
        {/*    <p className="mb-6 leading-relaxed text-gray-600">*/}
        {/*      99% accurate AI transcription of every call with speaker*/}
        {/*      identification, timestamps, and keyword highlighting.*/}
        {/*    </p>*/}

        {/*    <div className="mb-6 rounded-xl bg-gray-50 p-4">*/}
        {/*      <div className="mb-2 text-sm text-gray-500">*/}
        {/*        Live Transcription Preview:*/}
        {/*      </div>*/}
        {/*      <div className="space-y-2">*/}
        {/*        <div className="text-sm">*/}
        {/*          <span className="font-medium text-blue-600">Customer:</span>{' '}*/}
        {/*          <span className="text-gray-800">*/}
        {/*            &quot;Hi, I&apos;m interested in your premium plan for my*/}
        {/*            marketing agency...&quot;*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*        <div className="text-sm">*/}
        {/*          <span className="font-medium text-green-600">Agent:</span>{' '}*/}
        {/*          <span className="text-gray-800">*/}
        {/*            &quot Great! Our premium plan includes advanced attribution*/}
        {/*            and unlimited tracking numbers...&quot*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <ul className="space-y-2 text-sm text-gray-600">*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>*/}
        {/*        <span>Speaker identification</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>*/}
        {/*        <span>Keyword detection</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>*/}
        {/*        <span>Multi-language support</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}

        {/*  /!* Sentiment Analysis *!/*/}
        {/*  <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">*/}
        {/*    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500">*/}
        {/*      <span className="text-2xl text-white">😊</span>*/}
        {/*    </div>*/}
        {/*    <h3 className="mb-4 text-2xl font-bold text-gray-900">*/}
        {/*      Sentiment & Intent*/}
        {/*    </h3>*/}
        {/*    <p className="mb-6 leading-relaxed text-gray-600">*/}
        {/*      Advanced sentiment analysis and intent detection to understand*/}
        {/*      customer emotions and buying signals.*/}
        {/*    </p>*/}

        {/*    <div className="mb-6 space-y-4">*/}
        {/*      <div className="rounded-xl bg-green-50 p-4">*/}
        {/*        <div className="mb-2 flex items-center justify-between">*/}
        {/*          <span className="text-sm font-medium text-gray-700">*/}
        {/*            Overall Sentiment*/}
        {/*          </span>*/}
        {/*          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">*/}
        {/*            Positive*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*        <div className="h-2 w-full rounded-full bg-gray-200">*/}
        {/*          <div*/}
        {/*            className="h-2 rounded-full bg-green-500"*/}
        {/*            style={{ width: '85%' }}*/}
        {/*          ></div>*/}
        {/*        </div>*/}
        {/*        <div className="mt-1 text-xs text-gray-500">*/}
        {/*          85% positive sentiment*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="rounded-xl bg-blue-50 p-4">*/}
        {/*        <div className="mb-2 flex items-center justify-between">*/}
        {/*          <span className="text-sm font-medium text-gray-700">*/}
        {/*            Purchase Intent*/}
        {/*          </span>*/}
        {/*          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">*/}
        {/*            High*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*        <div className="text-xs text-gray-600">*/}
        {/*          Keywords: &quot; budget approved &quot;, &quot; when can we*/}
        {/*          start &quot;, &quot; pricing &quot;*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <ul className="space-y-2 text-sm text-gray-600">*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>*/}
        {/*        <span>Emotion detection</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>*/}
        {/*        <span>Intent classification</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>*/}
        {/*        <span>Urgency scoring</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}

        {/*  /!* Lead Scoring *!/*/}
        {/*  <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">*/}
        {/*    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">*/}
        {/*      <span className="text-2xl text-white">⭐</span>*/}
        {/*    </div>*/}
        {/*    <h3 className="mb-4 text-2xl font-bold text-gray-900">*/}
        {/*      AI Lead Scoring*/}
        {/*    </h3>*/}
        {/*    <p className="mb-6 leading-relaxed text-gray-600">*/}
        {/*      Intelligent lead scoring based on conversation quality, intent*/}
        {/*      signals, and historical conversion patterns.*/}
        {/*    </p>*/}

        {/*    <div className="mb-6 space-y-4">*/}
        {/*      <div className="rounded-xl bg-yellow-50 p-4">*/}
        {/*        <div className="mb-3 flex items-center justify-between">*/}
        {/*          <span className="text-sm font-medium text-gray-700">*/}
        {/*            Lead Score*/}
        {/*          </span>*/}
        {/*          <span className="text-2xl font-bold text-yellow-600">92</span>*/}
        {/*        </div>*/}
        {/*        <div className="mb-2 flex space-x-1">*/}
        {/*          <div className="h-4 w-4 rounded-full bg-yellow-400"></div>*/}
        {/*          <div className="h-4 w-4 rounded-full bg-yellow-400"></div>*/}
        {/*          <div className="h-4 w-4 rounded-full bg-yellow-400"></div>*/}
        {/*          <div className="h-4 w-4 rounded-full bg-yellow-400"></div>*/}
        {/*          <div className="h-4 w-4 rounded-full bg-gray-200"></div>*/}
        {/*        </div>*/}
        {/*        <div className="text-xs text-gray-600">*/}
        {/*          Hot Lead - High conversion probability*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="space-y-2 text-xs">*/}
        {/*        <div className="flex justify-between">*/}
        {/*          <span className="text-gray-600">Budget qualified</span>*/}
        {/*          <span className="font-medium text-green-600">✓ Yes</span>*/}
        {/*        </div>*/}
        {/*        <div className="flex justify-between">*/}
        {/*          <span className="text-gray-600">Decision maker</span>*/}
        {/*          <span className="font-medium text-green-600">✓ Yes</span>*/}
        {/*        </div>*/}
        {/*        <div className="flex justify-between">*/}
        {/*          <span className="text-gray-600">Timeline urgent</span>*/}
        {/*          <span className="font-medium text-yellow-600">*/}
        {/*            ⚠ Within 30 days*/}
        {/*          </span>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <ul className="space-y-2 text-sm text-gray-600">*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>*/}
        {/*        <span>Conversion prediction</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>*/}
        {/*        <span>Quality assessment</span>*/}
        {/*      </li>*/}
        {/*      <li className="flex items-center space-x-2">*/}
        {/*        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>*/}
        {/*        <span>Follow-up recommendations</span>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/* CTA */}
        <div className="text-center">
          <button className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl">
            Experience AI-Powered Insights
          </button>
        </div>
      </div>
    </section>
  )
}
