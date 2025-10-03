import { createContext, useState, useEffect, useContext } from 'react'
import getWeather from '../services/getWeather'
import LocationContext from './LocationContext'

const WeatherContext = createContext()

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null)
  const { selectedLocation } = useContext(LocationContext)
  const [isLoading, setIsLoading] = useState(false)
  const { name, country, latitude, longitude } = selectedLocation || {}

  useEffect(() => {
    async function fetchWeather() {
      setIsLoading(true)
      if (!selectedLocation || !longitude || !latitude) {
        setWeather(null)
        setIsLoading(false)
      } else {
        const data = await getWeather(longitude, latitude)
        setWeather(data)
        setIsLoading(false)
      }
    }

    fetchWeather()
  }, [selectedLocation])

  return <WeatherContext.Provider value={{ name, country, weather, isLoading }}>{children}</WeatherContext.Provider>
}

export default WeatherContext
