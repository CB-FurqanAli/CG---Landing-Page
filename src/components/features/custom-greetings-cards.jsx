export default function CustomGreetingsCards({ description, title, image }) {
  return (
    <div className="flex h-full overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      {/* Image Left */}
      <div className="w-40 flex-shrink-0 sm:w-60">
        <img
          src={image}
          alt={title ? `${title}` : 'Card image'}
          className="h-full w-full rounded-2xl object-cover p-2"
        />
      </div>

      {/* Content Right */}
      <div className="flex flex-1 flex-col items-center justify-center px-12 py-8 text-center">
        <div>
          <h3 className="text-md pb-3 leading-snug font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
