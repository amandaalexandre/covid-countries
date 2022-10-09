import '../assets/dashboard.css'

function Search(props) {
    //setCountries only with those countries whose name match with search input
    console.log("data from search:")
    console.log(props.data[0])

  return (
    <div className='dashboard-form'>
    <input type="text" className='dashboard-search' />
    <button>Search</button>

  </div>
  )
}

export default Search