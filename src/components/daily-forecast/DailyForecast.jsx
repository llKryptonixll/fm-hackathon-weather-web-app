import DailyForeacastItem from './DailyForecastItem'
import WeatherContext from '../../context/WeatherContext'
import { useContext } from 'react'

const DailyForecast = () => {
  const { weather } = useContext(WeatherContext)
  const dailyData = weather?.daily.time.map((currentTime, index) => {
    return {
      date: currentTime,
      minTemp: weather?.daily.temperature_2m_min[index],
      maxTemp: weather?.daily.temperature_2m_max[index],
      weatherCode: weather?.daily.weather_code[index],
    }
  })

  return weather ? (
    <section className="self-end">
      <h2 className="text-neutral-0 text-preset-5-medium">Daily forecast</h2>
      <dl className="flex flex-wrap items-center gap-200 pt-250">
        {dailyData.map((item, index) => {
          return (
            <DailyForeacastItem
              key={index}
              date={item.date}
              minTemp={item.minTemp}
              maxTemp={item.maxTemp}
              weatherCode={item.weatherCode}
            />
          )
        })}
      </dl>
    </section>
  ) : (
    <></>
  )
}

export default DailyForecast
