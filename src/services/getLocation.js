async function getLocation(query) {
  try {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`)

    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('getLocation error:', error)
  }
}

export default getLocation
