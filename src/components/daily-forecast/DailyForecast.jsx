import DailyForeacastItem from './DailyForecastItem'

const DailyForecast = () => {
  const items = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']
  return (
    <section className="self-end">
      <h2 className="text-neutral-0 text-preset-5-medium">Daily forecast</h2>
      <dl className="flex flex-wrap items-center gap-200 pt-250">
        {items.map((item) => {
          return <DailyForeacastItem key={item} item={item} />
        })}
      </dl>
    </section>
  )
}

export default DailyForecast
