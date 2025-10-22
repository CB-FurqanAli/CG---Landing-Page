import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { notFound } from 'next/navigation'

// Import data from the main blog page
import Image from 'next/image'
import { allPosts, categories } from '../page'

export async function generateMetadata({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) return {}

  if (post.metaTitle && post.metaDescription) {
    return {
      title: post.metaTitle,
      description: post.metaDescription,
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug) || notFound()

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
        <Subheading className="mt-16">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Subheading>
        <Heading as="h1" className="mt-2">
          {post.title}
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
          <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
            {post.author && (
              <div className="flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt={post.author.name}
                    src={post.author.image}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
            {post.category && (
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/blog?category=${post.category}`}
                  className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                >
                  {categories.find((c) => c.slug === post.category)?.title}
                </Link>
              </div>
            )}
          </div>
          <div className="text-gray-700">
            <div className="max-w-2xl xl:mx-auto">
              {post.mainImage && (
                <Image
                  alt={post.title}
                  src={post.mainImage}
                  width={750}
                  height={750}
                  className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                />
              )}
              {post.body && (
                <div>
                  {post.body.map((block, index) => {
                    switch (block._type) {
                      case 'block':
                        switch (block.style) {
                          case 'normal':
                            return (
                              <p
                                key={index}
                                className="my-4 text-base/8"
                                dangerouslySetInnerHTML={{
                                  __html: block.children
                                    .map((child) => child.text)
                                    .join('')
                                    .replace(/\n/g, '<br />'),
                                }}
                              ></p>
                            )
                          case 'h2':
                            return (
                              <h2
                                key={index}
                                className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950"
                              >
                                {block.children
                                  .map((child) => child.text)
                                  .join('')}
                              </h2>
                            )
                          case 'h3':
                            return (
                              <h3
                                key={index}
                                className="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950"
                              >
                                {block.children
                                  .map((child) => child.text)
                                  .join('')}
                              </h3>
                            )
                          case 'blockquote':
                            return (
                              <blockquote
                                key={index}
                                className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950"
                              >
                                {block.children
                                  .map((child) => child.text)
                                  .join('')}
                              </blockquote>
                            )
                          default:
                            return null
                        }
                      case 'image':
                        return (
                          <img
                            key={index}
                            alt={block.alt || ''}
                            src={block.asset.path}
                            className="w-full rounded-2xl"
                          />
                        )
                      case 'list':
                        const ListTag = block.style === 'bullet' ? 'ul' : 'ol'
                        return (
                          <ListTag
                            key={index}
                            className={`pl-4 text-base/8 marker:text-gray-400 ${
                              block.style === 'bullet'
                                ? 'list-disc'
                                : 'list-decimal'
                            }`}
                          >
                            {block.items.map((item, i) => (
                              <li key={i} className="my-2 pl-2">
                                {item.children
                                  .map((child) => child.text)
                                  .join('')}
                              </li>
                            ))}
                          </ListTag>
                        )
                      default:
                        return null
                    }
                  })}
                </div>
              )}

              <div className="mt-10">
                <Button variant="outline" href="/blog">
                  <ChevronLeftIcon className="size-4" />
                  Back to blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to Stop Wasting Ad Spend?
          </h2>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-100 lg:text-xl">
            Join marketing teams who are finally seeing which campaigns actually
            drive revenue.
          </p>

          {/* CTAs */}
          <div className="my-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#" className="px-8 py-3 text-lg font-semibold">
              Schedule Your Demo
            </Button>
            <Button
              variant="secondary"
              href="/login"
              className="px-8 py-3 text-lg font-semibold text-white"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Stats */}
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: 'up to 98%', label: 'Attribution Accuracy' },
              { value: '<5 min', label: 'Average Setup Time' },
              { value: '5+', label: 'Native Integrations' },
              { value: '24/7', label: 'Customer Support' },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4">
                <div className="mb-1 text-2xl font-bold text-white">
                  {stat.value === '<5 min' ? (
                    <span>&lt;5 min</span>
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/20 pt-8 text-sm text-blue-100">
            {[
              'No credit card required',
              'Cancel anytime',
              'Setup in 5 minutes',
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
