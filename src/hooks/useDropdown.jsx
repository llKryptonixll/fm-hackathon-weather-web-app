import { useState } from 'react'

const useDropdown = () => {
  const [dropdown, setDropdown] = useState(null)
  function toggleDropdown(name) {
    setDropdown((prev) => (prev === name ? null : name))
  }

  function openDropdown(name) {
    setDropdown(name)
  }

  function closeDropdown() {
    setDropdown(null)
  }
  return { dropdown, toggleDropdown, openDropdown, closeDropdown }
}

export default useDropdown
