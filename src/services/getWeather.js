async function getWeather(long, lat) {
  try {
    const baseUrl = 'https://api.open-meteo.com/v1/forecast'
    const params = new URLSearchParams({
      latitude: lat,
      longitude: long,
      hourly: 'temperature_2m,weather_code',
      daily: 'temperature_2m_max,temperature_2m_min,weather_code',
      current:
        'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,is_day,weather_code', // remove "code" to force an error
      timezone: 'auto',
    })

    const response = await fetch(`${baseUrl}?${params.toString()}`)

    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Weather API fetch failed:', error.message)
    throw error
  }
}

export default getWeather
