import React from 'react'


function CountryCard(props) {
  return (
    <div>
        
        <span className='country-card-title'>
            <h2>{props.name}</h2>
            {props.code} {/* {props.Flag} */}
        </span>
            Confirmed: {props.confirmed}
            Deaths: {props.deaths}
            Recovered: {props.recovered}
        
    </div>
  )
}

export default CountryCard