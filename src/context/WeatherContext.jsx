import { createContext, useState, useEffect, useContext } from 'react'
import getWeather from '../services/getWeather'
import LocationContext from './LocationContext'

const WeatherContext = createContext()

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null)
  const { selectedLocation } = useContext(LocationContext)
  const [isLoading, setIsLoading] = useState(false)
  const { name, country, latitude, longitude } = selectedLocation || {}
  const [weatherApiError, setWeatherApiError] = useState(null)

  async function fetchWeather() {
    if (!latitude || !longitude) return
    setIsLoading(true)
    try {
      const data = await getWeather(longitude, latitude)
      setWeather(data)
      setWeatherApiError(null)
    } catch (err) {
      setWeatherApiError(err)
      setWeather(null)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [selectedLocation])

  return (
    <WeatherContext.Provider
      value={{ name, country, weather, isLoading, weatherApiError, refetchWeather: fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
