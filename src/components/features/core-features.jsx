import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { coreFeatures } from '@/config/data'
import Image from 'next/image'

export default function CoreFeatures() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Core Features</Subheading>
        <Heading as="h2" className="mt-2 text-center text-3xl md:text-4xl">
          Everything You Need to Master Call Tracking
        </Heading>
      </Container>
      {coreFeatures.map((feature, index) => {
        return (
          <div className="py-16" key={index}>
            <Container>
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:flex-row-reverse`}
              >
                <div>
                  <div className="relative flex items-start gap-x-2">
                    <h2 className="text-2xl font-bold">{feature.title}</h2>
                  </div>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {feature.description}
                  </p>

                  <Link
                    href={'#'}
                    className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
                  >
                    View details →
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={feature.image}
                    width={750}
                    height={750}
                    alt={feature.title}
                    className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </Container>
          </div>
        )
      })}
    </div>
  )
}
