import { integrations } from '@/config/data'

export default function AllFeatures() {
  return (
    <section className="bg-gray-100 px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-black sm:text-4xl">
          We offer all the features you need in a call tracking software at
          lowest possible prices.
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {integrations.map((app, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 rounded-2xl bg-gradient-to-br from-[#1B1A33] to-[#2C2A42] px-5 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:bg-gradient-to-br hover:from-[#3E3D4D] hover:to-[#373646]"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="h-12 w-12 rounded"
              />
              <div className="text-left">
                <p className="text-sm font-medium">{app.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 rounded-md border border-[#F15E16] bg-[#F15E16] px-6 py-3 text-lg font-medium text-black text-white transition-colors duration-200 hover:bg-[#d44f10]">
            View interactive Demo
          </button>
          <button className="text-md flex items-center gap-1 font-medium text-red-500 italic">
            No credit card needed.
          </button>
        </div>
      </div>
    </section>
  )
}
