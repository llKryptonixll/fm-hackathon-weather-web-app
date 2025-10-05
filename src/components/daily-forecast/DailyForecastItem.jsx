import { celsiusToFahrenheit } from '../../helper/calculateUnits'
import { getWeekDay } from '../../helper/datesConverter'
import weatherImgPath from '../../helper/weatherImgPath'
import UnitsContext from '../../context/UnitsContext'
import { useContext } from 'react'

const DailyForecastItem = ({ date, minTemp, maxTemp, weatherCode, isLoading }) => {
  const { units } = useContext(UnitsContext)
  const itemStyles =
    'rounded-12 mobile:basis-0 grid min-h-[165px] min-w-[90px] flex-1 basis-[30%] place-items-center gap-200 border-1 border-neutral-600 bg-neutral-800 px-125 py-200'

  return (
    <>
      {isLoading ? (
        <li aria-busy={isLoading} className={`${isLoading ? 'animate-pulse' : ''} ${itemStyles}`}>
          <p className="sr-only">Loading...</p>
        </li>
      ) : (
        <li className={itemStyles}>
          <time className="text-neutral-0 text-preset-6" dateTime={date}>
            {getWeekDay(date, 'short')}
          </time>
          <img className="w-[60px]" src={weatherImgPath(weatherCode)} alt={`Current Weather Code: ${weatherCode}`} />
          <div className="flex w-full justify-between">
            <p
              className="text-preset-7 text-neutral-0"
              aria-label={`Lowest temperature: ${celsiusToFahrenheit(minTemp, units.temperature)}°`}
            >
              {celsiusToFahrenheit(minTemp, units.temperature)}°
            </p>
            <p
              className="text-preset-7 text-neutral-200"
              aria-label={`Highest temperature: ${celsiusToFahrenheit(maxTemp, units.temperature)}°`}
            >
              {celsiusToFahrenheit(maxTemp, units.temperature)}°
            </p>
          </div>
        </li>
      )}
    </>
  )
}

export default DailyForecastItem
