import React from 'react'
import CountryCard from './CountryCard'
import { CountriesContext } from '../contexts/CountriesContext'

function CountriesGrid(props) {

  console.log(props.data)
  return (
    <div className='countries-grid'>
{/*     {countries.map(country => <CountryCard 
                                key={country.ID} 
                                name={country.Country}
                                code={country.CountryCode}
                                flag={`${flagUrl}${country.CountryCode.toLowerCase()}`}
                                confirmed={country.TotalConfirmed}
                                deaths={country.TotalDeaths}
                                recovered={country.TotalConfirmed - country.TotalDeaths}
                              />
      
    )} */}
</div>
  )
}

export default CountriesGrid