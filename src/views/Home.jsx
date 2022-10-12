import React, { useEffect, useState } from 'react'
import '../assets/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { getWorldData } from '../services/api'
import WorldHero from '../assets/world-hero.png'

function Home() {

  const [worldData, setWorldData] = useState([]);

  useEffect(() => {
    async function fetchWorldData() {
      axios.request(getWorldData)
      .then(res => setWorldData(res.data))
      .catch(err => console.error(err.response.data))
    };

    fetchWorldData();

  }, [])

  console.log(worldData[0])

  return (
    <div className='home'>
     
      <div className='home-hero-title'>
          <h1>Covid-19 Info</h1>
          <h2>Check all cases by country</h2>
          <Link to='/dashboard' ><button>Check data</button></Link>
      </div>
      
    </div>
 
  )
}

export default Home