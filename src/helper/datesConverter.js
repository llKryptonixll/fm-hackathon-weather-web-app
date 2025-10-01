export function currentDate(currentDate) {
  const date = new Date(currentDate)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'short' })
  const weekday = date.toLocaleString('en-US', { weekday: 'long' })
  const fullDate = `${weekday}, ${month} ${day}, ${year}`
  return fullDate
}

export function getWeekDay(currentDate, format) {
  const date = new Date(currentDate)
  const weekday = date.toLocaleString('en-US', { weekday: format })
  return weekday
}

export function getHour(currentDate) {
  const date = new Date(currentDate)
  let hour = date.getHours() % 12 || 12 // 0 → 12, 13 → 1, 15 → 3
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM'
  return `${hour} ${ampm}`
}
