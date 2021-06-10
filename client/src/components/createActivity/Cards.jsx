import React from 'react'
import Keywords from './Keywords'

function Cards({countries}) {

  const filteredCountries = () => {

  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>img</td>
            <td>NameCuntry</td>
            <td>button</td>
          </tr>
        </tbody>
      </table>
      <Keywords countriesAdded={filteredCountries} />
    </div>
  )
}

export default Cards
