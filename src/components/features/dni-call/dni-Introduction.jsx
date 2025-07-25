import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function DniIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*Introduction*/}
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Introduction
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              Call Gauge AI offers a powerful tool of Dynamic Number Insertion
              (DNI) to help businesses track the original source of incoming
              phone calls. By adding a simple JavaScript snippet to your
              website, you can allow Call Gauge AI to automatically swap your
              static phone number with a dynamic tracking phone number depending
              upon each visitor’s traffic source.
            </p>
            <p className="mt-4">
              This feature allows you to attribute calls accurately to specific
              marketing channels like Google Ads, organic search or social
              media. Therefore giving you deeper insights about the campaign
              performance and helping you out in making smarter marketing
              decisions.
            </p>
          </div>
        </div>
      </div>

      {/*Advantages of DNI:*/}
      <div className="mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="my-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Advantages of DNI:
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 text-white md:grid-cols-2">
            {/*1st*/}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  A
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Advanced call tracking:
                </h3>
              </div>
              <p>
                Identify accurately which marketing efforts like Google Ads,
                Social media, referral sources, and keywords are driving the
                calls to your business.
              </p>
            </div>
            {/*2nd*/}
            <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  S
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Seamless integration into website:
                </h3>
              </div>
              <p>
                The DNI script works without any glitch and difficulty with your
                existing website and analytics tools. It requires minimal setup
                and absolutely no disruption to your website’s design and
                performance.
              </p>
            </div>
            {/*3rd*/}
            <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  I
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Improved marketing insights:
                </h3>
              </div>
              <p>
                It allows you to get deeper and improved insights of which
                marketing strategies are performing with excellence. So, you can
                divert your marketing expenses towards the top performing
                strategies.
              </p>
            </div>
            {/*4th*/}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  B
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Better and personalized customer experience:
                </h3>
              </div>
              <p>
                It shows local and toll-free phone numbers based on visitor’s
                location.
              </p>
            </div>
            {/*5th*/}
            <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  I
                </div>
                <h3 className="ml-4 text-xl font-semibold">Real-time data:</h3>
              </div>
              <p>
                It allows you to monitor customer behavior and call activity as
                it happens. Therefore it makes you eligible to make fast and
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*How to locate your DNI code snippet:*/}
      <div className="mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="my-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              How to locate your DNI code snippet:
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
              Once you have created a number pool in your Call gauge Pro
              account, you have to follow these steps to locate your DNI code
              snippet.
            </p>
          </div>

          <div className="mt-16 text-center text-lg leading-relaxed text-gray-600">
            <div className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Move to the “Numbers” page from the sidebar
                </li>
                <li className="text-left">
                  Find the number pool you want to use and click on the code
                  icon in that number pool under “Action” column.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  When you click on that icon, a popup containing your unique
                  JavaScript code will appear
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  From here you can copy your code snippet.{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*Here was a video explanation.*/}
      <div>
        <div className="mt-4 text-center text-red-400">
          Here was a video explanation.
        </div>

        <div className="overflow-hidden">
          <Container className="pb-16">
            <Screenshot
              width={1116}
              height={686}
              // src="/screenshots/app.png" // Replace with actual CallGauge dashboard screenshot
              src="/screenshots/dummy2.png" // Replace with actual CallGauge dashboard screenshot
              className="mt-12 sm:max-w-[76rem]"
            />
          </Container>
        </div>
      </div>

      {/*JavaScript code snippet installation guide*/}
      <div className="mt-32">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          JavaScript code snippet installation guide
        </h2>
        <h2 className="mt-8 text-center text-xl font-semibold sm:text-2xl">
          For WordPress:
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          Follow these simple steps to enable JavaScript code snippet on your
          WordPress site.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Log into your WordPress dashboard:
            </h3>
            <p>Access your WordPress admin panel.</p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Open theme editor:</h3>
            <p>
              From the sidebar there, move to Appearance Theme File Editor (or
              Theme Editor depending upon your WordPress version)
            </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Edit the Header File:
            </h3>
            <p>
              On the right side, in the list of theme files, click header.php
              and insert your Call Gauge AI JavaScript code snippet before the
              closing (head) tag.
            </p>
          </div>
          {/*Feature 4 */}
          <div className="col-2 rounded-2xl bg-[#F0B100] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Save your changes:</h3>
            <p>
              Now it’s time to save the changes you’ve made, so click on update
              file.
            </p>
          </div>
        </div>
        <div className="mx-auto my-10 max-w-4xl rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-sm text-yellow-800">
              <strong className="block font-semibold">Note:</strong>
              While using a{' '}
              <span className="font-medium text-gray-900">child theme</span>
              —which is recommended for theme updates, make sure to update{' '}
              <code className="rounded bg-gray-100 px-1 text-gray-800">
                header.php
              </code>{' '}
              of the child theme and{' '}
              <span className="font-semibold text-gray-900">
                not the parent
              </span>
              .
            </div>
          </div>
        </div>
      </div>

      {/*For Wix:*/}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          For Wix:
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          Follow these steps to add code snippet in Wix.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Access the Wix editor:
            </h3>
            <p>
              log into your Wix account and select the desired website you want
              to update.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Navigate to Settings:
            </h3>
            <p>from the dashboard of the site go to the Settings.</p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Add code:</h3>
            <p>
              in the Advanced section, click the option of custom code. Now you
              paste your Call Gauge AI code snippet in the head section of the
              site.
            </p>
          </div>
          {/*Feature 4 */}
          <div className="col-2 rounded-2xl bg-[#B564FB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Apply and publish:</h3>
            <p>click on the Apply and then Publish to save the changes.</p>
          </div>
        </div>
      </div>

      {/*For Webflow:*/}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          For Webflow:
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          These are the steps you should follow to add code snippet in Webflow.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Log into Webflow:</h3>
            <p>
              move to your dashboard after logging in and select the project you
              want to edit/update.
            </p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Project settings:</h3>
            <p>now open the settings of the project. </p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Add your code:</h3>
            <p>
              go to the custom code tab and paste the code in the head code
              section.
            </p>
          </div>
          {/*Feature 4 */}
          <div className="col-2 rounded-2xl bg-[#EF8BCB] p-6 text-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Save and Publish:</h3>
            <p>
              click on save changes and then publish your site to make the
              script alive.
            </p>
          </div>
        </div>
      </div>

      {/*For Squarespace:*/}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-[#DF80D9] sm:text-4xl">
          For Squarespace:
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
          Take the following steps to add the code snippet in your Squarespace
          site.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/*Feature 1 */}
          <div className="rounded-2xl bg-[#FDDBC2] p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Log into Squarespace:
            </h3>
            <p>go to the Squarespace dashboard after logging in.</p>
          </div>

          {/*Feature 2 */}
          <div className="rounded-2xl bg-[#FDDBC2] p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Move to settings:</h3>
            <p>move to the settings and then select Advanced.</p>
          </div>

          {/*Feature 3 */}
          <div className="rounded-2xl bg-[#FDDBC2] p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Add code:</h3>
            <p>
              from here select code injection and then paste the code snippet in
              the header field.
            </p>
          </div>
          {/*Feature 4 */}
          <div className="col-2 rounded-2xl bg-[#FDDBC2] p-6 shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Save:</h3>
            <p>
              click on save to apply the snippet to your site on Squarespace.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 max-w-4xl rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-red-600">
              Endnote:
            </h2>
            <p className="ml-4 text-sm leading-relaxed text-gray-700">
              By installing{' '}
              <span className="font-medium text-gray-900">
                Call Gauge AI’s JavaScript code snippet
              </span>{' '}
              to your site is such a simple and yet powerful tool to boost your
              marketing and customer services. You can use the above mentioned
              steps according to your platform and can add code snippet to start
              tracking calls in advanced manner.
            </p>
          </div>
        </div>
      </div>

      <div className="my-32">
        <section className="relative isolate overflow-hidden rounded-2xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] py-16 sm:bg-linear-145 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Sign up today for a free trial and get started!
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href="#"
                className="rounded-xl bg-[#F15E16] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                Start a Free Trial
              </a>
              <p className="text-sm">✅ 14-day money back guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
