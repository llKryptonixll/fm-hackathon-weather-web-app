export function currentCardDate(currentDate) {
  const date = new Date(currentDate)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })
  const weekday = date.toLocaleString('en-US', { weekday: 'long' })
  const fullDate = `${weekday}, ${month} ${day}, ${year}`
  return fullDate
}

export function getWeekDay(currentDate) {
  const date = new Date(currentDate)
  const weekday = date.toLocaleString('en-US', { weekday: 'short' })
  return weekday
}
