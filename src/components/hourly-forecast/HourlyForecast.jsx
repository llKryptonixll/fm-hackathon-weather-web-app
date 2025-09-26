import HourlyForecastItem from './HourlyForecastItem'

const HourlyForecast = () => {
  return (
    <section className="custom-scrollbar rounded-20 h-[693px] w-full overflow-y-scroll bg-neutral-800 p-300 text-white lg:max-w-[384px]">
      <div className="flex items-center justify-between pb-200">
        <h2 className="text-preset-5 text-neutral-0">Hourly forecast</h2>
        <button className="rounded-8 flex gap-150 bg-neutral-600 px-200 py-100">
          <span className="text-preset-7">Tuesday</span>
          <img src="/assets/images/icon-dropdown.svg" alt="" />
        </button>
      </div>
      <ul className="grid gap-200">
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
        <HourlyForecastItem />
      </ul>
    </section>
  )
}

export default HourlyForecast
