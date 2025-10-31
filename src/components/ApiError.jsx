import DropdownContext from '../context/DropdownContext'
import { useContext } from 'react'

const ApiError = ({ refetchWeather, refetchLocation, weatherApiError, locationApiError }) => {
  const { openDropdown } = useContext(DropdownContext)

  async function handleRetryClick() {
    try {
      if (locationApiError) {
        const data = await refetchLocation()
        if (data?.results?.length > 0) {
          openDropdown('search-dropdown')
        }
      }
      if (weatherApiError) {
        await refetchWeather()
      }
    } catch (err) {
      console.error('Retry failed:', err)
    }
  }

  return (
    <main className="grid place-items-center gap-300 pt-800 text-center">
      <img className="mt-500 h-[50px] w-[42px]" src="/assets/images/icon-error.svg" alt="Api Error" />
      <h1 className="sm:text-preset-2 text-preset-4 dark:text-neutral-0 font-Bricolage text-neutral-900">
        Something went wrong
      </h1>
      <p className="sm:text-preset-5-medium text-preset-7 max-w-[550px] text-neutral-700 dark:text-neutral-200">
        We couldn’t connect to the server ({weatherApiError?.message || locationApiError?.message}). Please try again in
        a few moments.
      </p>
      <button
        onClick={handleRetryClick}
        className="text-preset-7 text-neutral-0 rounded-8 focus:outline-neutral-0 flex cursor-pointer gap-125 bg-neutral-800 px-200 py-150 transition-colors hover:bg-neutral-700 focus:border-2 focus:border-neutral-900 focus:outline-2"
      >
        <img src="/assets/images/icon-retry.svg" alt="Retry Icon" />
        Retry
      </button>
    </main>
  )
}

export default ApiError
