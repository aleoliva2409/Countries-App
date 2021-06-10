import React from 'react'
import Cards from './Cards'

function Search({countries}) {


  const paginations = () => {

  }

  return (
    <div>
      <div>
        <label htmlFor="country">Search</label>
        <input
          type="text"
          id="country"
          placeholder="Search country..."
        />
      </div>
      <Cards countries={paginations()}/>
      <div>
        <button>prev</button>
        <button>next</button>
      </div>
    </div>
  )
}

export default Search
