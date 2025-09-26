const HourlyForecastItem = () => {
  return (
    <li className="rounded-8 flex items-center justify-between border-1 border-neutral-600 bg-neutral-700 py-[10px] pr-200 pl-150">
      <div className="flex items-center gap-100">
        <img className="w-[40px]" src="/assets/images/icon-overcast.webp" alt="" />
        <span>3 PM</span>
      </div>
      <span>68°</span>
    </li>
  )
}

export default HourlyForecastItem
