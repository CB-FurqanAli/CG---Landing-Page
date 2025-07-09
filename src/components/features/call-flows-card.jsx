import { Link } from '@/components/link'

export default function CallFlowsCard() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                Call flows
              </h2>
              <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                Decide the steps which you want your calls to flow with.
                Greetings, call forwarding, multi-ringing, round robin & so much
                more!
              </p>
              <Link
                href={'#'}
                className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                View details
              </Link>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative">
            {/* Dashboard Box */}
            <div className="relative overflow-hidden rounded-3xl bg-[#F0B100] px-4 py-32 sm:px-10 sm:py-44">
              {/* Representative Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <img
                  src="https://images.pexels.com/photos/5453830/pexels-photo-5453830.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Customer service representative"
                  className="h-64 w-64 rounded-xl object-cover shadow-xl"
                />
              </div>

              {/* Top Left Card */}
              <div className="absolute top-6 left-6 w-40 rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">
                <h3 className="text-md mb-2 font-medium">Greetings</h3>
              </div>

              {/* Top Right Card */}
              <div className="absolute top-6 right-6 w-40 rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">
                <h3 className="text-md mb-2 font-medium">Round robin</h3>
              </div>

              {/* Bottom Center Card */}
              <div className="absolute bottom-0.5 left-1/2 w-40 -translate-x-1/2 transform rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">
                <h3 className="text-md mb-2 font-medium">Multi ringing</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
