import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Keyboard } from '@/components/keyboard'
import { LogoCluster } from '@/components/logo-cluster'
import { Map } from '@/components/map'
import { WorldMap } from '@/components/ui/world-map'

const cards = [
  {
    id: 1,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 2,
    eyebrow: 'Setup',
    title: 'Track 6x more numbers',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <LogoCluster />,
  },
  {
    id: 3,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Map />,
  },
  {
    id: 4,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 5,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 6,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 7,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 8,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />,
  },
  {
    id: 9,
    eyebrow: 'Setup',
    title: 'Easy call routing & recording',
    description:
      'Set up hundreds of numbers in minutes with call recording and routing to streamline operations.',
    image: <WorldMap />,
  },
]
export default function AdditionalCards() {
  return (
    <Container>
      <div className="grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <BentoCard
            key={card.id}
            title={card.title}
            description={card.description}
            graphic={card.image}
            className="p-4 lg:rounded-bl-4xl"
          />
        ))}
      </div>
    </Container>
  )
}
