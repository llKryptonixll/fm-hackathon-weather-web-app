import { celsiusToFahrenheit } from '../../helper/calculateUnits'
import UnitsContext from '../../context/UnitsContext'
import { useContext } from 'react'
import weatherImgPath from '../../helper/weatherImgPath'
import { getWeekDay } from '../../helper/datesConverter'

const DailyForecastItem = ({ date, minTemp, maxTemp, weatherCode }) => {
  const { units } = useContext(UnitsContext)
  return (
    <div className="rounded-12 grid flex-1 place-items-center gap-200 border-1 border-neutral-600 bg-neutral-800 px-125 py-200">
      <dt className="text-neutral-0 text-preset-6">{getWeekDay(date, 'short')}</dt>
      <img className="w-[60px]" src={weatherImgPath(weatherCode)} alt={`Current Weather Code: ${weatherCode}`} />
      <div className="flex w-full justify-between">
        <dd className="text-preset-7 text-neutral-0" aria-label="Low temperature 21 degrees Celsius">
          {celsiusToFahrenheit(minTemp, units.temperature)}°
        </dd>
        <dd className="text-preset-7 text-neutral-200" aria-label="High temperature 29 degrees Celsius">
          {celsiusToFahrenheit(maxTemp, units.temperature)}°
        </dd>
      </div>
    </div>
  )
}

export default DailyForecastItem
