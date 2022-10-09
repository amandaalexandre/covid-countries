import { useEffect, useState } from 'react'
import Search from '../components/Search'
import { getAllData, getDataByContinent } from '../services/api'
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
          .catch(err => console.error(err))
    };

    fetchData();
  }, [])

  //The original data doesn't link the countries to their respective regions, so we'll need another API call (they do have an endpoint for each region)
  const filterByContinent = (selectedContinent) => {
    console.log(selectedContinent)
    
    axios.request(getDataByContinent(selectedContinent))
/*     .then(res => console.log(res.data))  */
    .then(res => setCountries(res.data))
    .catch(err => console.error(err))
  }
   
  return (
 
      <div>
        <h1>Data by Countries</h1>
        <Filter data={countries} filterByContinent={filterByContinent} />
        <Search data={countries} setCountries={setCountries} /> 
        {showData}
    </div>

  )
}

export default Dashboard