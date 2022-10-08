import React from 'react'
import '../assets/dashboard.css'

function Filter() {

    const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];
    
  return (
    <div className='button-grid'>
        {continents.map(continent => <button>{continent}</button>)}
    </div>
  )
}

export default Filter