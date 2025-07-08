import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Keyboard } from '@/components/keyboard'
import { Map } from '@/components/map'
import { Heading } from '@/components/text'

export default function MyTry() {
  return (
    <Container>
      <Heading as="h2" className="mt-2 text-center text-3xl md:text-4xl">
        Comprehensive Features for Every Need
      </Heading>
      ~
      <div className="grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {/*1*/}
        <BentoCard
          title="Call recording"
          description="Easily record every call, replay them anytime you want to and even download mp3 files for easy sharing!"
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className=""
        />
        {/*2*/}
        <BentoCard
          title="Call whisper "
          description="Get valuable context of the caller even before the conversation begins!"
          graphic={<Map />}
          className=""
        />
        {/*3*/}
        <BentoCard
          title="Reporting & Analytics "
          description="Instantly get the important details of your calls, right from your dashboard."
          graphic={<Map />}
          className=""
        />
        {/*4*/}
        <BentoCard
          title="Press 1 to connect"
          description="Get rid of robotic spam calls by asking the customer to press 1 in order to connect call."
          graphic={<Map />}
          className=""
        />
        {/*5*/}
        <BentoCard
          title="SMS forwarding"
          description="Inbound messages can be forwarded to any number."
          graphic={<Map />}
          className=""
        />
        {/*6*/}
        <BentoCard
          title="Voicemails"
          description="Route your calls directly to voicemail or let it ring for a few times."
          graphic={<Map />}
          className=""
        />
        {/*7*/}
        <BentoCard
          title="Custom greetings"
          description="Customize greetings by using text-to-speech option or upload an mp3 audio."
          graphic={<Map />}
          className=""
        />
        {/*8*/}
        <BentoCard
          title="Port in numbers"
          description="Transfer all your current numbers to our app easily."
          graphic={<Map />}
          className=""
        />
        {/*9*/}
        <BentoCard
          title="Spam blocking "
          description="Block all the calls from spam numbers and robots."
          graphic={<Map />}
          className=""
        />
        {/*10*/}
        <BentoCard
          title="Voicemails notifications"
          description="Instantly notify anyone with voicemail recordings embedded in it."
          graphic={<Map />}
          className=""
        />
        {/*11*/}
        <BentoCard
          title="Missed call notification"
          description="Whenever a call is missed, instantly send notifications so, you can follow up right away."
          graphic={<Map />}
          className=""
        />
        {/*12*/}
        <BentoCard
          title="Auto-reports"
          description="Send reports to your team or clients via email automatically. "
          graphic={<Map />}
          className=""
        />
        {/*13*/}
        <BentoCard
          title="Email call details"
          description="Whenever a call is completed, send its details with recording link via email to one or multiple recipients."
          graphic={<Map />}
          className=""
        />
      </div>
    </Container>
  )
}
