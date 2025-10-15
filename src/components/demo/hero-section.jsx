'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

export default function HeroSection({
  eyebrow = 'See Results in Your First Week',
  headline = 'See Exactly Which Campaigns Drive Your Best Calls',
  subcopy = "Get a personalized demo and discover how CallGauge AI's up to 98% accurate attribution stops wasted ad spend and maximizes your marketing ROI.",
  bullets = [
    {
      title: 'See Your Complete Attribution Picture',
      desc: 'Track every call back to the exact campaign, keyword, and channel with up to 98% accuracy',
    },
    {
      title: 'AI-Powered Call Intelligence',
      desc: 'Instant transcripts, summaries, and lead scoring to identify high-value conversations',
    },
    {
      title: 'Setup in Under 5 Minutes',
      desc: 'Seamless integrations with Google Ads, HubSpot, Salesforce, and 5+ apps',
    },
  ],
  testimonial = {
    quote:
      'Within the first week, we discovered which campaigns were actually driving high-quality calls. CallGauge AI stopped our wasted spend immediately.',
    name: 'Sarah Mitchell',
    role: 'Director of Marketing',
  },
  ctaHref = '#demo',
  trialHref = '#trial',
}) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    teamSize: '',
  })

  const isValid = useMemo(() => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      /.+@.+\..+/.test(form.email) &&
      form.company.trim() &&
      form.useCase.trim()
    )
  }, [form])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!isValid || loading) return
    setLoading(true)
    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Failed to send email.')
      }
    } catch (err) {
      console.error(err)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const onChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left Column */}
        <div>
          {eyebrow ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <LightningIcon className="h-4 w-4" />
              <span>{eyebrow}</span>
            </div>
          ) : null}

          <h1 className="mb-6 text-4xl leading-tight font-bold text-slate-900 lg:text-5xl">
            {headline}
          </h1>

          {subcopy ? (
            <p className="mb-8 text-lg text-slate-600 lg:text-lg">{subcopy}</p>
          ) : null}

          {/* Value Props */}
          <ul className="mb-8 space-y-4">
            {bullets.map((b, i) => (
              <li className="flex items-start gap-3" key={i}>
                <CheckCircleIcon className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">{b.title}</h3>
                  <p className="text-slate-600">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Social Proof */}
          <blockquote className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="mb-3 flex items-center gap-2">
              <UsersIcon className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-900">
                Trusted by Marketing Teams
              </span>
            </div>
            <p className="mb-4 text-slate-700 italic">“{testimonial.quote}”</p>
            <footer className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">
                {testimonial.name}
              </span>
              {testimonial.role ? (
                <span className="text-slate-600"> — {testimonial.role}</span>
              ) : null}
            </footer>
          </blockquote>
        </div>

        {/* Right Column - Form */}
        <div className="lg:sticky lg:top-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6 text-center">
                  <h2 className="mb-1 text-2xl font-bold text-slate-900">
                    Schedule Your Demo
                  </h2>
                  <p className="text-slate-600">
                    30-minute personalized walkthrough
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First Name *" htmlFor="firstName">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={onChange('firstName')}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </Field>
                    <Field label="Last Name *" htmlFor="lastName">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={onChange('lastName')}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                      />
                    </Field>
                  </div>

                  <Field label="Work Email *" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange('email')}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </Field>

                  <Field label="Company Name *" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={onChange('company')}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </Field>

                  <Field label="Phone Number" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange('phone')}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                  </Field>

                  <Field label="What best describes you? *" htmlFor="useCase">
                    <select
                      id="useCase"
                      name="useCase"
                      required
                      value={form.useCase}
                      onChange={onChange('useCase')}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      <option value="agency">Marketing Agency</option>
                      <option value="b2b">B2B Service Company</option>
                      <option value="local">Local Service Business</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </Field>

                  <Field label="Team Size" htmlFor="teamSize">
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={form.teamSize}
                      onChange={onChange('teamSize')}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    >
                      <option value="">Select team size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </Field>

                  <button
                    type="submit"
                    disabled={!isValid || loading}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-purple-700 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    aria-busy={loading}
                  >
                    {loading ? 'Submitting…' : 'Schedule My Demo'}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    By submitting, you agree to our Terms of Service and Privacy
                    Policy
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6 text-center">
                  <p className="mb-3 text-sm text-slate-600">
                    Prefer to explore on your own?
                  </p>
                  <Link
                    href={trialHref}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Start Free Trial →
                  </Link>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircleIcon className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Thank You!
                </h3>
                <p className="mb-6 text-slate-600">
                  We&apos;ve received your demo request. Our team will reach out
                  within 24 hours to schedule your personalized walkthrough.
                </p>
                <div className="rounded-lg bg-blue-50 p-4 text-left">
                  <p className="text-sm font-medium text-slate-700">
                    What happens next:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>✓ Confirmation email sent</li>
                    <li>✓ Calendar invitation within 24 hours</li>
                    <li>✓ Pre-demo questionnaire (optional)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Small helpers & icons ---------- */
function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  )
}

function LightningIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  )
}

function UsersIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}

function CheckCircleIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
