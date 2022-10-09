import '../assets/dashboard.css'

function Search({data, setCountries}) {

  return (
    <div className='dashboard-form'>
    <input type="text" className='dashboard-search' />
    <button>Search</button>

  </div>
  )
}

export default Search