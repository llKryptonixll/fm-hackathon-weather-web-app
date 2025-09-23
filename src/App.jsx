import Header from './components/Header'
import { LocationProvider } from './context/LocationContext'
import { useState } from 'react'

function App() {
  return (
    <div className="font-DMsans mobile:px-300 mobile:pt-300 mobile:pb-1000 min-h-screen bg-neutral-900 px-200 pt-200 pb-600 text-base md:px-1400 md:py-600">
      <LocationProvider>
        <Header />
      </LocationProvider>
    </div>
  )
}

export default App
