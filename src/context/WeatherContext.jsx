import { createContext, useState, useEffect, useContext } from 'react'
import getWeather from '../services/getWeather'
import LocationContext from './LocationContext'

const WeatherContext = createContext()

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null)
  const { selectedLocation } = useContext(LocationContext)
  const { name, country, latitude, longitude } = selectedLocation || {}

  useEffect(() => {
    async function fetchWeather() {
      if (!selectedLocation || !longitude || !latitude) {
        setWeather(null)
      } else {
        const data = await getWeather(longitude, latitude)
        setWeather(data)
      }
    }

    fetchWeather()
  }, [selectedLocation])

  return <WeatherContext.Provider value={{ name, country, weather }}>{children}</WeatherContext.Provider>
}

export default WeatherContext
