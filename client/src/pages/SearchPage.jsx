import React from 'react'
import { useSelector } from 'react-redux'
import ListCountries from '../components/countries/ListCountries'

function SearchPage() {
  const countries = useSelector(state => state.countries.countriesSearch)

  return (
    <div>
      <ListCountries countries={countries}/>
    </div>
  )
}

export default SearchPage
