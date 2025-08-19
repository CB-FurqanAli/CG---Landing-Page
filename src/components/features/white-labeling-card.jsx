import { Link } from '@/components/link'

export default function WhiteLabelingCard() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 rounded-3xl bg-gradient-to-r from-[#fff1be] via-[#ee87cb] to-[#b060ff] p-12 shadow-lg sm:bg-gradient-to-tr lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
              🌐 White Labeling
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-800 sm:text-lg">
              Customize the platform with your branding and domain for a
              seamless client experience.
            </p>
            <Link
              href={'/features/white-labeling'}
              className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold text-gray-900 shadow-md transition-transform duration-200 hover:scale-[1.05] hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
            >
              View details
            </Link>
          </div>

          {/* Representative Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/feature-page/white-labeling.png"
              alt="White labeling feature preview"
              className="max-h-96 w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
