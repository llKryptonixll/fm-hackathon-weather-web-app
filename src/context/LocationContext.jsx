import { createContext, useState } from 'react'
import getLocation from '../services/getLocation'

const LocationContext = createContext()

export function LocationProvider({ children }) {
  const defaultLocation = {
    name: 'Berlin',
    country: 'Germany',
    latitude: 52.52437,
    longitude: 13.41053,
  }

  const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
  const [locations, setLocations] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [locationApiError, setLocationApiError] = useState(null)
  const [lastQuery, setLastQuery] = useState(null)

  function getSelectedLocation(location) {
    setSelectedLocation(location)
  }

  async function fetchLocations(query) {
    setIsLoading(true)
    setLastQuery(query)
    try {
      const data = await getLocation(query)
      setLocations(data)
      setLocationApiError(null)
      return data
    } catch (error) {
      setLocationApiError(error)
      console.error('Error fetching locations:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function refetchLocation() {
    if (lastQuery) {
      return fetchLocations(lastQuery)
    }
  }

  function checkResults() {
    if (locations === null) {
      return null
    }

    if (!locations.results || locations.results.length === 0) {
      return <p className="text-neutral-0 text-preset-4 justify-self-center">No search result found!</p>
    }
  }

  return (
    <LocationContext.Provider
      value={{
        selectedLocation,
        fetchLocations,
        getSelectedLocation,
        locations,
        isLoading,
        locationApiError,
        refetchLocation,
        setLocations,
        checkResults,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContext
