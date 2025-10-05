import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import UnitsContext from '../context/UnitsContext'
import { celsiusToFahrenheit, kmhToMph, mmToIn } from '../helper/calculateUnits.js'
import weatherImgPath from '../helper/weatherImgPath.js'
import { currentDate } from '../helper/datesConverter.js'
import LocationContext from '../context/LocationContext.jsx'
import MainCardLoader from './MainCardLoader.jsx'

const MainWeatherCard = () => {
  const { weather, name, country, isLoading } = useContext(WeatherContext)
  const { selectedLocation } = useContext(LocationContext)
  const { units } = useContext(UnitsContext)
  const {
    temperature_2m,
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
    weather_code,
    time,
  } = weather?.current || {}

  const itemStyles = `${isLoading && 'animate-pulse'} bg-neutral-800 p-250 flex-1 rounded-12 items-center grid gap-300 border-1 border-neutral-600 leading-none mobile:basis-0 basis-[calc(50%-0.888rem)`
  const bgClass = isLoading
    ? 'bg-neutral-800 animate-pulse'
    : 'bg-[url(/assets/images/bg-today-small.svg)] bg-cover bg-center mobile:bg-[url(/assets/images/bg-today-large.svg)]'

  return selectedLocation ? (
    <section>
      <div
        className={`${bgClass} rounded-20 font-DMsan mobile:flex-row mobile:justify-between flex min-h-[286px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-300`}
      >
        {isLoading ? (
          <MainCardLoader />
        ) : (
          <>
            <div className="mobile:text-left grid gap-150 text-center">
              <h2 className="text-neutral-0 text-preset-4">{name && country ? `${name} ${country}` : ''}</h2>
              <time dateTime={time} className="text-neutral-0 text-preset-6 opacity-80">
                {currentDate(time)}
              </time>
            </div>
            <div className="flex items-center gap-250">
              <img
                className="max-w-[120px]"
                src={weatherImgPath(weather_code)}
                alt={`Current Weather Code:${weather_code}`}
              />
              <p className="text-neutral-0 text-preset-1 italic">
                {celsiusToFahrenheit(temperature_2m, units.temperature)}°
              </p>
            </div>
          </>
        )}
      </div>
      <ul className="mobile:gap-250 flex flex-wrap justify-between gap-200 pt-400 md:gap-300">
        <li className={itemStyles}>
          <p className="text-preset-6 text-nowrap text-neutral-200">Feels like</p>
          <p className="text-preset-3 text-neutral-0">
            {isLoading ? '-' : `${celsiusToFahrenheit(apparent_temperature, units.temperature)}°`}
          </p>
        </li>
        <li className={itemStyles}>
          <p className="text-preset-6 text-neutral-200">Humidity</p>
          <p className="text-preset-3 text-neutral-0 mobile:text-nowrap text-wrap">
            {isLoading ? '-' : `${relative_humidity_2m} %`}
          </p>
        </li>
        <li className={itemStyles}>
          <p className="text-preset-6 text-neutral-200">Wind</p>

          <p className="text-preset-3 text-neutral-0 mobile:text-nowrap text-wrap">
            {isLoading ? '-' : `${kmhToMph(wind_speed_10m, units.windSpeed)} ${units.windSpeed}`}
          </p>
        </li>
        <li className={itemStyles}>
          <p className="text-preset-6 text-neutral-200">Precipitation</p>

          <p className="text-preset-3 text-neutral-0 mobile:text-nowrap text-wrap">
            {isLoading ? '-' : `${mmToIn(precipitation, units.precipitation)} ${units.precipitation}`}
          </p>
        </li>
      </ul>
    </section>
  ) : null
}

export default MainWeatherCard
