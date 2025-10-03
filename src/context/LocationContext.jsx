import { createContext, useState } from 'react'

const LocationContext = createContext()

export function LocationProvider({ children }) {
  const defaultLocation = {
    name: 'Berlin',
    country: 'Germany',
    latitude: 52.52,
    longitude: 13.405,
  }

  const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
  const [locations, setLocations] = useState(null)

  function getSelectedLocation(location) {
    setSelectedLocation(location)
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
    <LocationContext.Provider value={{ selectedLocation, getSelectedLocation, locations, setLocations, checkResults }}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContext
