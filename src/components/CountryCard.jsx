import React from 'react'
import '../assets/card.css'

function CountryCard(props) {
  return (
    <div className='card'>
        
        
            <h2>{props.name}</h2>
            {/* After adding the flag, delete the country code */}
            <img src={props.flag} className='card-flag'/>
            <span className='card-data-title'>Confirmed: </span> <span className='card-data-info'>{props.confirmed}</span>
            <span className='card-data-title'>Deaths:</span> <span className='card-data-info'>{props.deaths}</span>
            <span className='card-data-title'>Recovered:</span> <span className='card-data-info'>{props.recovered}</span>
        
    </div>
  )
}

export default CountryCard