// Pixel-match conversion of your HTML to Next.js + Tailwind (no TypeScript, no props)
// Copy to: src/components/demo/FeaturesInActionExact.jsx

export default function FeaturesInActionExact() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Features You&#39;ll See in Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Get a sneak peek at the powerful insights you'll unlock in your
            personalized demo
          </p>
        </div>

        {/* Feature 1: Attribution Dashboard */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span>98% Attribution Accuracy</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Complete Call Attribution Dashboard
            </h3>
            <p className="mb-6 text-lg text-slate-600">
              See every phone call attributed to its exact source — campaign,
              keyword, ad, and landing page. No more guessing which marketing
              channels drive your best leads.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Real-time call tracking by source
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Campaign performance comparison
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">ROI metrics by channel</span>
              </li>
            </ul>
          </div>
          <div>
            {/* Screenshot Placeholder 1 */}
            {/* Replace with: <img src="/images/dashboard-screenshot.jpg" alt="CallGauge AI Attribution Dashboard" loading="lazy" className="rounded-xl shadow-2xl border border-slate-200" width={600} height={400} /> */}
            <div
              className="img-placeholder flex items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center text-white shadow-2xl"
              style={{ minHeight: 400 }}
            >
              {/*<img*/}
              {/*  src="/images/dashboard-screenshot.jpg"*/}
              {/*  alt="CallGauge AI Attribution Dashboard"*/}
              {/*  loading="lazy"*/}
              {/*  className="rounded-xl border border-slate-200 shadow-2xl"*/}
              {/*  width={1200}*/}
              {/*  height={800}*/}
              {/*/>*/}

              <div>
                <p className="mb-2 font-semibold">
                  📊 Attribution Dashboard Screenshot
                </p>
                <p className="text-sm opacity-80">
                  Replace with: dashboard-screenshot.jpg
                  <br />
                  Recommended size: 1200x800px
                  <br />
                  Optimized JPG &lt;200KB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: AI Call Insights */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            {/* Screenshot Placeholder 2 */}
            {/* Replace with: <img src="/images/ai-insights-screenshot.jpg" alt="AI Call Insights and Transcription" loading="lazy" className="rounded-xl shadow-2xl border border-slate-200" width={600} height={400} /> */}
            <div
              className="img-placeholder flex items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center text-white shadow-2xl"
              style={{ minHeight: 400 }}
            >
              <div>
                <p className="mb-2 font-semibold">🤖 AI Insights Screenshot</p>
                <p className="text-sm opacity-80">
                  Replace with: ai-insights-screenshot.jpg
                  <br />
                  Recommended size: 1200x800px
                  <br />
                  Optimized JPG &lt;200KB
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>AI-Powered Intelligence</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Instant AI Call Summaries & Lead Scoring
            </h3>
            <p className="mb-6 text-lg text-slate-600">
              AI automatically transcribes, summarizes, and scores every call.
              Instantly identify your highest-value leads and the campaigns that
              drive them.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  95%+ accurate AI transcription
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  One-line summaries with key highlights
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Automated lead quality scoring
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Real-Time ROI */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center space-x-2 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Real-Time ROI Tracking</span>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Optimize Marketing Spend with Confidence
            </h3>
            <p className="mb-6 text-lg text-slate-600">
              See your true marketing ROI in real-time. Track conversion rates,
              cost per lead, and revenue by source — all in one unified
              dashboard.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Live campaign performance metrics
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Cost per lead and conversion tracking
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700">
                  Revenue attribution by marketing source
                </span>
              </li>
            </ul>
          </div>
          <div>
            {/* Screenshot Placeholder 3 */}
            {/* Replace with: <img src="/images/roi-analytics-screenshot.jpg" alt="Real-Time ROI Analytics Dashboard" loading="lazy" className="rounded-xl shadow-2xl border border-slate-200" width={600} height={400} /> */}
            <div
              className="img-placeholder flex items-center justify-center rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center text-white shadow-2xl"
              style={{ minHeight: 400 }}
            >
              <div>
                <p className="mb-2 font-semibold">
                  💰 ROI Analytics Screenshot
                </p>
                <p className="text-sm opacity-80">
                  Replace with: roi-analytics-screenshot.jpg
                  <br />
                  Recommended size: 1200x800px
                  <br />
                  Optimized JPG &lt;200KB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
