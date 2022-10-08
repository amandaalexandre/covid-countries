import React from 'react'
import CountryCard from './CountryCard'
import { flagUrl } from '../services/api';

function CountriesGrid(props) {
  const receivedData = props.data

  return (
    <div className='countries-grid'>
      {receivedData.map(country => <CountryCard 
                                key={country.region.iso} 
                                name={country.region.name}
                                code={country.region.iso}
                                flag={`${flagUrl}${country.region.iso.toLowerCase()}`}
                                confirmed={country.confirmed}
                                deaths={country.deaths}
                                recovered={country.confirmed - country.deaths}
                              />
      
    )}
</div>
  )
}

export default CountriesGrid