import React from 'react'
import '../assets/home.css'
import CovidImg from '../assets/covid_hero_image.png'
import {Link} from 'react-router-dom'
import { Dashboard } from '@mui/icons-material'

function Home() {
  return (
    <div className='home'>
      <div className='home-hero'>

        <div className='home-hero-title'>
          <h1>Covid-19 Info</h1>
          <h2>Check all cases by country</h2>
          <Link to='/dashboard' ><button>Check data</button></Link>
        </div>

        <div className='home-hero-rotate-container'>
          <div className='home-hero-square-white'></div>
          <div className='home-hero-square-blue'>
            <img src={CovidImg} className='home-hero-covid-img' />
          </div>
      
        </div>
      
      </div>
    </div>
  )
}

export default Home