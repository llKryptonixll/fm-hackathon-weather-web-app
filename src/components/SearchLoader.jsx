const SearchLoader = () => {
  return (
    <div className="rounded-12 text-neutral-0 absolute top-16 flex h-full w-full items-center gap-50 border-1 border-neutral-700 bg-neutral-800 p-100">
      <div role="status" aria-live="polite" aria-label="Search in progress">
        <div className="pointer-events-none flex items-center gap-50">
          <svg
            width="16"
            height="19"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="animate-spin-slow"
          >
            <title>Search in progress</title>
            <g>
              <circle cx="24" cy="6" r="3" className="fill-current" />
              <circle cx="36.97" cy="11.03" r="3" className="fill-current" />
              <circle cx="42" cy="24" r="3" className="fill-current" />
              <circle cx="36.97" cy="36.97" r="3" className="fill-current" />
              <circle cx="24" cy="42" r="3" className="fill-current" />
              <circle cx="11.03" cy="36.97" r="3" className="fill-current" />
              <circle cx="6" cy="24" r="3" className="fill-current" />
            </g>
          </svg>
          <span className="text-neutral-0 text-preset-7">Search in progress</span>
        </div>
      </div>
    </div>
  )
}

export default SearchLoader
