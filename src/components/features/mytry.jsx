const blogPosts = [
  {
    title: 'Turn Callers Into Customers: 5 Tips for Converting Callers',
    date: 'May 15, 2025',
    description:
      'We live in a world obsessed with digital clicks, ad clicks, link clicks, and email opens. But there’s one conversion channel that still gets overlooked…',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D', // Replace with local path or CDN
  },
  {
    title: '10 Best Real Estate Cold Calling Scripts',
    date: 'May 8, 2025',
    description:
      'Let’s be real for a second, cold calling can feel intimidating. There’s that little voice in your head asking, “What if they hang up? What if…',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function BlogCards() {
  return (
    <div className="mx-auto my-48 grid max-w-7xl gap-10 px-4 sm:grid-cols-1 lg:grid-cols-2">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="flex h-full overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
        >
          {/* Image Left */}
          <div className="w-40 flex-shrink-0 sm:w-60">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content Right */}
          <div className="flex h-68 flex-col justify-between px-12 py-8">
            {/* Title */}
            <h3 className="text-md leading-snug font-semibold text-gray-900">
              {post.title}
            </h3>

            {/* Description */}
            <p className="line-clamp-3 text-sm text-gray-600">
              {post.description}
            </p>

            {/* Icon */}
            <div className="mt-4 self-end">
              <a
                href="#"
                className="text-md mt-6 inline-flex w-fit items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
              >
                View details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
