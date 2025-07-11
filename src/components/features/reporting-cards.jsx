export default function ReportingCards({ image, title, description }) {
  return (
    <div className="flex h-full max-w-xs flex-col justify-between rounded-3xl bg-white p-4 shadow-xl transition hover:shadow-2xl">
      {/* Image */}
      <img src={image} alt="" className="mx-auto mb-4 rounded-xl" />

      {/* Content */}
      <div className="flex flex-grow flex-col px-2">
        {/* Title */}
        <h3 className="text-md mb-2 leading-snug font-semibold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
