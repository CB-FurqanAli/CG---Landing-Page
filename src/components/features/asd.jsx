export default function AppAsd() {
  return (
    <div className="max-h-screen bg-white">
      <div className="container mx-auto px-8 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-bold text-gray-900">
                Complete multi-channel attribution
              </h2>
              <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                Get attribution for every conversion your marketing campaigns
                drive over the phone. Whether the call originates from search,
                social, your website, or virtually any other channel, you can
                see the full digital-to-phone call path and know exactly whats
                driving the best leads.
              </p>
            </div>

            {/*<button className="group flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-600">*/}
            {/*  Discover multi-channel attribution*/}
            {/*</button>*/}
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="relative overflow-hidden rounded-3xl bg-green-200 p-20">
              {/* Main Representative Image - Center */}
              <div className="absolute top-32 left-1/2 -translate-x-1/2 transform">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/5453830/pexels-photo-5453830.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                    alt="Customer service representative"
                    className="h-64 w-64 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Conversion Rate Card - Bottom Center */}
              <div className="absolute bottom-2 left-1/2 w-44 -translate-x-1/2 transform rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-md mb-3 font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="mb-2 text-3xl font-bold text-gray-900">33%</div>
                <div className="flex items-center gap-1 text-xs"></div>
              </div>

              <div className="absolute top-8 left-6 w-44 rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-md mb-3 font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="mb-2 text-3xl font-bold text-gray-900">33%</div>
                <div className="flex items-center gap-1 text-xs"></div>
              </div>

              <div className="absolute top-8 right-6 w-44 rounded-lg bg-white p-4 shadow-sm">
                <h3 className="text-md mb-3 font-medium text-gray-600">
                  Conversion Rate
                </h3>
                <div className="mb-2 text-3xl font-bold text-gray-900">33%</div>
                <div className="flex items-center gap-1 text-xs"></div>
              </div>

              {/* Container sizing */}
              <div className="h-80 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
