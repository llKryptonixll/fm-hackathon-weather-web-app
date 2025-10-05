const SearchDropdown = ({ closeDropdown, locations, getSelectedLocation }) => {
  const searchDropdownStyles =
    'custom-scrollbar bg-neutral-800 absolute top-16 w-full h-[184px] rounded-12 p-100 border-1 border-neutral-700 overflow-y-scroll'

  function handleItemClick(location) {
    getSelectedLocation(location)
    closeDropdown('search-dropdown')
  }
  return (
    <ul className={searchDropdownStyles}>
      {locations &&
        locations.results &&
        locations.results.map((location) => (
          <li
            tabIndex={0}
            onClick={() => handleItemClick(location)}
            key={location.id}
            className="text-neutral-0 text-preset-7 rounded-8 cursor-pointer border-1 border-transparent px-100 py-125 transition-colors hover:border-neutral-600 hover:bg-neutral-700"
          >
            {location.name}, {location.country_code}
          </li>
        ))}
    </ul>
  )
}

export default SearchDropdown
