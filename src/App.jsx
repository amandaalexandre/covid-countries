import { useState } from 'react'
import './App.css'
import { CountriesContext } from './contexts/CountriesContext'
import Main from './views/Main'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <CountriesContext.Provider value={{countries, setCountries}}>
        <Main/>
      </CountriesContext.Provider>
      
    </div>
  )
}

export default App
