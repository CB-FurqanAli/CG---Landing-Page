export default function AppAsd() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl">
                Complete multi-channel attribution
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Get attribution for every conversion your marketing campaigns
                drive over the phone. Whether the call originates from search,
                social, your website, or virtually any other channel, you can
                see the full digital-to-phone call path and know exactly what’s
                driving the best leads.
              </p>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            {/* Dashboard Box */}
            <div className="relative overflow-hidden rounded-3xl bg-green-200 px-4 py-32 sm:px-10 sm:py-44">
              {/* Representative Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <img
                  src="https://images.pexels.com/photos/5453830/pexels-photo-5453830.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Customer service representative"
                  className="h-64 w-64 rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Top Left Card */}
              <div className="absolute top-6 left-6 w-40 rounded-lg bg-white p-4 shadow-md sm:w-44">
                <h3 className="mb-2 text-sm font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="text-2xl font-bold text-gray-900">33%</div>
              </div>

              {/* Top Right Card */}
              <div className="absolute top-6 right-6 w-40 rounded-lg bg-white p-4 shadow-md sm:w-44">
                <h3 className="mb-2 text-sm font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="text-2xl font-bold text-gray-900">33%</div>
              </div>

              {/* Bottom Center Card */}
              <div className="absolute bottom-0.5 left-1/2 w-40 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow-md sm:w-44">
                <h3 className="mb-2 text-sm font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="text-2xl font-bold text-gray-900">33%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
