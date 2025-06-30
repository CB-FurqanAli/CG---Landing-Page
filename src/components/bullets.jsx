'use client'

export function Bullets({
  className,
  title,
  description,
  bullets,
  bullets1,
  bullets2,
  bullets3,
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-lg shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15 ${className}`}
    >
      <div className="relative p-10">
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-dark:text-gray-400">
          {description}
        </p>
        <ul
          role="list"
          className="mt-2 max-w-[600px] list-disc text-sm/6 text-gray-600 group-data-dark:text-gray-400"
        >
          <li>{bullets}</li>
        </ul>
        <ul
          role="list"
          className="mt-2 max-w-[600px] list-disc text-sm/6 text-gray-600 group-data-dark:text-gray-400"
        >
          <li>{bullets1}</li>
        </ul>
        <ul
          role="list"
          className="mt-2 max-w-[600px] list-disc text-sm/6 text-gray-600 group-data-dark:text-gray-400"
        >
          <li>{bullets2}</li>
        </ul>
        <ul
          role="list"
          className="mt-2 max-w-[600px] list-disc text-sm/6 text-gray-600 group-data-dark:text-gray-400"
        >
          <li>{bullets3}</li>
        </ul>
      </div>
    </div>
  )
}
