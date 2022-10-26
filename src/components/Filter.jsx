import '../assets/dashboard.css'
import axios from 'axios';
import { getDataByContinent, api } from '../services/api';
import { useState } from 'react';

export default function Filter({getAllData, filterByContinent}) {
  const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];  
      
  return (
    <div className='button-grid'>
        {continents.map(continent => 
        //API calls Oceania's region solely as 'Australia', so we're adding an exception here
                            <button onClick= { 
                                      continent === 'Oceania' ? 
                                      () => filterByContinent('australia')
                                      : () => filterByContinent(continent.toLowerCase().replace(" ",""))
                                    } 
                              >
                                {continent}
                              </button>
        )
       
      }
     <button onClick={() =>
              getAllData()
      }>All</button> 
      </div>
  )
}

