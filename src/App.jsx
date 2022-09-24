import { useState } from 'react'
import './App.css'
import { CountriesContext } from './contexts/CountriesContext'
import Main from './views/Main'
import Navbar from './components/Navbar'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <Navbar/>
      <CountriesContext.Provider value={{countries, setCountries}}>
        <Main/>
      </CountriesContext.Provider>
      
    </div>
  )
}

export default App
