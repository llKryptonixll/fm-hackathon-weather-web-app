const DaysDropdown = () => {
  const days = ['Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday', 'Sonntag']
  return (
    <fieldset className="rounded-12 absolute top-10 right-0 z-30 grid h-[313px] w-[214px] gap-50 border-1 border-neutral-600 bg-neutral-800 p-100">
      <legend className="sr-only">Select Days</legend>
      {days.map((day) => {
        return (
          <>
            <label
              className="rounded-8 inline-flex w-full cursor-pointer px-100 py-125 transition-colors hover:bg-neutral-700"
              htmlFor="day"
            >
              <input className="sr-only" id="day" type="checkbox" name="day" value={'day'} />
              <span className="text-preset-7 text-neutral-0">{day}</span>
            </label>
          </>
        )
      })}
    </fieldset>
  )
}

export default DaysDropdown
