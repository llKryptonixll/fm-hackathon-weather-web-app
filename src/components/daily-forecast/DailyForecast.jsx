import DailyForeacastItem from './DailyForecastItem'
import WeatherContext from '../../context/WeatherContext'
import LocationContext from '../../context/LocationContext'
import { useContext } from 'react'

const DailyForecast = () => {
  const { weather, isLoading } = useContext(WeatherContext)
  const { selectedLocation } = useContext(LocationContext)
  const dailyData = weather?.daily
    ? weather.daily.time.map((currentTime, index) => ({
        date: currentTime,
        minTemp: weather.daily.temperature_2m_min[index],
        maxTemp: weather.daily.temperature_2m_max[index],
        weatherCode: weather.daily.weather_code[index],
      }))
    : Array.from({ length: 7 }).map(() => ({
        date: null,
        minTemp: null,
        maxTemp: null,
        weatherCode: null,
      }))

  return selectedLocation ? (
    <section className="self-end">
      <h2 className="text-neutral-0 text-preset-5-medium">Daily forecast</h2>
      <dl className="flex flex-wrap items-center gap-200 pt-250">
        {dailyData?.map((item, index) => {
          return (
            <DailyForeacastItem
              key={index}
              date={item.date}
              minTemp={item.minTemp}
              maxTemp={item.maxTemp}
              weatherCode={item.weatherCode}
              isLoading={isLoading}
            />
          )
        })}
      </dl>
    </section>
  ) : null
}

export default DailyForecast
