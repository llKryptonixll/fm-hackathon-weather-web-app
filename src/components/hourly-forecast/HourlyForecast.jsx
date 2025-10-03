import HourlyForecastItem from './HourlyForecastItem'
import WeatherContext from '../../context/WeatherContext'
import { useContext, useState } from 'react'
import useDropdown from '../../hooks/useDropdown'
import DaysDropdown from '../layout/DaysDropdown'
import { getWeekDay } from '../../helper/datesConverter'
import LocationContext from '../../context/LocationContext'

const HourlyForecast = () => {
  const { weather, isLoading } = useContext(WeatherContext)
  const { selectedLocation } = useContext(LocationContext)
  const currentDayRaw = new Date()
  const currentDay = getWeekDay(currentDayRaw, 'long')
  const { dropdown, toggleDropdown, closeDropdown } = useDropdown()
  const [selectedDay, setSelectedDay] = useState(currentDay)

  const hourlyData =
    weather?.hourly.time.map((time, index) => ({
      time,
      temperature: weather.hourly.temperature_2m[index],
      weather_code: weather.hourly.weather_code[index],
    })) ||
    Array.from({ length: 24 }).map(() => ({
      time: null,
      temperature: null,
      weather_code: null,
    }))

  const filteredHourlyData = hourlyData.filter((item) => {
    if (!item.time) return true
    const itemDate = new Date(item.time)
    const itemDay = getWeekDay(itemDate, 'long')
    return itemDay === selectedDay
  })

  return selectedLocation ? (
    <section className="custom-scrollbar rounded-20 h-[693px] w-full overflow-y-scroll bg-neutral-800 p-300 text-white lg:max-w-[384px]">
      <div className="relative flex items-center justify-between pb-200">
        <h2 className="text-preset-5 text-neutral-0">Hourly forecast</h2>
        <button
          onClick={() => toggleDropdown('days-dropdown')}
          className="rounded-8 flex cursor-pointer gap-150 bg-neutral-600 px-200 py-100"
        >
          {isLoading ? <span>-</span> : <span className="text-preset-7">{selectedDay}</span>}
          <img src="/assets/images/icon-dropdown.svg" alt="" />
        </button>
        {dropdown === 'days-dropdown' && (
          <DaysDropdown selectedDay={selectedDay} closeDropdown={closeDropdown} setSelectedDay={setSelectedDay} />
        )}
      </div>
      <ul className="grid gap-200">
        {filteredHourlyData.map((item, index) => {
          return (
            <HourlyForecastItem
              key={index}
              time={item.time}
              weatherCode={item.weather_code}
              temperature={item.temperature}
              isLoading={isLoading}
            />
          )
        })}
      </ul>
    </section>
  ) : null
}

export default HourlyForecast
