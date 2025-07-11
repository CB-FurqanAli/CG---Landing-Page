const blogPosts = [
  {
    title: 'Reporting & Analytics ',
    description:
      'Instantly get the important details of your calls, right from your dashboard. ',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Press 1 to connect ',
    description:
      'Get rid of robotic spam calls by asking the customer to press 1 in order to connect call. ',
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

export default function BlogAsd() {
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
