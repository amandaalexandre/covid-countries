import '../assets/dashboard.css'
import axios from 'axios';
import { getDataByContinent } from '../services/api';
import { useState } from 'react';

export default function Filter({data, filterByContinent}) {
  const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];  
      
  return (
    <div className='button-grid'>
        {continents.map(continent => //API calls Oceania's region solely as 'Australia', so we're adding an exception here
                            <button onClick= { 
                                      continent === 'Oceania' ? 
                                      () => filterByContinent('australia')
                                      : () => filterByContinent(continent.toLowerCase().replaceAll(" ", ""))
                                    } //fim do ternário
                                   
                     
                              >
                                {continent}
                              </button>
        )
       
      }
      </div>
  )
}

