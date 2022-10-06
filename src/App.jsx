import { useState } from 'react'
import { CountriesContext } from './contexts/CountriesContext'
import Main from './views/Main'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <Navbar/>
      <CountriesContext.Provider value={{countries, setCountries}}>
        <Main/>
      </CountriesContext.Provider>
      <Footer/>
    </div>
  )
}

export default App
