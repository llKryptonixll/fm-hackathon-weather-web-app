import { createContext } from 'react'
import LocationContext from './LocationContext'
import useDropdown from '../hooks/useDropdown'

const DropdownContext = createContext()

export function DropdownProvider({ children }) {
  const dropdownLogic = useDropdown()
  return <DropdownContext.Provider value={dropdownLogic}>{children}</DropdownContext.Provider>
}

export default DropdownContext
