import UnitsDropdown from './layout/UnitsDropdown'
import SearchDropdown from './layout/SearchDropdown'
import FavoritesDropdown from './layout/FavoritesDropdown'
import SearchLoader from './SearchLoader'
import LocationContext from '../context/LocationContext'
import WeatherContext from '../context/WeatherContext'
import DropdownContext from '../context/DropdownContext'
import { useState, useContext } from 'react'

const Header = () => {
  const { dropdown, toggleDropdown, openDropdown, closeDropdown } = useContext(DropdownContext)
  const {
    selectedLocation,
    getSelectedLocation,
    locations,
    isLoading,
    fetchLocations,
    checkResults,
    locationApiError,
  } = useContext(LocationContext)
  const { weatherApiError, favorites, removeFavorite } = useContext(WeatherContext)
  const [query, setQuery] = useState('')

  const { name, admin1, country } = selectedLocation || {}

  function getPlaceholderText() {
    // also used for the label
    if (!selectedLocation) {
      return 'Search for a place...'
    } else {
      return [name, admin1, country].filter((item) => item !== undefined).join(', ')
    }
  }

  function handleSearchInput(event) {
    setQuery(event.target.value)
  }

  async function handleSearchButton() {
    if (!query) return
    const data = await fetchLocations(query)
    if (data?.results?.length > 0) {
      openDropdown('search-dropdown')
    } else {
      closeDropdown('search-dropdown')
      getSelectedLocation(null)
    }
    setQuery('')
  }

  return (
    <header className="relative grid gap-800">
      <div className="relative flex items-center justify-between">
        <img className="mobile:w-auto w-[138px]" src="/assets/images/logo.svg" alt="Weather Now Logo" />
        <div>
          <button
            onClick={() => toggleDropdown('units-dropdown')}
            aria-expanded={dropdown === 'units-dropdown'}
            aria-controls="units-dropdown"
            className="text-preset-7 text-neutral-0 rounded-8 focus:outline-neutral-0 mobile:px-150 mobile:py-200 flex cursor-pointer items-center gap-125 bg-neutral-800 px-125 py-100 transition-colors hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2"
          >
            <img src="/assets/images/icon-units.svg" alt="Units Settings" />
            <span>Units</span>
            <img src="/assets/images/icon-dropdown.svg" alt="Open/Close Units Dropdown" />
          </button>
        </div>
        {dropdown === 'units-dropdown' && <UnitsDropdown closeDropdown={closeDropdown} />}
      </div>

      {weatherApiError || locationApiError ? (
        ''
      ) : (
        <>
          <h1 className="text-neutral-0 text-preset-2 font-Bricolage mobile:max-w-[400px] w-full max-w-[300px] justify-self-center text-center md:max-w-full">
            How's the sky looking today? <span className="sr-only">Use your personal Weather web app</span>
          </h1>
          <div className="mobile:flex-row flex w-full flex-col justify-center gap-200">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('favorites-dropdown')}
                className="rounded-12 focus:outline-neutral-0 text-neutral-0 flex h-full cursor-pointer items-center gap-125 bg-neutral-800 px-300 py-200 transition-colors hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2"
              >
                <svg width="24px" height="24px" viewBox="6.5 6 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-neutral-200 transition-colors"
                    d="M10.4127 8.49812L10.5766 8.20419C11.2099 7.06807 11.5266 6.5 12 6.5C12.4734 6.5 12.7901 7.06806 13.4234 8.20419L13.5873 8.49813C13.7672 8.82097 13.8572 8.98239 13.9975 9.0889C14.1378 9.19541 14.3126 9.23495 14.6621 9.31402L14.9802 9.38601C16.2101 9.66428 16.825 9.80341 16.9713 10.2739C17.1176 10.7443 16.6984 11.2345 15.86 12.215L15.643 12.4686C15.4048 12.7472 15.2857 12.8865 15.2321 13.0589C15.1785 13.2312 15.1965 13.4171 15.2325 13.7888L15.2653 14.1272C15.3921 15.4353 15.4554 16.0894 15.0724 16.3801C14.6894 16.6709 14.1137 16.4058 12.9622 15.8756L12.6643 15.7384C12.337 15.5878 12.1734 15.5124 12 15.5124C11.8266 15.5124 11.663 15.5878 11.3357 15.7384L11.0378 15.8756C9.88633 16.4058 9.31059 16.6709 8.92757 16.3801C8.54456 16.0894 8.60794 15.4353 8.7347 14.1272L8.76749 13.7888C8.80351 13.4171 8.82152 13.2312 8.76793 13.0589C8.71434 12.8865 8.59521 12.7472 8.35696 12.4686L8.14005 12.215C7.30162 11.2345 6.88241 10.7443 7.02871 10.2739C7.17501 9.80341 7.78994 9.66427 9.01977 9.38601L9.33794 9.31402C9.68743 9.23495 9.86217 9.19541 10.0025 9.0889C10.1428 8.98239 10.2328 8.82097 10.4127 8.49812Z"
                  />
                </svg>
                <span>Favorites</span>
              </button>
              {dropdown === 'favorites-dropdown' && (
                <FavoritesDropdown
                  closeDropdown={closeDropdown}
                  favorites={favorites}
                  removeFavorite={removeFavorite}
                  getSelectedLocation={getSelectedLocation}
                />
              )}
            </div>
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
                <img className="h-full w-full" src="/assets/images/icon-search.svg" alt="Search Location" />
              </span>
              {dropdown === 'search-dropdown' && !isLoading && (
                <SearchDropdown
                  closeDropdown={closeDropdown}
                  locations={locations}
                  getSelectedLocation={getSelectedLocation}
                />
              )}
              {isLoading && <SearchLoader />}
            </div>
            <button
              type="button"
              aria-expanded={dropdown === 'search-dropdown'}
              onClick={handleSearchButton}
              className={`${dropdown === null ? 'focus:border-2 focus:border-neutral-900 focus:outline-2 focus:outline-blue-500' : ''} text-neutral-0 rounded-12 mobile:w-auto w-full cursor-pointer self-start bg-blue-500 px-300 py-200 transition-colors hover:bg-blue-700`}
            >
              Search
            </button>
          </div>
          {checkResults()}
        </>
      )}
    </header>
  )
}

export default Header
