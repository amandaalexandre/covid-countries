import '../assets/dashboard.css'
import axios from 'axios';
import { getDataByContinent, api } from '../services/api';
import { useState } from 'react';

export default function Filter({data, filterByContinent, setData}) {
  const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];  
      
  return (
    <div className='button-grid'>
        {continents.map(continent => 
        //API calls Oceania's region solely as 'Australia', so we're adding an exception here
                            <button onClick= { 
                                      continent === 'Oceania' ? 
                                      () => filterByContinent('Australia/Oceania')
                                      : () => filterByContinent(continent)
                                    } 
                              >
                                {continent}
                              </button>
        )
       
      }
     <button onClick={() =>
          api.get('api/npm-covid-data/')
          .then((response) => {setData(response.data)
            setLoading(false)
          })
          .catch((error) => console.error(error))
      }>All</button> 
      </div>
  )
}

