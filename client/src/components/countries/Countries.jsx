import React from 'react'

function Countries({countries}) {
  return (
    <div>
      {
        countries ? countries.map(country => (
          <div key={country.id}>
            <img src={country.image} alt="img not found" />
            <h3>{country.name}</h3>
            <h4>{country.continent}</h4>
          </div>
        )) :
        <h3>countries not found</h3>
      }
    </div>
  )
}

export default Countries
