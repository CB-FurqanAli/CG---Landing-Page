import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'

export default function DniIntroduction() {
  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-12 md:grid-cols-2 md:items-center">
      {/*What is DNI and Why Does It Matter?*/}
      <div>
        <div>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            What is DNI and Why Does It Matter?
          </h2>
          <div className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="my-2">
              <strong> Dynamic Number Insertion (DNI) </strong> is a powerful
              call tracking technology that automatically displays a{' '}
              <strong> unique tracking number </strong> to each website visitor
              based on how they arrived at your site (Google Ads, organic
              search, social media, referrals, etc.).
            </p>
            <p className="mt-4">
              With CallGauge AI’s <strong> AI-enhanced DNI system </strong>, you
              gain deeper visibility into campaign performance, enabling you to:
            </p>
          </div>
          <div className="mt-16 text-center text-lg leading-relaxed text-gray-600">
            <div className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Attribute calls accurately to marketing efforts.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Optimize ad expense for high-performing channels.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#EF8BCB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Personalize customer interactions with localized numbers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*Key Advantages of CallGauge AI’s DNI:*/}
      <div className="mt-32">
        <div className="px-6">
          <div className="my-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Key Advantages of CallGauge AI’s DNI:
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
                  Advanced Call Attribution
                </h3>
              </div>
              <p>
                Precisely identify which ads, keywords, campaigns, or referral
                sources are driving calls to your business.
              </p>
            </div>
            {/*2nd*/}
            <div className="rounded-2xl bg-[#F0B100] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  S
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Seamless Website Integration
                </h3>
              </div>
              <p>
                Our DNI script integrates smoothly with your existing website
                without impacting design or performance. It’s lightweight, quick
                to install, and compatible with major CMS platforms.
              </p>
            </div>
            {/*3rd*/}
            <div className="rounded-2xl bg-[#B564FB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  A
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  AI-Enhanced Marketing Insights
                </h3>
              </div>
              <p>
                Unlock deeper marketing intelligence with real-time data on
                visitor behavior and call conversions. Shift your marketing
                spend towards top-performing strategies with confidence.
              </p>
            </div>
            {/*4th*/}
            <div className="rounded-2xl bg-[#EF8BCB] p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                  P
                </div>
                <h3 className="ml-4 text-xl font-semibold">
                  Personalized Caller Experience
                </h3>
              </div>
              <p>
                Automatically display local or toll-free numbers tailored to the
                visitor’s geographic location for a more personalized touch.
              </p>
            </div>
            {/*5th*/}
            <div className="mx-auto flex max-w-xl justify-center md:col-span-2">
              <div className="rounded-2xl bg-[#F0B100] p-6 shadow-md transition hover:shadow-lg">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F15E16] text-xl font-bold">
                    R
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">
                    Real-Time Analytics & Reporting
                  </h3>
                </div>
                <p>
                  Monitor call activity as it happens. React swiftly with
                  data-driven decisions using CallGauge AI’s real-time tracking
                  dashboard.
                </p>
              </div>
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

      {/*<div className="mx-auto my-10 max-w-4xl rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-4 shadow-sm">*/}
      {/*  <div className="flex items-start gap-3">*/}
      {/*    <div>*/}
      {/*      <h2 className="mb-2 text-lg font-semibold text-red-600">*/}
      {/*        Endnote:*/}
      {/*      </h2>*/}
      {/*      <p className="ml-4 text-sm leading-relaxed text-gray-700">*/}
      {/*        By installing{' '}*/}
      {/*        <span className="font-medium text-gray-900">*/}
      {/*          Call Gauge AI’s JavaScript code snippet*/}
      {/*        </span>{' '}*/}
      {/*        to your site is such a simple and yet powerful tool to boost your*/}
      {/*        marketing and customer services. You can use the above mentioned*/}
      {/*        steps according to your platform and can add code snippet to start*/}
      {/*        tracking calls in advanced manner.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*Why Install CallGauge AI’s DNI Script?*/}
      <div className="mt-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="my-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Install CallGauge AI’s DNI Script?
            </h2>
            <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-relaxed text-gray-600">
              By deploying CallGauge AI’s DNI snippet, you could enable powerful
              AI-driven call attribution on your website. Here’s how it benefits
              your business:
            </p>
          </div>

          <div className="mt-16 text-center text-lg leading-relaxed text-gray-600">
            <div className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 md:grid-cols-3">
              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Full visibility into{' '}
                  <strong>
                    {' '}
                    which marketing campaigns drive actual calls.{' '}
                  </strong>
                </li>
                <li className="text-left">
                  <strong> Smarter marketing decisions </strong> based on
                  real-time data.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  <strong> Effortless integration </strong> with no website
                  disruption.
                </li>
                <li className="text-left">
                  Localized numbers for{' '}
                  <strong> enhanced customer experience</strong>.
                </li>
              </ul>

              <ul className="list-disc rounded-2xl bg-[#B564FB] px-8 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
                <li className="text-left">
                  Works in sync with{' '}
                  <strong> Google Ads, Analytics, CRMs, and more </strong>.
                </li>
              </ul>
            </div>
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
