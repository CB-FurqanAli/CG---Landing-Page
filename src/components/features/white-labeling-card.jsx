import { Link } from '@/components/link'

export default function WhiteLabelingCard() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] p-12 sm:bg-linear-145 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                🌐 White Labeling
              </h2>
              <p className="max-w-xl text-base leading-relaxed sm:text-lg">
                Customize the platform with your branding and domain for a
                seamless client experience.
              </p>
              <Link
                href={'features/white-labeling'}
                className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                View details
              </Link>
            </div>
          </div>

          {/* Representative Image */}
          <div className="">
            <img
              src="/feature-page/white-labeling.jfif"
              alt="Customer service representative"
              className="max-h-96 min-w-full rounded-xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/*<div className="relative">*/}
        {/*  /!* Dashboard Box *!/*/}
        {/*  <div className="relative overflow-hidden rounded-3xl bg-[#F0B100] px-4 py-32 sm:px-10 sm:py-44">*/}
        {/*    /!* Representative Image *!/*/}
        {/*    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">*/}
        {/*      <img*/}
        {/*          src="/feature-page/zapier-integration.jfif"*/}
        {/*          alt="Customer service representative"*/}
        {/*          className="h-64 w-64 rounded-xl object-cover shadow-xl"*/}
        {/*      />*/}
        {/*    </div>*/}

        {/*    /!* Top Left Card *!/*/}
        {/*    <div className="absolute top-6 left-6 w-40 rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">*/}
        {/*      <h3 className="text-md mb-2 font-medium">#</h3>*/}
        {/*    </div>*/}

        {/*    /!* Top Right Card *!/*/}
        {/*    <div className="absolute top-6 right-6 w-40 rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">*/}
        {/*      <h3 className="text-md mb-2 font-medium">#</h3>*/}
        {/*    </div>*/}

        {/*    /!* Bottom Center Card *!/*/}
        {/*    <div*/}
        {/*        className="absolute bottom-0.5 left-1/2 w-40 -translate-x-1/2 transform rounded-lg bg-[#F2F5E4] p-4 shadow-md sm:w-44">*/}
        {/*      <h3 className="text-md mb-2 font-medium">#</h3>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
