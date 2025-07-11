const blogPosts = [
  {
    title: 'AI call summaries ',
    date: 'May 15, 2025',
    description:
      'Transcribe your calls and get AI based one sentence summaries + bullet points for calls.',
    image:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Custom greetings ',
    date: 'May 8, 2025',
    description:
      'Customize greetings by using text-to-speech option or upload an mp3 audio. ',
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
          </div>
        </div>
      ))}
    </div>
  )
}
