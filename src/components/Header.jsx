import Dropdown from './Dropdown'
import SearchLoader from './SearchLoader'
import useDropdown from '../hooks/useDropdown'
import getLocation from '../services/getLocation'
import { useContext } from 'react'
import LocationContext from '../context/LocationContext'
import { useState } from 'react'

const Header = () => {
  const { dropdown, toggleDropdown, openDropdown, closeDropdown } = useDropdown()
  const { selectedLocation, getSelectedLocation } = useContext(LocationContext)
  const [isLoading, setIsLoading] = useState(false)
  const [locations, setLocations] = useState(null)
  const [query, setQuery] = useState('')

  const { name, admin1, country } = selectedLocation

  function getPlaceholderText() {
    // also used for the label
    if (selectedLocation !== '') {
      return `${name}, ${admin1}, ${country}`
    } else {
      return 'Search for a place...'
    }
  }

  function handleSearchInput(event) {
    setQuery(event.target.value)
  }

  async function handleSearchButton() {
    if (query === '') return
    setIsLoading(true)
    const data = await getLocation(query)
    setLocations(data)
    setIsLoading(false)
    if (data?.results?.length > 0) {
      openDropdown('search-dropdown')
    } else {
      closeDropdown('search-dropdown')
    }
    setQuery('')
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
    <header className="relative grid gap-800">
      <div className="relative flex items-center justify-between">
        <img className="mobile:w-auto w-[138px]" src="/assets/images/logo.svg" alt="Weather Now Logo" />
        <div>
          <button
            onClick={() => toggleDropdown('units-dropdown')}
            className="text-preset-7 text-neutral-0 rounded-8 focus:outline-neutral-0 mobile:px-150 mobile:py-200 flex cursor-pointer gap-125 bg-neutral-800 px-125 py-100 transition-colors hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2"
          >
            <img src="/assets/images/icon-units.svg" />
            <span>Units</span>
            <img src="/assets/images/icon-dropdown.svg" />
          </button>
        </div>
        <Dropdown variant={'units-dropdown'} closeDropdown={closeDropdown} isOpen={dropdown === 'units-dropdown'} />
      </div>
      <h1 className="text-neutral-0 text-preset-2 font-Bricolage mobile:max-w-[400px] w-full max-w-[300px] justify-self-center text-center md:max-w-full">
        How's the sky looking today? <span className="sr-only">Use your personal Weather web app</span>
      </h1>
      <div className="mobile:flex-row flex w-full flex-col justify-center gap-200">
        <div className="relative flex w-full gap-150 md:max-w-[478px]">
          <label className="sr-only" htmlFor="search-input">
            {getPlaceholderText()}
          </label>
          <input
            onChange={(event) => {
              handleSearchInput(event)
            }}
            value={query}
            id="search-input"
            name="search-input"
            className="rounded-12 text-preset-5-medium focus:outline-neutral-0 h-full w-full cursor-pointer bg-neutral-800 px-800 py-200 text-neutral-200 caret-neutral-200 transition-colors placeholder:text-neutral-200 hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2"
            placeholder={getPlaceholderText()}
            type="text"
          />
          <span className="absolute top-200 left-300">
            <img className="h-full w-full" src="/assets/images/icon-search.svg" />
          </span>
          {isLoading ? (
            <SearchLoader />
          ) : (
            <Dropdown
              variant={'search-dropdown'}
              closeDropdown={closeDropdown}
              locations={locations}
              isOpen={dropdown === 'search-dropdown'}
              getSelectedLocation={getSelectedLocation}
            />
          )}
        </div>
        <button
          onClick={handleSearchButton}
          className={`${dropdown === null ? 'focus:border-2 focus:border-neutral-900 focus:outline-2 focus:outline-blue-500' : ''} text-neutral-0 rounded-12 mobile:w-auto w-full cursor-pointer self-start bg-blue-500 px-300 py-200 transition-colors hover:bg-blue-700`}
        >
          Search
        </button>
      </div>
      {checkResults()}
    </header>
  )
}

export default Header
