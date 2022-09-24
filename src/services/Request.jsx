import {React, useState, useEffect} from 'react'
import axios from 'axios'

function Request() {
    // Axios parameters
    const urlCountries = 'https://api.covid19api.com/countries'

    const [countries, setCountries] = useState([]);

    // Makes request with Axios and useEffect
    useEffect(() => {
        axios.get(urlCountries).then(res => {
            console.log(res.data)
            setCountries(res.data);
        })
    }, [])

  return (
    <div>
        {countries.map(country => <p key={country.ISO2}>{country.Country}</p>)}
    </div>
  )
}

export default Request