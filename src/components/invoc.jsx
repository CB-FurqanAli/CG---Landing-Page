export const InvocForresterBanner = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-7xl">
        {/* Main Banner Container */}
        <div className="relative flex items-center justify-between rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145">
          {/* Left Content */}
          <div className="z-10 max-w-2xl">
            <h1 className="mb-6 text-4xl leading-tight font-bold">
              Track 7x more numbers without escalating your budget
            </h1>
            <p className="mb-8 text-lg font-medium">
              Call Gauge pro is designed to transform the Call tracking industry
              with the matchless prices, allowing you to monitor more campaigns,
              websites and clients – without limitations!
            </p>

            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <button className="flex items-center gap-2 rounded-xl border border-[#F0B100] bg-yellow-400 px-6 py-3 text-lg font-semibold text-black transition-colors duration-200 hover:bg-yellow-500">
                Start for free
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button className="rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-3 text-lg font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]">
                Watch a demo
              </button>
            </div>
          </div>

          {/* Right Side - Report Preview */}
          <div className="relative z-10 ml-8">
            <div className="w-80 rotate-3 transform rounded-lg bg-white p-6 shadow-2xl transition-transform duration-300 hover:rotate-0">
              {/* Report Header */}
              <div className="mb-4">
                <h3 className="mb-1 text-sm font-bold text-blue-600">
                  THE FORRESTER WAVE™
                </h3>
                <p className="text-xs text-gray-700">
                  Conversation Intelligence Solutions For Contact Centers
                </p>
                <p className="text-xs text-gray-500">Q2 2025</p>
              </div>

              {/* Forrester Wave Chart */}
              <div className="relative h-64 rounded-lg bg-gradient-to-br from-blue-100 to-blue-300 p-4">
                {/* Chart axes labels */}
                <div className="absolute top-1/2 left-2 origin-center -rotate-90 transform text-xs text-gray-600">
                  Strength of offering
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform text-xs text-gray-600">
                  Strength of strategy
                </div>

                {/* Customer feedback indicators */}
                <div className="absolute top-4 right-4 flex items-center gap-2 text-xs">
                  <span className="text-gray-600">Customer feedback*:</span>
                  <div className="flex gap-1">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-300"></div>
                  </div>
                </div>

                {/* Quadrant labels */}
                <div className="absolute top-8 left-8 text-xs font-semibold text-gray-700">
                  Strong
                  <br />
                  Performers
                </div>
                <div className="absolute top-8 right-8 text-xs font-semibold text-gray-700">
                  Leaders
                </div>
                <div className="absolute bottom-8 left-8 text-xs font-semibold text-gray-700">
                  Contenders
                </div>
                <div className="absolute right-8 bottom-8 text-xs font-semibold text-gray-700">
                  Challengers
                </div>

                {/* Vendor dots */}
                <div className="absolute top-16 left-16 h-2 w-2 rounded-full border-2 border-blue-600 bg-white"></div>
                <div className="absolute top-20 right-20 h-2 w-2 rounded-full bg-blue-600"></div>
                <div className="absolute bottom-20 left-20 h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="absolute right-16 bottom-16 h-2 w-2 rounded-full bg-blue-400"></div>
                <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-700"></div>

                {/* Invoca highlighted dot */}
                <div className="absolute top-12 left-1/3 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-lg"></div>
                <div className="absolute top-8 left-1/3 text-xs font-bold text-gray-700">
                  Invoca
                </div>

                {/* Other vendor dots */}
                <div className="absolute top-24 right-1/3 h-2 w-2 rounded-full bg-gray-500"></div>
                <div className="absolute bottom-24 left-1/2 h-2 w-2 rounded-full bg-gray-400"></div>
                <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-gray-600"></div>
              </div>

              {/* Footer note */}
              <div className="mt-4 text-xs leading-tight text-gray-500">
                <p>
                  A logo indicates above-average customer feedback. A double
                  logo indicates that the vendor is a Customer Favorite.
                </p>
                <p className="mt-2">
                  © Forrester Research, Inc. Unauthorized reproduction citation
                  or distribution prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
