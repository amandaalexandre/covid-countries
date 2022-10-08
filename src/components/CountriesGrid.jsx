import React from 'react'
import CountryCard from './CountryCard'
import { flagUrl } from '../services/api';
import { cruises } from '../services/cruises';

function CountriesGrid(props) {
  const receivedData = props.data
  
  return (
    <div className='countries-grid'>
              {receivedData.map(country => {
                      if (cruises.indexOf(country.Country) == -1) {
                      return <CountryCard 
                              key={country.ThreeLetterSymbol} 
                              name={country.Country}
                              code={country.ThreeLetterSymbol}
                              flag={`${flagUrl}${country.TwoLetterSymbol.toLowerCase()}`}
                              confirmed={country.TotalCases}
                              deaths={country.TotalDeaths}
                              recovered={country.TotalRecovered}
                               />
                   } }
                    
                  )}
</div>
  )
}

export default CountriesGrid