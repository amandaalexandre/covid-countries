import {useState, useEffect, useContext} from 'react'
import { CountriesContext } from '../contexts/CountriesContext'
import axios from 'axios'

function Request() {
    // Axios parameters
    const urlSummary = 'https://api.covid19api.com/summary'
    const urlCountries = 'https://api.covid19api.com/countries'
    
    const {countries, setCountries} = useContext(CountriesContext);

    // Requests all countries' names
    useEffect(() => {
        axios.get(urlCountries).then(res => {
            setCountries(res.data);
        })
    }, [])

  return (
    <div className='countries-grid'>
        {countries.map(country => <p key={country.ISO2}>{country.Country}</p>)}
    </div>
  )
}

export default Request