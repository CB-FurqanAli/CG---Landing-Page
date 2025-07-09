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
            Call tracking numbers
          </h3>
        </div>
        <p className="text-md h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed font-medium text-gray-900">
          Track countless phone numbers in just a few minutes at a price that
          nobody had ever offered!
        </p>
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
            Dynamic number insertion (DNI)
          </h3>
        </div>
        <p className="text-md h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed font-medium text-gray-900">
          Dynamic number insertion allows you to track the online source of
          every call automatically.
        </p>
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
            White labeling
          </h3>
        </div>
        <p className="text-md h-full max-h-[190px] w-[410px] rounded-tl-lg rounded-br-lg rounded-bl-lg bg-[#F2F5E4] px-5 py-3 leading-relaxed font-medium text-gray-900">
          Make Call Gauge Pro truly yours by adding your own brand and custom
          URL.
        </p>
      </div>
    </div>
  )
}
