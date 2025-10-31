import UnitsDropdown from './layout/UnitsDropdown'
import SearchDropdown from './layout/SearchDropdown'
import FavoritesDropdown from './layout/FavoritesDropdown'
import SearchLoader from './SearchLoader'
import LocationContext from '../context/LocationContext'
import WeatherContext from '../context/WeatherContext'
import DropdownContext from '../context/DropdownContext'
import { useState, useContext } from 'react'

const Header = ({ theme, switchTheme }) => {
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

  const settingsButtonStyle =
    'text-preset-7 text-neutral-0 rounded-8 focus:outline-neutral-0 mobile:px-150 mobile:py-200 flex cursor-pointer items-center gap-125 bg-neutral-800 px-125 py-100 transition-colors hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2'

  return (
    <header className="relative grid gap-800">
      <div className="relative flex items-center justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" width="197" height="40" fill="none" viewBox="0 0 197 40">
          <title>Weather Now Logo</title>
          <g clipPath="url(#a)">
            <path
              fill="#FF820A"
              d="M25.093 1.054 21.16 0l-3.315 12.37-2.992-11.168-3.933 1.054 3.233 12.066L6.1 6.269l-2.88 2.88 8.834 8.832-11-2.947L0 18.967l12.019 3.22a8.144 8.144 0 1 1 15.869-.011l10.922 2.926 1.054-3.933-12.066-3.233 11-2.947-1.054-3.934-12.066 3.234 8.053-8.053-2.88-2.88-8.71 8.711 2.952-11.013Z"
            />
            <path
              fill="#FF820A"
              d="M27.877 22.221a8.127 8.127 0 0 1-2.026 3.733l7.913 7.913 2.88-2.88-8.767-8.766ZM25.771 26.037a8.137 8.137 0 0 1-3.639 2.151l2.88 10.746 3.933-1.054-3.174-11.843ZM21.985 28.227a8.157 8.157 0 0 1-2.033.256c-.753 0-1.481-.102-2.173-.293l-2.881 10.756L18.83 40l3.154-11.773ZM17.64 28.15a8.142 8.142 0 0 1-3.574-2.183L6.133 33.9l2.88 2.88 8.628-8.63ZM14 25.897a8.125 8.125 0 0 1-1.976-3.686L1.066 25.147 2.12 29.08 14 25.897Z"
            />
            <path
              className="dark:fill-neutral-0 fill-neutral-900"
              d="M53.648 27 50.37 12.48h3.454l2.156 11.814h.242l2.552-11.814H62.8l2.552 11.814h.264l2.156-11.814h3.278L67.728 27h-4.422l-2.464-11.814h-.198L58.18 27h-4.532Zm24.198.308c-.953 0-1.804-.132-2.552-.396a5.14 5.14 0 0 1-1.87-1.144 5.018 5.018 0 0 1-1.188-1.848c-.264-.733-.396-1.562-.396-2.486 0-.91.125-1.745.374-2.508a5.719 5.719 0 0 1 1.144-2.002 5 5 0 0 1 1.826-1.32c.719-.308 1.533-.462 2.442-.462.88 0 1.665.147 2.354.44.69.279 1.262.704 1.716 1.276.47.572.807 1.276 1.012 2.112.22.821.301 1.767.242 2.838l-9.064.088v-1.738l7.238-.066-1.122.88c.103-.777.052-1.415-.154-1.914-.205-.499-.506-.865-.902-1.1a2.386 2.386 0 0 0-1.276-.352c-.557 0-1.048.147-1.474.44-.425.293-.755.726-.99 1.298-.234.557-.352 1.232-.352 2.024 0 1.247.272 2.163.814 2.75.558.587 1.284.88 2.178.88.411 0 .756-.051 1.034-.154.294-.117.528-.264.704-.44.191-.176.338-.374.44-.594.118-.22.213-.44.286-.66l2.75.594a5.262 5.262 0 0 1-.594 1.474c-.249.425-.586.8-1.012 1.122-.425.308-.938.543-1.54.704-.586.176-1.276.264-2.068.264Zm10.143 0c-.645 0-1.217-.125-1.716-.374a2.864 2.864 0 0 1-1.166-1.122c-.279-.484-.418-1.085-.418-1.804 0-.63.117-1.159.352-1.584.25-.425.609-.77 1.078-1.034.47-.264 1.049-.484 1.738-.66.69-.176 1.474-.33 2.354-.462.47-.073.85-.14 1.144-.198.308-.073.535-.183.682-.33.147-.161.22-.389.22-.682 0-.41-.147-.763-.44-1.056-.293-.293-.755-.44-1.386-.44-.425 0-.821.073-1.188.22-.352.147-.66.367-.924.66-.25.293-.433.667-.55 1.122l-2.794-.858a4.982 4.982 0 0 1 .748-1.562c.337-.44.74-.807 1.21-1.1a5.106 5.106 0 0 1 1.606-.682 8.25 8.25 0 0 1 1.958-.22c1.13 0 2.046.183 2.75.55.719.352 1.254.91 1.606 1.672.352.748.528 1.716.528 2.904v1.98c0 .513.007 1.034.022 1.562.03.528.059 1.063.088 1.606L95.623 27H92.83a37.091 37.091 0 0 1-.176-1.254c-.044-.484-.08-.968-.11-1.452h-.396a5.078 5.078 0 0 1-.88 1.518c-.381.455-.85.821-1.408 1.1-.543.264-1.166.396-1.87.396Zm1.342-2.288c.279 0 .557-.051.836-.154.293-.103.572-.242.836-.418.279-.19.528-.425.748-.704.235-.279.425-.594.572-.946l-.044-1.848.506.11c-.264.19-.572.345-.924.462a8.59 8.59 0 0 1-1.1.242c-.367.059-.733.125-1.1.198a5.652 5.652 0 0 0-.99.286 1.8 1.8 0 0 0-.682.484c-.161.19-.242.462-.242.814 0 .455.147.814.44 1.078.293.264.675.396 1.144.396Zm13.111 2.244c-1.29 0-2.244-.337-2.86-1.012-.601-.69-.902-1.782-.902-3.278v-5.038h-1.672l.044-2.486h1.166c.455 0 .792-.066 1.012-.198.22-.132.352-.374.396-.726l.286-1.65h1.804v2.574h2.926v2.574h-2.926v4.818c0 .528.125.91.374 1.144.25.235.631.352 1.144.352.279 0 .543-.03.792-.088a1.91 1.91 0 0 0 .682-.286v2.948a6.552 6.552 0 0 1-1.254.286 8.932 8.932 0 0 1-1.012.066Zm4.454-.264V11.27h3.19v3.608c0 .293-.014.601-.044.924a7.678 7.678 0 0 1-.11.99c-.044.323-.095.653-.154.99-.044.337-.095.675-.154 1.012h.484c.206-.748.462-1.393.77-1.936.323-.543.734-.96 1.232-1.254.499-.308 1.13-.462 1.892-.462 1.35 0 2.362.477 3.036 1.43.675.939 1.012 2.383 1.012 4.334V27h-3.19v-5.61c0-1.232-.183-2.141-.55-2.728-.352-.601-.887-.902-1.606-.902-.586 0-1.07.176-1.452.528-.381.352-.667.829-.858 1.43-.19.587-.3 1.247-.33 1.98V27h-3.168Zm19.247.308c-.953 0-1.804-.132-2.552-.396a5.15 5.15 0 0 1-1.87-1.144 5.028 5.028 0 0 1-1.188-1.848c-.264-.733-.396-1.562-.396-2.486 0-.91.125-1.745.374-2.508a5.73 5.73 0 0 1 1.144-2.002 5.008 5.008 0 0 1 1.826-1.32c.719-.308 1.533-.462 2.442-.462.88 0 1.665.147 2.354.44.69.279 1.262.704 1.716 1.276.47.572.807 1.276 1.012 2.112.22.821.301 1.767.242 2.838l-9.064.088v-1.738l7.238-.066-1.122.88c.103-.777.052-1.415-.154-1.914-.205-.499-.506-.865-.902-1.1a2.383 2.383 0 0 0-1.276-.352c-.557 0-1.048.147-1.474.44-.425.293-.755.726-.99 1.298-.234.557-.352 1.232-.352 2.024 0 1.247.272 2.163.814 2.75.558.587 1.284.88 2.178.88.411 0 .756-.051 1.034-.154.294-.117.528-.264.704-.44.191-.176.338-.374.44-.594.118-.22.213-.44.286-.66l2.75.594a5.262 5.262 0 0 1-.594 1.474c-.249.425-.586.8-1.012 1.122-.425.308-.938.543-1.54.704-.586.176-1.276.264-2.068.264Zm7.415-.308V15.45h2.618l.022 3.938h.418c.118-.983.316-1.782.594-2.398.294-.616.697-1.07 1.21-1.364.514-.293 1.152-.44 1.914-.44.132 0 .272.007.418.022.162 0 .345.022.55.066l-.132 3.366a2.794 2.794 0 0 0-.726-.22 4.33 4.33 0 0 0-.704-.066c-.572 0-1.063.132-1.474.396-.41.264-.748.645-1.012 1.144-.249.484-.418 1.078-.506 1.782V27h-3.19Zm14.764 0V12.48h4.136l6.578 10.274h.242l-.198-10.274h3.08V27h-3.74l-6.952-10.758h-.242L151.424 27h-3.102Zm22.14.308c-1.158 0-2.178-.227-3.058-.682a5.052 5.052 0 0 1-2.068-2.046c-.498-.91-.748-2.039-.748-3.388 0-1.35.25-2.471.748-3.366.514-.895 1.21-1.562 2.09-2.002.895-.455 1.907-.682 3.036-.682 1.159 0 2.178.227 3.058.682a4.845 4.845 0 0 1 2.09 2.046c.514.895.77 2.017.77 3.366 0 1.364-.264 2.5-.792 3.41a4.873 4.873 0 0 1-2.112 2.002c-.88.44-1.884.66-3.014.66Zm.11-2.354c.572 0 1.049-.132 1.43-.396.396-.264.69-.66.88-1.188.206-.543.308-1.195.308-1.958 0-.807-.11-1.489-.33-2.046-.205-.572-.513-1.005-.924-1.298-.41-.308-.931-.462-1.562-.462-.542 0-1.012.132-1.408.396-.396.25-.696.645-.902 1.188-.205.528-.308 1.18-.308 1.958 0 1.247.25 2.193.748 2.838.499.645 1.188.968 2.068.968ZM180.306 27l-2.86-11.55h3.3l1.628 9.042h.418l1.936-9.042h3.806l2.002 9.042h.418l1.584-9.042h3.234L192.89 27h-4.356l-1.804-8.976h-.374L184.64 27h-4.334Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path className="dark:fill-neutral-0 fill-neutral-900" d="M0 0h196.864v40H0z" />
            </clipPath>
          </defs>
        </svg>
        <div className="flex gap-150">
          <button
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} Theme`}
            onClick={switchTheme}
            className={settingsButtonStyle}
          >
            {theme === 'dark' ? (
              <img src="/assets/images/icon-darkmode.svg" alt="" />
            ) : (
              <img src="/assets/images/icon-lightmode.svg" alt="" />
            )}
          </button>
          <button
            onClick={() => toggleDropdown('units-dropdown')}
            aria-expanded={dropdown === 'units-dropdown'}
            aria-controls="units-dropdown"
            className={settingsButtonStyle}
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
          <h1 className="dark:text-neutral-0 text-preset-2 font-Bricolage mobile:max-w-[400px] w-full max-w-[300px] justify-self-center text-center text-neutral-900 md:max-w-full">
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
                {favorites.length !== 0 && (
                  <div className="text-preset-8 absolute -top-1 -right-1 grid h-[18px] w-[18px] place-items-center rounded-full bg-blue-500 leading-2">
                    {favorites.length}
                  </div>
                )}
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
