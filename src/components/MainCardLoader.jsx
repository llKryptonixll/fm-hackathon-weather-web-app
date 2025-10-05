const MainCardLoader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="grid h-full w-full place-items-center items-center justify-center gap-200"
    >
      <div className="flex gap-125">
        <div className="bg-neutral-0 h-[12px] w-[12px] animate-bounce rounded-full [animation-delay:-0.3s]"></div>
        <div className="bg-neutral-0 h-[12px] w-[12px] animate-bounce rounded-full [animation-delay:-0.15s]"></div>
        <div className="bg-neutral-0 h-[12px] w-[12px] animate-bounce rounded-full"></div>
      </div>
      <span className="text-preset-6 text-neutral-200">Loading...</span>
    </div>
  )
}

export default MainCardLoader
