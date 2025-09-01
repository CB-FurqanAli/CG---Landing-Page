import { Bot, CheckCircle, PhoneCall, Users } from 'lucide-react'

const Card = ({ children, className = '' }) => (
  <div className={`border border-gray-200 bg-white ${className}`}>
    {children}
  </div>
)

const CardContent = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
)

function CallTracking() {
  const features = [
    {
      icon: PhoneCall,
      iconColor: 'text-blue-600',
      title: 'AI Attribution & Call Intelligence',
      items: [
        'Instantly identify where your calls come from',
        'Use Dynamic Number Insertion (DNI) to connect campaigns to calls',
        'AI-powered call transcription and summaries',
        'Know which leads convert — and why',
      ],
    },
    {
      icon: Bot,
      iconColor: 'text-emerald-600',
      title: 'Streamlined Call Operations',
      items: [
        'Call Whisper, Call Recording, Voicemail, and SMS in one place',
        'Automate call routing and follow-ups',
        'Manage missed calls with instant alerts',
        'Seamless AI transcription for every call',
      ],
    },
    {
      icon: Users,
      iconColor: 'text-purple-600',
      title: 'Effortless Client Management',
      items: [
        'Give clients real-time dashboards with white-label access',
        'Automate client billing with our Pay-Per-Call model',
        'Handle 10x more accounts without extra workload',
        'Build trust with branded portals and reporting',
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 px-4 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center lg:mb-20">
          <h2 className="text-3xl leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            All-in-One AI
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:ml-3 sm:inline">
              Call Tracking Suite
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Smarter, faster, and more affordable than anything else. Transform
            your call tracking with AI-powered insights and automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl border-0 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                <CardContent className="relative p-6 sm:p-8">
                  {/* Icon with background */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
                    <IconComponent
                      className={`h-7 w-7 ${feature.iconColor} transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl leading-tight font-bold text-gray-900 sm:text-2xl">
                    {feature.title}
                  </h3>

                  {/* Feature list */}
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 leading-relaxed text-gray-600"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
            Trusted by 10,000+ businesses worldwide
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallTracking
