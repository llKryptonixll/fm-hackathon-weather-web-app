const MainWeatherCard = () => {
  const itemStyles =
    'bg-neutral-800 p-250 flex-1 rounded-12 items-center grid gap-300 border-1 border-neutral-600 leading-none mobile:basis-auto basis-[calc(50%-0.888rem)]'

  return (
    <section>
      <div className="rounded-20 font-DMsan mobile:flex-row mobile:justify-between mobile:bg-[url(/assets/images/bg-today-large.svg)] flex min-h-[286px] flex-col items-center justify-center bg-[url(/assets/images/bg-today-small.svg)] bg-cover bg-center bg-no-repeat px-300">
        <div className="mobile:text-left grid gap-150 text-center">
          <h2 className="text-neutral-0 text-preset-4">Berlin, Germany</h2>
          <p className="text-neutral-0 text-preset-6 opacity-80">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex items-center gap-250">
          <img className="max-w-[120px]" src="assets/images/icon-sunny.webp" alt="" />
          <p className="text-neutral-0 text-preset-1 italic">20°</p>
        </div>
      </div>
      <dl className="mobile:gap-250 flex flex-wrap justify-between gap-200 pt-400 md:gap-300">
        <div className={itemStyles}>
          <dt className="text-preset-6 text-neutral-200">Feels like</dt>
          <dd className="text-preset-3 text-neutral-0">18°</dd>
        </div>
        <div className={itemStyles}>
          <dt className="text-preset-6 text-neutral-200">Humidity</dt>
          <dd className="text-preset-3 text-neutral-0">46%</dd>
        </div>
        <div className={itemStyles}>
          <dt className="text-preset-6 text-neutral-200">Wind</dt>
          <dd className="text-preset-3 text-neutral-0">14 km/h</dd>
        </div>
        <div className={itemStyles}>
          <dt className="text-preset-6 text-neutral-200">Precipitation</dt>
          <dd className="text-preset-3 text-neutral-0">0 mm</dd>
        </div>
      </dl>
    </section>
  )
}

export default MainWeatherCard
