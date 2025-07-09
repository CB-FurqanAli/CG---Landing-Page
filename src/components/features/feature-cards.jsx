export default function FeatureCards({ icon, description, title }) {
  return (
    <div className="mt-20">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2">
          <img
            src={icon}
            alt=""
            loading="lazy"
            className="feature-card-icon h-10 w-10"
          />
          <h3 className="w-full rounded-tl-lg rounded-tr-lg bg-[#F2F5E4] px-4 py-4 text-lg font-semibold text-gray-900 md:text-xl">
            {title}
          </h3>
        </div>

        <div className="flex h-full flex-col justify-between rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] p-5">
          <p className="text-md font-medium text-gray-900">{description}</p>
          <a
            href="#"
            className="text-md mt-6 inline-flex w-fit items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  )
}
