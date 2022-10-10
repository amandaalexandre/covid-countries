import '../assets/dashboard.css'
import axios from 'axios';
import { getDataByContinent, getAllData } from '../services/api';
import { useState } from 'react';

export default function Filter({data, filterByContinent, setData}) {
  const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];  
      
  return (
    <div className='button-grid'>
        {continents.map(continent => //API calls Oceania's region solely as 'Australia', so we're adding an exception here
                            <button onClick= { 
                                      continent === 'Oceania' ? 
                                      () => filterByContinent('australia')
                                      : () => filterByContinent(continent.toLowerCase().replaceAll(" ", ""))
                                    } 
                              >
                                {continent}
                              </button>
        )
       
      }
     {/*  <button onClick={() =>
        
          axios.request(getAllData)
          .then(res => {
                          //console.log(res.data)
                          setCountries(res.data)
                          setLoading(false)
                      })
          .catch(err => console.error(err))
        
      }>All</button> */}
      </div>
  )
}

