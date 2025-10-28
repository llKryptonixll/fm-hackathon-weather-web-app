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
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('weather-now-city-favorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch (error) {
      console.warn('Failed to parse tasks from localStorage:', error)
      return []
    }
  })

  function checkIsFavorite() {
    if (!selectedLocation) return
    const isFavorite = favorites.some(
      (fav) => fav.latitude === selectedLocation.latitude && fav.longitude === selectedLocation.longitude,
    )
    return isFavorite
  }

  function addFavorites() {
    // Toggles the current location in the favorites list: adds it if not present, removes it if already a favorite
    const newFavorites = checkIsFavorite()
      ? favorites.filter(
          (fav) => fav.latitude !== selectedLocation.latitude && fav.longitude !== selectedLocation.longitude,
        )
      : [...favorites, selectedLocation]

    setFavorites(newFavorites)
    localStorage.setItem('weather-now-city-favorites', JSON.stringify(newFavorites))
  }

  function removeFavorite(currentFavorite) {
    const newFavorites = favorites.filter((fav) => {
      return fav !== currentFavorite
    })
    setFavorites(newFavorites)
    localStorage.setItem('weather-now-city-favorites', JSON.stringify(newFavorites))
  }

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
      value={{
        name,
        country,
        weather,
        isLoading,
        weatherApiError,
        refetchWeather: fetchWeather,
        addFavorites,
        checkIsFavorite,
        removeFavorite,
        favorites,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
