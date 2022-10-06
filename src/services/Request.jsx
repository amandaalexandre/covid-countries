import {useState, useEffect, useContext} from 'react'
import { CountriesContext } from '../contexts/CountriesContext'
import axios from 'axios'
import CountryCard from '../components/CountryCard'

function Request() {
    // Axios parameters
    const urlSummary = 'https://api.covid19api.com/summary'
    const urlCountries = 'https://api.covid19api.com/countries'
    
    const {countries, setCountries} = useContext(CountriesContext);

    // Requests all countries' data
    useEffect(() => {
        axios.get(urlSummary)
        .then(res => setCountries(res.data.Countries))
        
    }, [])

    //Flags endpoints
    const flagUrl = 'https://countryflagsapi.com/png/'

  return (
    <div className='countries-grid'>
        {countries.map(country => <CountryCard 
                                    key={country.ID} 
                                    name={country.Country}
                                    code={country.CountryCode}
                                    flag={`${flagUrl}${country.CountryCode.toLowerCase()}`}
                                    confirmed={country.TotalConfirmed}
                                    deaths={country.TotalDeaths}
                                    recovered={country.TotalConfirmed - country.TotalDeaths}
                                  />
          
        )}
    </div>
  )
}

export default Request