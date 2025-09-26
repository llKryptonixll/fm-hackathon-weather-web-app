const DailyForecastItem = ({ item }) => {
  return (
    <div className="rounded-12 grid flex-1 place-items-center gap-200 border-1 border-neutral-600 bg-neutral-800 px-125 py-200">
      <dt className="text-neutral-0 text-preset-6">{item}</dt>
      <img className="w-[60px]" src="/assets/images/icon-drizzle.webp" alt="" />
      <div className="flex w-full justify-between">
        <dd className="text-preset-7 text-neutral-0" aria-label="Low temperature 21 degrees Celsius">
          20°
        </dd>
        <dd className="text-preset-7 text-neutral-200" aria-label="High temperature 29 degrees Celsius">
          29°C
        </dd>
      </div>
    </div>
  )
}

export default DailyForecastItem
