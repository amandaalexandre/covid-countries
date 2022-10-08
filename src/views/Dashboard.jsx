import React from 'react'
import Search from '../components/Search'
import { useState, useEffect } from 'react'
import { getAllData } from '../services/api'
import CountriesGrid from '../components/CountriesGrid'
import Filter from '../components/Filter'
import axios from 'axios'

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Data is loading...")

  const showData = loading ? message : <CountriesGrid data={countries} />

  useEffect(() => {
      async function fetchData() {
        axios.request(getAllData)
          .then(res => {
                          console.log(res.data)
                          setCountries(res.data)
                          setLoading(false)
                      })
          .catch(err => console.error(err))
    };

    fetchData();
  }, [])
   
  return (
    <div>
        <h1>Data by Countries</h1>
        <Filter/>
        <Search/> 
        {showData}
    </div>
  )
}

export default Dashboard