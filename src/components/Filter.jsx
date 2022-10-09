import '../assets/dashboard.css'

function Filter(props) {

    const continents = ["Asia", "Europe", "Africa", "North America", "South America", "Oceania"];
    console.log("data from filter:")
    console.log(props.data[0])
  return (
    <div className='button-grid'>
        {continents.map(continent => <button>{continent}</button>)}
    </div>
  )
}

export default Filter