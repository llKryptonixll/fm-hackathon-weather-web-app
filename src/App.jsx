import Header from './components/Header'
import AppContent from './components/AppContent'
import { LocationProvider } from './context/LocationContext'
import { WeatherProvider } from './context/WeatherContext'
import { UnitsProvider } from './context/UnitsContext'
import { DropdownProvider } from './context/DropdownContext'

function App() {
  return (
    <div className="font-DMsans mobile:px-300 mobile:pt-300 mobile:pb-1000 min-h-screen bg-neutral-900 px-200 pt-200 pb-600 text-base lg:px-1000 lg:py-600 xl:px-1400 2xl:px-0">
      <LocationProvider>
        <DropdownProvider>
          <UnitsProvider>
            <WeatherProvider>
              <Header />
              <AppContent />
            </WeatherProvider>
          </UnitsProvider>
        </DropdownProvider>
      </LocationProvider>
    </div>
  )
}

export default App
