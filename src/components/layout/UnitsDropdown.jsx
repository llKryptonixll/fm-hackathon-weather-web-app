import { useRef, useContext, useEffect } from 'react'
import UnitsContext from '../../context/UnitsContext'

const UnitsDropdown = ({ closeDropdown }) => {
  const { metric, units, onChange, switchMetric } = useContext(UnitsContext)
  const dropdownRef = useRef(null)

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown('units-dropdown')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="rounded-12 absolute top-[55px] right-0 z-100 w-full max-w-[214px] border-1 border-neutral-600 bg-neutral-800 px-100 py-75 text-white"
    >
      <button
        onClick={switchMetric}
        className="text-neutral-0 text-preset-7 rounded-8 focus:outline-neutral-0 w-full cursor-pointer px-100 py-125 text-left transition-colors hover:bg-neutral-700 focus:border-1 focus:border-neutral-900 focus:outline-1"
        id="unit-toggle"
        aria-pressed="false"
      >
        Switch to {metric ? 'Imperial' : 'Metric'}
      </button>

      <fieldset className="grid gap-50">
        <legend className="text-preset-7 px-100 pt-75 pb-100 text-neutral-300">Temperature</legend>
        <label className="cursor-pointer">
          <input
            checked={units.temperature === 'Celsius'}
            type="radio"
            onChange={() => onChange('temperature', 'Celsius')}
            name="temperature"
            value="celsius"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            Celsius (°C)
          </span>
        </label>

        <label className="cursor-pointer border-b-1 border-neutral-600 pb-75">
          <input
            checked={units.temperature === 'Fahrenheit'}
            type="radio"
            onChange={() => onChange('temperature', 'Fahrenheit')}
            name="temperature"
            value="fahrenheit"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            Fahrenheit (°F)
          </span>
        </label>
      </fieldset>

      <fieldset className="grid gap-50">
        <legend className="text-preset-7 px-100 pt-150 pb-100 text-neutral-300">Wind Speed</legend>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="wind"
            checked={units.windSpeed === 'km/h'}
            onChange={() => onChange('windSpeed', 'km/h')}
            value="km/h"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            km/h
          </span>
        </label>

        <label className="cursor-pointer border-b-1 border-neutral-600 pb-75">
          <input
            type="radio"
            checked={units.windSpeed === 'mph'}
            onChange={() => onChange('windSpeed', 'mph')}
            name="wind"
            value="mph"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            mph
          </span>
        </label>
      </fieldset>

      <fieldset className="grid gap-50">
        <legend className="text-preset-7 px-100 pt-150 pb-100 text-neutral-300">Precipitation</legend>
        <label className="cursor-pointer">
          <input
            checked={units.precipitation === 'mm'}
            onChange={() => onChange('precipitation', 'mm')}
            type="radio"
            name="precipitation"
            value="mm"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 rounded-8 inline-block w-full px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            Millimeters (mm)
          </span>
        </label>

        <label className="cursor-pointer">
          <input
            checked={units.precipitation === 'in'}
            onChange={() => onChange('precipitation', 'in')}
            type="radio"
            name="precipitation"
            value="inches"
            className="peer sr-only"
          />
          <span className="text-preset-7 text-neutral-0 inline-block w-full rounded px-100 py-125 transition-colors peer-checked:bg-neutral-700 hover:bg-neutral-700">
            Inches (in)
          </span>
        </label>
      </fieldset>
    </div>
  )
}

export default UnitsDropdown
