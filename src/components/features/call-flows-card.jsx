export default function CallFlowsCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Call Flows
              </h2>
              <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                Control how every call is handled—add greetings, forward to
                teams, use round-robin or multi-ring logic, and more.
              </p>
              <a
                href={'features/call-flows'}
                className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                View details
              </a>
            </div>
          </div>

          {/* Right Dashboard Mockup */}

          <div className="relative overflow-hidden rounded-3xl p-4">
            {/* Representative Image */}
            <div className="">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="bgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff9500" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ff6b00" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="phoneGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#4a90e2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#357abd" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="teamGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#7ed321" stopOpacity="1" />
                    <stop offset="100%" stopColor="#5cb80b" stopOpacity="1" />
                  </linearGradient>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>

                <rect
                  width="400"
                  height="300"
                  fill="url(#bgGradient)"
                  rx="20"
                />

                <g transform="translate(50, 50)">
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="url(#phoneGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 20 Q20 15 25 20 Q30 15 35 20 L32 25 Q25 30 18 25 Z"
                    fill="white"
                  />
                  <text
                    x="25"
                    y="55"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Incoming
                  </text>
                </g>

                <g
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                >
                  <path d="M100 75 Q150 75 200 75" strokeDasharray="5,5">
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-10"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>

                <g transform="translate(175, 50)">
                  <rect
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    rx="10"
                    fill="rgba(255,255,255,0.2)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="25" cy="15" r="5" fill="white" />
                  <rect
                    x="15"
                    y="25"
                    width="20"
                    height="3"
                    fill="white"
                    rx="1"
                  />
                  <rect
                    x="15"
                    y="32"
                    width="20"
                    height="3"
                    fill="white"
                    rx="1"
                  />
                  <rect
                    x="15"
                    y="39"
                    width="15"
                    height="3"
                    fill="white"
                    rx="1"
                  />
                  <text
                    x="25"
                    y="65"
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    Processing
                  </text>
                </g>

                <g transform="translate(280, 30)">
                  <circle
                    cx="15"
                    cy="15"
                    r="12"
                    fill="url(#teamGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="3" fill="white" />
                  <path
                    d="M8 18 Q12 22 16 18"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <text
                    x="15"
                    y="35"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    Team 1
                  </text>

                  <circle
                    cx="15"
                    cy="55"
                    r="12"
                    fill="url(#teamGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="52" r="3" fill="white" />
                  <path
                    d="M8 58 Q12 62 16 58"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <text
                    x="15"
                    y="75"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    Team 2
                  </text>

                  <circle
                    cx="15"
                    cy="95"
                    r="12"
                    fill="url(#teamGradient)"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="92" r="3" fill="white" />
                  <path
                    d="M8 98 Q12 102 16 98"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <text
                    x="15"
                    y="115"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    Team 3
                  </text>
                </g>

                <g
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                >
                  <path d="M230 60 Q255 45 280 45" />
                  <path d="M230 70 Q255 70 280 70" />
                  <path d="M230 80 Q255 95 280 105" />
                </g>

                <g transform="translate(80, 150)">
                  <rect
                    x="0"
                    y="0"
                    width="240"
                    height="120"
                    rx="15"
                    fill="rgba(255,255,255,0.1)"
                    stroke="white"
                    strokeWidth="2"
                  />

                  <g transform="translate(20, 20)">
                    <circle
                      cx="15"
                      cy="15"
                      r="12"
                      fill="rgba(255,255,255,0.2)"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <path d="M8 12 Q15 8 22 12 Q15 18 8 12" fill="white" />
                    <text
                      x="15"
                      y="35"
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                    >
                      Greetings
                    </text>
                  </g>

                  <g transform="translate(80, 20)">
                    <circle
                      cx="15"
                      cy="15"
                      r="12"
                      fill="rgba(255,255,255,0.2)"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <path
                      d="M15 8 A7 7 0 1 1 14.9 8"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <polygon points="22,12 20,10 20,14" fill="white" />
                    <text
                      x="15"
                      y="35"
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                    >
                      Round Robin
                    </text>
                  </g>

                  <g transform="translate(140, 20)">
                    <circle
                      cx="15"
                      cy="15"
                      r="12"
                      fill="rgba(255,255,255,0.2)"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="2"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <circle
                      cx="18"
                      cy="12"
                      r="2"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <circle
                      cx="15"
                      cy="18"
                      r="2"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <text
                      x="15"
                      y="35"
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                    >
                      Multi Ring
                    </text>
                  </g>

                  <g transform="translate(200, 20)">
                    <circle
                      cx="15"
                      cy="15"
                      r="12"
                      fill="rgba(255,255,255,0.2)"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <path
                      d="M8 15 L18 15 M15 12 L18 15 L15 18"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <text
                      x="15"
                      y="35"
                      textAnchor="middle"
                      fill="white"
                      fontSize="8"
                    >
                      Forward
                    </text>
                  </g>
                </g>

                <circle cx="0" cy="0" r="3" fill="white" opacity="0.8">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M100,75 Q150,75 200,75 Q240,60 280,45 Q300,45 320,45"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0.3;0.8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
