import '../assets/dashboard.css'
import {useState} from 'react'

function Search({data, setData}) {
  const [countrySearched, setCountrySearched] = useState();

  function getCountryName (event) {
    setCountrySearched(event.target.value)
  }

  function searchCountry () {
    //getCountryList
    //Validates if country is in country list
    //get country code
    //makes API call
    console.log(countrySearched)
    //setData([])
  }

  return (
    <div>
      <form className='dashboard-form'>
        <input type="text" className='dashboard-search' onChange={getCountryName}/>
        <button onClick={searchCountry}>Search</button>
      </form>
    </div>
  )
}

export default Search