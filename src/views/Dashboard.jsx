import React from 'react'
import Search from '../components/Search'
import { useState, useEffect } from 'react'
import getReport from '../services/api'
import CountriesGrid from '../components/CountriesGrid'

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Data is loading...")

  const showData = loading ? message : <CountriesGrid data={countries} />

  useEffect(() => {
      async function fetchData() {
      const result = await getReport();
      //displays response in console correctly

      setCountries(result.data)
      setLoading(false)
    };

    fetchData();
  }, [])
   
  return (
    <div>
        <h1>Data by Countries</h1>
     {/*    <Search/> */}
        {showData}
    </div>
  )
}

export default Dashboard