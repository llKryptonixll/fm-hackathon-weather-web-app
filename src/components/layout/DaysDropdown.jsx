const DaysDropdown = ({ selectedDay, setSelectedDay, closeDropdown }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  function handleClick(day) {
    setSelectedDay(day)
    closeDropdown()
  }
  console.log(selectedDay)

  return (
    <fieldset className="rounded-12 absolute top-10 right-0 z-30 grid w-[214px] gap-50 border-1 border-neutral-600 bg-neutral-800 p-100">
      <legend className="sr-only">Select Days</legend>
      {days.map((day) => {
        return (
          <label key={day} className="" htmlFor={day}>
            <input
              onChange={() => handleClick(day)}
              className="peer sr-only"
              id={day}
              checked={selectedDay === day}
              type="checkbox"
              name={day}
              value={'day'}
            />
            <span className="rounded-8 text-preset-7 inline-flex w-full cursor-pointer px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
              {day}
            </span>
          </label>
        )
      })}
    </fieldset>
  )
}

export default DaysDropdown
