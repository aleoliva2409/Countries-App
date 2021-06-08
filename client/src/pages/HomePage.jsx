import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCountries from "../components/countries/ListCountries";
import { getCountries } from "../redux/ducks/countriesDuck";

function HomePage() {

  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries.countriesDB)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div>
      <ListCountries countries={countries}/>
    </div>
  );
}

export default HomePage;
