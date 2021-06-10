import { Link } from 'react-router-dom'

function Countries({countries}) {
  
  return (
    <div>
      {countries ? (
        countries.map((country) => (
          <div key={country.id}>
            <img src={country.image} alt="img not found" />
            <h3>
              <Link to={`/countries/${country.id}`} >{country.name}</Link>
            </h3>
            <h4>{country.continent}</h4>
          </div>
        ))
      ) : (
        <h3>countries not found</h3>
      )}
      {/* <div>
        <button>prev</button>
        <button onClick={nextPage}>next</button>
      </div> */}
    </div>
  );
}

export default Countries
