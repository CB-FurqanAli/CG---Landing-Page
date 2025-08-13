export default function FeatureCards1({ icon, description, title, link }) {
  return (
    <div className="mt-20">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="feature-card-icon h-10 w-10"
          />
          <h3 className="w-full rounded-tl-lg rounded-tr-lg bg-[#F2F5E4] px-4 py-4 text-lg font-semibold text-gray-900 md:text-xl">
            {title}
          </h3>
        </div>

        <div className="flex h-full flex-col justify-between rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] p-5">
          <p className="text-md font-medium text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  )
}
