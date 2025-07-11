export default function CustomGreetingsCards({ description, title, image }) {
  return (
    <div className="flex h-full overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      {/* Image Left */}
      <div className="w-40 flex-shrink-0 sm:w-60">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Content Right */}
      <div className="flex flex-1 flex-col justify-between px-12 py-8">
        {/* Top Content */}
        <div>
          <h3 className="text-md pb-3 leading-snug font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
