import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { additionalFeatures } from '@/config/data'

export default function AdditionalFeatures() {
  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center">Additional Tools</Subheading>
        <Heading as="h2" className="mt-2 text-center text-3xl md:text-4xl">
          Comprehensive Features for Every Need
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
