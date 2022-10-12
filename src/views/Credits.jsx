import React from 'react'
import '../assets/credits.css'

function Credits() {
  return (
    <div className='credits'>
      <h1>Credits</h1>
      <b>Developer:</b> <a href="https://www.linkedin.com/in/amandavieiradev/">Amanda Vieira</a>
      <br/>
      <b>API for Covid data: </b><a href="https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker/">VACCOVID - coronavirus, vaccine and treatment tracker</a>
      <br/>
      <b>Stack: </b>React, React Router, vanilla CSS
      <p><a href="https://www.freepik.com/free-vector/illustration-global-icon_2687446.htm#query=world&position=1&from_view=search">World Image by rawpixel.com</a> on Freepik</p>
    </div>
  )
}

export default Credits