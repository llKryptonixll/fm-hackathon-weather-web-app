import MainWeatherCard from './MainWeatherCard'
import DailyForecast from './daily-forecast/DailyForecast'
import HourlyForecast from './hourly-forecast/HourlyForecast'
import WeatherContext from '../context/WeatherContext'
import LocationContext from '../context/LocationContext'
import ApiError from './ApiError'
import { useContext } from 'react'

const AppContent = () => {
  const { weatherApiError, refetchWeather } = useContext(WeatherContext)
  const { locationApiError, refetchLocation } = useContext(LocationContext)

  return weatherApiError || locationApiError ? (
    <ApiError
      refetchWeather={refetchWeather}
      refetchLocation={refetchLocation}
      weatherApiError={weatherApiError}
      locationApiError={locationApiError}
    />
  ) : (
    <main className="flex flex-wrap gap-400 pt-600">
      <div className="grid flex-1 gap-400">
        <MainWeatherCard />
        <DailyForecast />
      </div>
      <HourlyForecast />
    </main>
  )
}

export default AppContent
