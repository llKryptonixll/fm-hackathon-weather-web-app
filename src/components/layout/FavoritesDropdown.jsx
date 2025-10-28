const FavoritesDropdown = ({ favorites, getSelectedLocation }) => {
  function handleItemClick(location) {
    getSelectedLocation(location)
  }

  return (
    <ul className="absolute top-16 z-20 min-h-[200px] w-[300px] bg-red-100">
      {favorites.map((fav) => {
        return (
          <li key={fav.latitude} onClick={() => handleItemClick(fav)}>
            {fav.name}
          </li>
        )
      })}
    </ul>
  )
}

export default FavoritesDropdown
