const Dropdown = ({ variant, isOpen, locations, closeDropdown, getSelectedLocation }) => {
  const customScrollbarStyles =
    '[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-500'
  const searchDropdownStyles = `${customScrollbarStyles} bg-neutral-800 top-16 w-full h-[164px] rounded-12 p-100 border-1 border-neutral-700 overflow-y-scroll`

  function handleItemClick(location) {
    getSelectedLocation(location)
    closeDropdown('search-dropdown')
  }

  if (variant === 'units-dropdown') {
    return isOpen ? (
      <div className="rounded-12 absolute top-[55px] right-0 z-100 w-full max-w-[214px] border-1 border-neutral-600 bg-neutral-800 px-100 py-75 text-white">
        <button className="text-neutral-0 text-preset-6 px-100 py-125" id="unit-toggle" aria-pressed="false">
          Switch to Imperial
        </button>

        <fieldset className="grid gap-50">
          <legend className="text-preset-7 px-100 pt-75 pb-100 text-neutral-300">Temperature</legend>
          <label className="cursor-pointer">
            <input type="radio" name="temperature" value="celsius" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 peer-checked:bg-neutral-700">
              Celsius (°C)
            </span>
          </label>

          <label className="cursor-pointer border-b-1 border-neutral-600 pb-75">
            <input type="radio" name="temperature" value="fahrenheit" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 peer-checked:bg-neutral-700">
              Fahrenheit (°F)
            </span>
          </label>
        </fieldset>

        <fieldset className="grid gap-50">
          <legend className="text-preset-7 px-100 pt-150 pb-100 text-neutral-300">Wind Speed</legend>
          <label className="cursor-pointer pb-75">
            <input type="radio" name="wind" value="kmh" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 peer-checked:bg-neutral-700">
              km/h
            </span>
          </label>

          <label className="cursor-pointer border-b-1 border-neutral-600">
            <input type="radio" name="wind" value="mph" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 peer-checked:bg-neutral-700">
              mph
            </span>
          </label>
        </fieldset>

        <fieldset className="grid gap-50">
          <legend className="text-preset-7 px-100 pt-150 pb-100 text-neutral-300">Precipitation</legend>
          <label className="cursor-pointer">
            <input type="radio" name="precipitation" value="mm" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 peer-checked:bg-neutral-700">
              Millimeters (mm)
            </span>
          </label>

          <label className="cursor-pointer">
            <input type="radio" name="precipitation" value="inches" className="peer sr-only" />
            <span className="text-preset-6 text-neutral-0 inline-block w-full rounded px-100 py-125 peer-checked:bg-neutral-700">
              Inches (in)
            </span>
          </label>
        </fieldset>
      </div>
    ) : null
  }

  // Fallback for other variants
  return isOpen ? (
    <ul className={variant === 'search-dropdown' ? searchDropdownStyles : ''}>
      {locations &&
        locations.results &&
        locations.results.map((location) => (
          <li
            onClick={() => handleItemClick(location)}
            key={location.id}
            className="text-neutral-0 text-preset-6 rounded-8 cursor-pointer border-1 border-transparent px-100 py-125 transition-colors hover:border-neutral-600 hover:bg-neutral-700"
          >
            {location.name}, {location.country_code}
          </li>
        ))}
    </ul>
  ) : null
}

export default Dropdown
