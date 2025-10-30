import Header from './components/Header'
import AppContent from './components/AppContent'
import { LocationProvider } from './context/LocationContext'
import { WeatherProvider } from './context/WeatherContext'
import { UnitsProvider } from './context/UnitsContext'
import { DropdownProvider } from './context/DropdownContext'
import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('dark')

  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div data-theme={theme} className="bg-neutral-0 grid min-h-screen justify-items-center dark:bg-neutral-900">
      <div className="font-DMsans mobile:px-300 mobile:pt-300 mobile:pb-1000 bg-neutral-0 w-full max-w-[1440px] px-200 pt-200 pb-600 text-base lg:px-1000 lg:py-600 xl:px-1400 2xl:px-0 dark:bg-neutral-900">
        <LocationProvider>
          <DropdownProvider>
            <UnitsProvider>
              <WeatherProvider>
                <Header theme={theme} switchTheme={switchTheme} />
                <AppContent />
              </WeatherProvider>
            </UnitsProvider>
          </DropdownProvider>
        </LocationProvider>
      </div>
    </div>
  )
}

export default App
