const blogPosts = [
  {
    title: 'Turn Callers Into Customers: 5 Tips for Converting Callers',
    date: 'May 15, 2025',
    description:
      'We live in a world obsessed with digital clicks, ad clicks, link clicks, and email opens. But there’s one conversion channel that still gets overlooked…',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: '10 Best Real Estate Cold Calling Scripts',
    date: 'May 8, 2025',
    description:
      'Let’s be real for a second, cold calling can feel intimidating. There’s that little voice in your head asking, “What if they hang up? What if…',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title:
      'What is Enterprise Sales? A Complete Guide to Enterprise Sales Mastery',
    date: 'May 1, 2025',
    description:
      'Enterprise sales is a complex, long-cycle process that involves selling high-value solutions to large organizations. In this guide, we break it down…',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function BlogAsd() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="mx-auto mb-48 grid max-w-7xl grid-cols-1 gap-20 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex h-full max-w-xs flex-col justify-between rounded-3xl bg-white p-4 shadow-xl transition hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={post.image}
              alt={post.title}
              className="mx-auto mb-4 rounded-xl"
            />

            {/* Content */}
            <div className="flex flex-grow flex-col">
              {/* Title */}
              <h3 className="text-md mb-2 leading-snug font-semibold text-gray-900">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mb-6 line-clamp-3 px-2 text-sm text-gray-600">
                {post.description}
              </p>

              {/* Button (sticks to bottom) */}
              <div className="mt-auto text-right">
                <a
                  href="#"
                  className="text-md inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
                >
                  View details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
