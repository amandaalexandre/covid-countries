import React from 'react'
import { CountriesContext } from '../contexts/CountriesContext'
import { useContext } from 'react'

function Search() {
    const {countries, setCountries} = useContext(CountriesContext);

    //setCountries only whose name match with search input
    
  return (
    <div className='dashboard-form'>
    <input type="text" className='dashboard-search' />
    <button>Search</button>
  </div>
  )
}

export default Search