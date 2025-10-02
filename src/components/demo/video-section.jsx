'use client'

function getYouTubeId(input) {
  if (!input) return ''
  // If already an ID (no spaces and no protocol), return as-is when plausible
  if (/^[a-zA-Z0-9_-]{10,}$/.test(input) && !input.includes('http'))
    return input
  try {
    const url = new URL(input)
    // youtu.be/<id>
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.replace('/', '')
    }
    // youtube.com/watch?v=<id>
    if (url.searchParams.get('v')) {
      return url.searchParams.get('v')
    }
    // youtube.com/embed/<id>
    if (url.pathname.startsWith('/embed/')) {
      return url.pathname.split('/embed/')[1]
    }
  } catch (_) {
    // not a URL, maybe it's just an ID
  }
  return ''
}

export default function VideoSection({
  title = 'See CallGauge AI in Action',
  description = 'Watch how marketing teams track every call to its exact source and stop wasting ad spend in just 90 seconds',
  youtubeUrl = '',
  ctaText = 'Schedule Your Personalized Demo',
}) {
  const id = getYouTubeId(youtubeUrl)

  const handleScrollTop = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            {description}
          </p>
        </div>

        {/* YouTube Video */}
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-xl border-4 border-slate-200 pt-[56.25%] shadow-2xl">
            {/* 16:9 */}
            {id ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title="CallGauge AI Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-center text-white">
                <p className="max-w-md">
                  Add a valid YouTube link to show your demo video.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="mb-4 text-slate-600">
            Ready to see how it works for your campaigns?
          </p>
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
