
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { getAllData, getDataByContinent, getCountryList, getDataByCountry } from '../services/api'
import CountriesGrid from '../components/CountriesGrid'
import Filter from '../components/Filter'
import axios from 'axios'

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Data is loading...")

  const showData = loading ? message : <CountriesGrid countries={countries} />

  useEffect(() => {
      async function fetchData() {
        axios.request(getAllData)
          .then(res => {
                          console.log(res.data)
                          setCountries(res.data)
                          setLoading(false)
                      })
          .then(getCountryList())
          .catch(err => console.error(err.response.data))
    };

    fetchData();
  }, [])

  //The original data doesn't link the countries to their respective regions, so we'll need another API call (they do have an endpoint for each region)
  const filterByContinent = (selectedContinent) => {  
    axios.request(getDataByContinent(selectedContinent))
    .then(res => setCountries(res.data))
    .catch(err => console.error(err))
  }

  //The original data doesn't link the countries to their respective regions, so we'll need another API call (they do have an endpoint for each region)
  const getCountryByName = (countryName) => {  
    axios.request(getDataByContinent(countryName))
    .then(res => setCountries(res.data))
    .catch(err => console.error(err))
  }
   
  return (
 
      <div>
        <h1>Data by Countries</h1>
        <Filter data={countries} filterByContinent={filterByContinent} setData={setCountries}/>
        <Search data={countries} searchByCountry={getCountryByName} setData={setCountries} /> 
        {showData}
    </div>

  )
}

export default Dashboard