export const TrackMoreNumbers = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-100 p-4 sm:p-8">
        <div className="w-full max-w-7xl">
          {/* Main Banner Container */}
          <div className="relative flex flex-col items-center justify-between rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-6 sm:flex-row sm:bg-linear-145 sm:p-12">
            {/* Left Content */}
            <div className="z-10 max-w-2xl text-center sm:text-left">
              <h1 className="mb-6 text-2xl leading-snug font-bold sm:text-4xl sm:leading-tight">
                Track 6x More Numbers—Stay Within Budget
              </h1>
              <p className="mb-8 text-base font-medium sm:text-lg">
                <strong>CallGauge AI</strong> redefines call tracking by
                offering industry-low pricing that lets you scale without
                limits. Monitor more campaigns, support more clients, and cover
                more websites—without stretching your budget.
                <br />
                Experience call tracking freedom with no hidden fees, no caps,
                and just <strong>$0.50 per number</strong>.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-x-6 gap-y-4 sm:mt-12 sm:flex-row sm:justify-start">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-[#F0B100] bg-yellow-400 px-6 py-3 text-base font-semibold text-black transition-colors duration-200 hover:bg-yellow-500 sm:text-lg">
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
                <button className="rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-3 text-base font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD] sm:text-lg">
                  Watch a demo
                </button>
              </div>
            </div>

            {/* Right Side - Report Preview */}
            <div className="relative z-10 mt-10 sm:mt-0 sm:ml-8">
              <div className="w-72 rotate-0 transform rounded-lg bg-white p-4 shadow-2xl transition-transform duration-300 hover:rotate-0 sm:w-80 sm:rotate-3 sm:p-6">
                {/* Report Header */}
                <div className="mb-4">
                  <h3 className="mb-1 text-xs font-bold text-blue-600 sm:text-sm">
                    THE FORRESTER WAVE™
                  </h3>
                  <p className="text-[10px] text-gray-700 sm:text-xs">
                    Conversation Intelligence Solutions For Contact Centers
                  </p>
                  <p className="text-[10px] text-gray-500 sm:text-xs">
                    Q2 2025
                  </p>
                </div>

                {/* Forrester Wave Chart */}
                <div className="relative h-56 rounded-lg bg-gradient-to-br from-blue-100 to-blue-300 p-4 sm:h-64">
                  {/* Chart axes labels */}
                  <div className="absolute top-1/2 left-1 origin-center -rotate-90 transform text-[10px] text-gray-600 sm:text-xs">
                    Strength of offering
                  </div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform text-[10px] text-gray-600 sm:text-xs">
                    Strength of strategy
                  </div>

                  {/* Customer feedback indicators */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 text-[10px] sm:text-xs">
                    <span className="text-gray-600">Customer feedback*:</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-blue-500 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-blue-400 sm:h-3 sm:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-blue-300 sm:h-3 sm:w-3"></div>
                    </div>
                  </div>

                  {/* Quadrant labels */}
                  <div className="absolute top-6 left-6 text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Strong
                    <br />
                    Performers
                  </div>
                  <div className="absolute top-6 right-6 text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Leaders
                  </div>
                  <div className="absolute bottom-6 left-6 text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Contenders
                  </div>
                  <div className="absolute right-6 bottom-6 text-[10px] font-semibold text-gray-700 sm:text-xs">
                    Challengers
                  </div>

                  {/* Vendor dots */}
                  <div className="absolute top-14 left-14 h-1.5 w-1.5 rounded-full border-2 border-blue-600 bg-white sm:h-2 sm:w-2"></div>
                  <div className="absolute top-20 right-20 h-1.5 w-1.5 rounded-full bg-blue-600 sm:h-2 sm:w-2"></div>
                  <div className="absolute bottom-20 left-20 h-1.5 w-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2"></div>
                  <div className="absolute right-14 bottom-14 h-1.5 w-1.5 rounded-full bg-blue-400 sm:h-2 sm:w-2"></div>
                  <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-700 sm:h-2 sm:w-2"></div>

                  {/* Invoca highlighted dot */}
                  <div className="absolute top-12 left-1/3 h-2 w-2 rounded-full border-2 border-white bg-emerald-500 shadow-lg sm:h-3 sm:w-3"></div>
                  <div className="absolute top-8 left-1/3 text-[10px] font-bold text-gray-700 sm:text-xs">
                    Invoca
                  </div>

                  {/* Other vendor dots */}
                  <div className="absolute top-24 right-1/3 h-1.5 w-1.5 rounded-full bg-gray-500 sm:h-2 sm:w-2"></div>
                  <div className="absolute bottom-24 left-1/2 h-1.5 w-1.5 rounded-full bg-gray-400 sm:h-2 sm:w-2"></div>
                  <div className="absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-gray-600 sm:h-2 sm:w-2"></div>
                </div>

                {/* Footer note */}
                <div className="mt-3 text-[10px] leading-tight text-gray-500 sm:mt-4 sm:text-xs">
                  <p>
                    A logo indicates above-average customer feedback. A double
                    logo indicates that the vendor is a Customer Favorite.
                  </p>
                  <p className="mt-2">
                    © Forrester Research, Inc. Unauthorized reproduction
                    citation or distribution prohibited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
