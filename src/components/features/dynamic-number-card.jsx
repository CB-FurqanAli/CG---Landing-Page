import { Link } from '@/components/link'

export default function DynamicNumberCard() {
  return (
    <div className="bg-white">
      <div></div>

      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative overflow-hidden rounded-3xl p-4">
            {/* Dashboard Box */}
            <div>
              <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient
                    id="blueGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="greenGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="purpleGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient
                    id="orangeGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="1" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="3"
                      dy="3"
                      stdDeviation="4"
                      floodOpacity="0.2"
                    />
                  </filter>
                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <marker
                    id="arrowhead"
                    markerWidth="12"
                    markerHeight="8"
                    refX="11"
                    refY="4"
                    orient="auto"
                  >
                    <polygon points="0 0, 12 4, 0 8" fill="#64748B" />
                  </marker>
                </defs>

                {/*Background with subtle pattern -->*/}
                <rect width="800" height="600" fill="#F8FAFC" />
                <pattern
                  id="dots"
                  patternUnits="userSpaceOnUse"
                  width="20"
                  height="20"
                >
                  <circle cx="10" cy="10" r="1" fill="#E2E8F0" opacity="0.3" />
                </pattern>
                <rect width="800" height="600" fill="url(#dots)" />

                {/*Title Section -->*/}

                {/*Traffic Sources Section -->*/}
                <g id="traffic-sources">
                  {/*Google Ads -->*/}
                  <rect
                    x="50"
                    y="130"
                    width="140"
                    height="90"
                    rx="14"
                    fill="url(#blueGradient)"
                    filter="url(#shadow)"
                  />

                  <text
                    x="125"
                    y="150"
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="16"
                  >
                    Google Ads
                  </text>
                  <text
                    x="125"
                    y="168"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    opacity="0.9"
                  >
                    PPC Campaign
                  </text>
                  <rect
                    x="65"
                    y="180"
                    width="110"
                    height="25"
                    rx="12"
                    fill="white"
                    opacity="0.2"
                  />
                  <text
                    x="120"
                    y="197"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    📞 555-0123
                  </text>

                  {/*Facebook Ads -->*/}
                  <rect
                    x="50"
                    y="240"
                    width="140"
                    height="90"
                    rx="14"
                    fill="url(#greenGradient)"
                    filter="url(#shadow)"
                  />
                  <circle cx="75" cy="265" r="8" fill="white" opacity="0.9" />
                  <text
                    x="75"
                    y="270"
                    textAnchor="middle"
                    fill="#059669"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    f
                  </text>
                  <text
                    x="125"
                    y="260"
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="14"
                  >
                    Facebook Ads
                  </text>
                  <text
                    x="125"
                    y="277"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    opacity="0.9"
                  >
                    Social Media
                  </text>
                  <rect
                    x="65"
                    y="290"
                    width="110"
                    height="25"
                    rx="12"
                    fill="white"
                    opacity="0.2"
                  />
                  <text
                    x="120"
                    y="307"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    📞 555-0456
                  </text>

                  {/*Organic Search -->*/}
                  <rect
                    x="50"
                    y="350"
                    width="140"
                    height="90"
                    rx="14"
                    fill="url(#purpleGradient)"
                    filter="url(#shadow)"
                  />
                  <circle cx="75" cy="375" r="8" fill="white" opacity="0.9" />
                  <text
                    x="75"
                    y="380"
                    textAnchor="middle"
                    fill="#7C3AED"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    ⚡
                  </text>
                  <text
                    x="125"
                    y="370"
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="14"
                  >
                    Organic Search
                  </text>
                  <text
                    x="125"
                    y="387"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    opacity="0.9"
                  >
                    SEO Traffic
                  </text>
                  <rect
                    x="65"
                    y="400"
                    width="110"
                    height="25"
                    rx="12"
                    fill="white"
                    opacity="0.2"
                  />
                  <text
                    x="120"
                    y="417"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    📞 555-0789
                  </text>

                  {/*Email Marketing -->*/}
                  <rect
                    x="50"
                    y="460"
                    width="140"
                    height="90"
                    rx="14"
                    fill="url(#orangeGradient)"
                    filter="url(#shadow)"
                  />
                  <circle cx="75" cy="485" r="8" fill="white" opacity="0.9" />
                  <text
                    x="75"
                    y="490"
                    textAnchor="middle"
                    fill="#D97706"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    ✉
                  </text>
                  <text
                    x="125"
                    y="480"
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="14"
                  >
                    Email Marketing
                  </text>
                  <text
                    x="125"
                    y="497"
                    textAnchor="middle"
                    fill="white"
                    fontSize="11"
                    opacity="0.9"
                  >
                    Newsletter
                  </text>
                  <rect
                    x="65"
                    y="510"
                    width="110"
                    height="25"
                    rx="12"
                    fill="white"
                    opacity="0.2"
                  />
                  <text
                    x="120"
                    y="527"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                  >
                    📞 555-0999
                  </text>
                </g>

                {/*Connecting Arrows -->*/}
                <path
                  d="M 200 175 Q 280 175 320 240"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="0.8"
                />
                <path
                  d="M 200 285 Q 260 285 320 260"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="0.8"
                />
                <path
                  d="M 200 395 Q 260 395 320 280"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="0.8"
                />
                <path
                  d="M 200 505 Q 280 505 320 300"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  opacity="0.8"
                />

                {/*Website/Landing Page -->*/}
                <rect
                  x="340"
                  y="200"
                  width="180"
                  height="140"
                  rx="16"
                  fill="white"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />

                {/*Browser mockup -->*/}
                <rect
                  x="350"
                  y="210"
                  width="160"
                  height="25"
                  rx="8"
                  fill="#F1F5F9"
                />
                <circle cx="360" cy="222" r="3" fill="#EF4444" />
                <circle cx="375" cy="222" r="3" fill="#F59E0B" />
                <circle cx="390" cy="222" r="3" fill="#10B981" />
                <rect
                  x="410"
                  y="217"
                  width="80"
                  height="10"
                  rx="5"
                  fill="#E2E8F0"
                />

                <text
                  x="430"
                  y="255"
                  textAnchor="middle"
                  fill="#1E293B"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Your Website
                </text>

                {/*Dynamic Phone Display -->*/}
                <rect
                  x="360"
                  y="270"
                  width="140"
                  height="40"
                  rx="20"
                  fill="url(#blueGradient)"
                  filter="url(#glow)"
                />
                <text
                  x="430"
                  y="295"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                >
                  📞 555-XXXX
                </text>

                <text
                  x="430"
                  y="324"
                  textAnchor="middle"
                  fill="#64748B"
                  fontSize="8"
                >
                  Number changes based on visitor source
                </text>

                {/*Arrow to DNI System -->*/}
                <path
                  d="M 530 270 L 580 270"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />

                {/*DNI Tracking System -->*/}
                <rect
                  x="600"
                  y="180"
                  width="150"
                  height="180"
                  rx="16"
                  fill="#1F2937"
                  filter="url(#shadow)"
                />
                <text
                  x="675"
                  y="205"
                  textAnchor="middle"
                  fill="white"
                  fontWeight="bold"
                  fontSize="16"
                >
                  DNI System
                </text>

                {/*System Features -->*/}
                <rect
                  x="615"
                  y="220"
                  width="120"
                  height="120"
                  rx="8"
                  fill="#374151"
                />

                <text
                  x="625"
                  y="240"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ Source Tracking
                </text>
                <text
                  x="625"
                  y="255"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ Call Recording
                </text>
                <text
                  x="625"
                  y="270"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ Lead Scoring
                </text>
                <text
                  x="625"
                  y="285"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ Real-time Analytics
                </text>
                <text
                  x="625"
                  y="300"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ ROI Attribution
                </text>
                <text
                  x="625"
                  y="315"
                  fill="#10B981"
                  fontSize="11"
                  fontWeight="bold"
                >
                  ✓ Call Routing
                </text>

                {/*Server icon -->*/}
                <rect
                  x="655"
                  y="325"
                  width="40"
                  height="8"
                  rx="2"
                  fill="#6B7280"
                />
                <rect
                  x="655"
                  y="335"
                  width="40"
                  height="3"
                  rx="1"
                  fill="#9CA3AF"
                />

                {/*Analytics Dashboard -->*/}
                <rect
                  x="300"
                  y="400"
                  width="400"
                  height="160"
                  rx="16"
                  fill="white"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                <text
                  x="500"
                  y="430"
                  textAnchor="middle"
                  fill="#1E293B"
                  fontWeight="bold"
                  fontSize="18"
                >
                  Real-time Analytics Dashboard
                </text>

                {/*Dashboard Charts -->*/}
                <g id="charts">
                  {/*Call Volume Chart -->*/}
                  <rect
                    x="320"
                    y="450"
                    width="100"
                    height="80"
                    rx="8"
                    fill="#F8FAFC"
                    stroke="#E2E8F0"
                  />
                  <text
                    x="370"
                    y="470"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Call Volume
                  </text>
                  <rect
                    x="330"
                    y="480"
                    width="80"
                    height="8"
                    rx="4"
                    fill="#3B82F6"
                  />
                  <rect
                    x="330"
                    y="492"
                    width="60"
                    height="8"
                    rx="4"
                    fill="#10B981"
                  />
                  <rect
                    x="330"
                    y="504"
                    width="45"
                    height="8"
                    rx="4"
                    fill="#8B5CF6"
                  />
                  <rect
                    x="330"
                    y="516"
                    width="30"
                    height="8"
                    rx="4"
                    fill="#F59E0B"
                  />

                  {/*ROI Metrics -->*/}
                  <rect
                    x="440"
                    y="450"
                    width="100"
                    height="80"
                    rx="8"
                    fill="#F8FAFC"
                    stroke="#E2E8F0"
                  />
                  <text
                    x="490"
                    y="470"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ROI by Source
                  </text>
                  <circle
                    cx="470"
                    cy="490"
                    r="12"
                    fill="#3B82F6"
                    opacity="0.8"
                  />
                  <circle
                    cx="490"
                    cy="485"
                    r="8"
                    fill="#10B981"
                    opacity="0.8"
                  />
                  <circle
                    cx="510"
                    cy="495"
                    r="6"
                    fill="#8B5CF6"
                    opacity="0.8"
                  />
                  <text
                    x="490"
                    y="515"
                    textAnchor="middle"
                    fill="#059669"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    ↑ 23.5%
                  </text>

                  {/*Conversion Stats -->*/}
                  <rect
                    x="560"
                    y="450"
                    width="100"
                    height="80"
                    rx="8"
                    fill="#F8FAFC"
                    stroke="#E2E8F0"
                  />
                  <text
                    x="610"
                    y="470"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Conversions
                  </text>
                  <text
                    x="610"
                    y="490"
                    textAnchor="middle"
                    fill="#059669"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    156
                  </text>
                  <text
                    x="610"
                    y="505"
                    textAnchor="middle"
                    fill="#64748B"
                    fontSize="10"
                  >
                    Total Calls
                  </text>
                  <text
                    x="610"
                    y="520"
                    textAnchor="middle"
                    fill="#10B981"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ↑ 12% Growth
                  </text>
                </g>

                {/*Key Benefits -->*/}
                <text
                  x="500"
                  y="548"
                  textAnchor="middle"
                  fill="#64748B"
                  fontSize="8"
                  fontWeight="bold"
                >
                  Key Benefits: Accurate Attribution • Optimize Marketing Spend
                  • Seamless Integration
                </text>

                {/*Connecting arrows to dashboard -->*/}
                <path
                  d="M 430 350 L 430 390"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <path
                  d="M 675 370 Q 675 385 550 390"
                  stroke="#64748B"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                🔁 Dynamic Number Insertion (DNI)
              </h2>
              <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                Track the online source of every call with dynamic, source-based
                number swapping.
              </p>
              <div className="text-right">
                <Link
                  href={'features/dni'}
                  className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
