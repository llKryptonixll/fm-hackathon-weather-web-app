import { createContext, useState } from 'react'

const LocationContext = createContext()

export function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState('')

  function getSelectedLocation(location) {
    setSelectedLocation(location)
  }
  return (
    <LocationContext.Provider value={{ selectedLocation, getSelectedLocation }}>{children}</LocationContext.Provider>
  )
}

export default LocationContext
