export default function AsdDsa() {
  return (
    <div className="mx-auto mt-20 mb-30 grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
      <div className="">
        <div className="flex items-center gap-1">
          <div>
            <img
              src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fb9830683d5eb4f37_horizontal-bar-chart.svg"
              loading="lazy"
              alt=""
              className="feature-card-icon"
            />
          </div>
          <h3 className="w-[358px] rounded-tl-lg rounded-tr-lg bg-[#F2F5E4] px-3 py-4 text-xl font-semibold text-gray-900">
            Automations
          </h3>
        </div>

        <div className="h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed">
          <p className="text-md font-medium text-gray-900">
            Send automated SMS messages or emails when calls got completed. Or
            step ahead by Zapier.
          </p>
          <a
            href={'#'}
            className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
          >
            View details
          </a>
        </div>
      </div>

      {/*2nd*/}

      <div className="">
        <div className="flex items-center gap-1">
          <div>
            <img
              src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fd2f07ac6bafd28e0_dollar-hand-holding.svg"
              loading="lazy"
              alt=""
              className="feature-card-icon"
            />
          </div>
          <h3 className="w-[358px] rounded-tl-lg rounded-tr-lg bg-[#F2F5E4] px-3 py-4 text-xl font-semibold text-gray-900">
            Call recording
          </h3>
        </div>

        <div className="h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed">
          <p className="text-md font-medium text-gray-900">
            Easily record every call, replay them anytime you want to and even
            download mp3 files for easy sharing!
          </p>
          <a
            href={'#'}
            className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
          >
            View details
          </a>
        </div>
      </div>

      <div className="">
        <div className="flex items-center gap-1">
          <div>
            <img
              src="https://cdn.prod.website-files.com/5d82e225060d003d65ddae98/6799aa8fc3aab2b7fdbae39d_money-trend-up.svg"
              loading="lazy"
              alt=""
              className="feature-card-icon"
            />
          </div>
          <h3 className="w-[358px] rounded-tl-lg rounded-tr-lg bg-[#F2F5E4] px-3 py-4 text-xl font-semibold text-gray-900">
            Call whisper
          </h3>
        </div>

        <div className="h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed">
          <p className="text-md font-medium text-gray-900">
            Get valuable context of the caller even before the conversation
            begins!
          </p>
          <a
            href={'#'}
            className="text-md mt-6 inline-flex items-center rounded-xl border border-[#DE85DB] bg-gradient-to-r from-[#FBCCC5] to-[#B767F4] px-6 py-2 font-semibold transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#F9C1C7] hover:to-[#DB7EDD]"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  )
}
