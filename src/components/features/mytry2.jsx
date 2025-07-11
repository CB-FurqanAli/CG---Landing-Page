const blogPosts = [
  {
    title: 'Email call details ',
    date: 'May 15, 2025',
    description:
      'Whenever a call is completed, send its details with recording link via email to one or multiple recipients.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Auto-reports  ',
    date: 'May 8, 2025',
    description:
      'Send reports to your team or clients via email automatically.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function BlogCards2() {
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
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content Right */}
          <div className="flex flex-1 flex-col justify-between px-12 py-8">
            {/* Top Content */}
            <div>
              <h3 className="text-md pb-3 leading-snug font-semibold">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>

            {/* Button aligned at bottom */}
            <div className="text-right">
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
