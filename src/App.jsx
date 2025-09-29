import Header from './components/Header'
import { LocationProvider } from './context/LocationContext'
import { WeatherProvider } from './context/WeatherContext'
import { UnitsProvider } from './context/UnitsContext'
import MainWeatherCard from './components/MainWeatherCard'
import DailyForecast from './components/daily-forecast/DailyForecast'
import HourlyForecast from './components/hourly-forecast/HourlyForecast'

function App() {
  return (
    <div className="font-DMsans mobile:px-300 mobile:pt-300 mobile:pb-1000 min-h-screen bg-neutral-900 px-200 pt-200 pb-600 text-base lg:px-1000 lg:py-600 xl:px-1400 2xl:px-0">
      <LocationProvider>
        <UnitsProvider>
          <Header />
          <WeatherProvider>
            <main className="flex flex-wrap gap-400 pt-600">
              <div className="grid flex-1 gap-400">
                <MainWeatherCard />
                <DailyForecast />
              </div>
              <HourlyForecast />
            </main>
          </WeatherProvider>
        </UnitsProvider>
      </LocationProvider>
    </div>
  )
}

export default App
