import { celsiusToFahrenheit } from '../../helper/calculateUnits'
import weatherImgPath from '../../helper/weatherImgPath'
import UnitsContext from '../../context/UnitsContext'
import { useContext } from 'react'
import { getHour } from '../../helper/datesConverter'

const HourlyForecastItem = ({ time, weatherCode, temperature }) => {
  const { units } = useContext(UnitsContext)
  return (
    <li className="rounded-8 flex items-center justify-between border-1 border-neutral-600 bg-neutral-700 py-[10px] pr-200 pl-150">
      <div className="flex items-center gap-100">
        <img className="h-[40px]" src={weatherImgPath(weatherCode)} alt="" />
        <span className="text-preset-5-medium text-neutral-0">{getHour(time)}</span>
      </div>
      <span>{celsiusToFahrenheit(temperature, units.temperature)}°</span>
    </li>
  )
}

export default HourlyForecastItem
