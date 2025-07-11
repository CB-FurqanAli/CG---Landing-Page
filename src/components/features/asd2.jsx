const blogPosts = [
  {
    title: 'Voicemails notifications  ',
    description:
      'Instantly notify anyone with voicemail recordings embedded in it.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Missed call notification',
    description:
      'Whenever a call is missed, instantly send notifications so, you can follow up right away.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'SMS forwarding ',
    description: 'Inbound messages can be forwarded to any number.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
]

export default function BlogAsd2() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="flex flex-grow flex-col px-2">
              {/* Title */}
              <h3 className="text-md mb-2 leading-snug font-semibold text-gray-900">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mb-6 line-clamp-3 text-sm text-gray-600">
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
