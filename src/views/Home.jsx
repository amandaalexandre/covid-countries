import React, { useEffect, useState } from 'react'
import '../assets/home.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { getWorldData } from '../services/api'
import WorldHero from '../assets/world-hero.png'

function Home() {

  const [worldData, setWorldData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWorldData() {
      axios.request(getWorldData)
      .then(res => setWorldData(res.data[0]))
      .then(setLoading(false))
      .catch(err => console.error(err.response.data))
    };

    fetchWorldData();

  }, [])

  console.log(worldData.Case_Fatality_Rate)

  return (
    <div className='home'>
     
      <div className='home-hero-title'>
          <h1>Covid-19 Info</h1>
          <h2>Check all cases by country</h2>
          <Link to='/dashboard' ><button>Check data</button></Link>
      </div>

      <div className={loading ? 'hidden' : 'home-hero-data'} >
          <h2>World Data</h2>
          <b>Deaths: </b> {worldData.TotalDeaths}
          <br/>
          <b>Cases: </b> {worldData.TotalCases}
          <br/>
          <b>Recovered: </b> {worldData.TotalRecovered}
          <br/>
          <b>Deathrate: </b> {worldData.Case_Fatality_Rate} %
      </div>
      
    </div>
 
  )
}

export default Home