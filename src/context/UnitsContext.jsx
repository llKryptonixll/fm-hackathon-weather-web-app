import { createContext, useState, useEffect, useContext } from 'react'

const UnitsContext = createContext()

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState({ temperature: 'Celsius', windSpeed: 'km/h', precipitation: 'mm' })
  const [metric, setMetric] = useState(true)

  function onChange(field, value) {
    setUnits({ ...units, [field]: value })
  }

  function switchMetric() {
    setMetric((prevMetric) => {
      const newMetric = !prevMetric
      setUnits({
        temperature: newMetric ? 'Celsius' : 'Fahrenheit',
        windSpeed: newMetric ? 'km/h' : 'mph',
        precipitation: newMetric ? 'mm' : 'in',
      })
      return newMetric
    })
  }
  return (
    <UnitsContext.Provider value={{ metric, setMetric, units, onChange, switchMetric }}>
      {children}
    </UnitsContext.Provider>
  )
}

export default UnitsContext
