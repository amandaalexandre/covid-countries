
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { api, getDataByContinent } from '../services/api'
import CountriesGrid from '../components/CountriesGrid'
import Filter from '../components/Filter'
import axios from 'axios'

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Data is loading...")

  const showData = loading ? message : <CountriesGrid countries={countries} />

  const getData = async () => {
    api.get('api/npm-covid-data/')
          .then((response) => {
            console.log(response.data)
            setCountries(response.data)
            setLoading(false)            
          })
          .catch(error => console.error(error))
        }

  useEffect(() => {
          getData()
  }, [])

  const filterByContinent = (selectedContinent) => {
    console.log(selectedContinent)
    setLoading(true)
    api.get(`api/npm-covid-data/${selectedContinent}`)
        .then(response => {
          setCountries(response.data)
          setLoading(false)
        })
  }

  
  return (
 
      <div>
        <h1>Data by Countries</h1>
        <Filter getAllData={getData} filterByContinent={filterByContinent} />
        {/* <Search data={countries} searchByCountry={getCountryByName} setData={setCountries} />  */} 
        {showData}
    </div>

  )
}

export default Dashboard