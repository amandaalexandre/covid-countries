import { useState } from 'react'
import { CountriesContext } from './contexts/CountriesContext'
import Dashboard from './views/Dashboard'
import Credits from './views/Credits'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  //adding global state for primitive data
  const [countries, setCountries] = useState([]);

  //Routes for the navigation menu

  return (

      <div className="App">
        <Navbar/>
        
        
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/dashboard' element={
            <CountriesContext.Provider value={{countries, setCountries}}>
              <Dashboard/>
            </CountriesContext.Provider>
            } />
            <Route path='/credits' element={<Credits/>} />
          </Routes>
        
        <Footer/>
      </div>

  )
}

export default App
