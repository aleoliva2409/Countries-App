import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListCountries from "../components/listCountries/ListCountries";
import { cleanCountriesSearch } from "../redux/ducks/countriesDuck";

function SearchPage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesSearch);

  useEffect(() => {
    return () => {
      dispatch(cleanCountriesSearch());
    };
  }, [dispatch]);

  return (
    <div className="wrapper">
      <ListCountries reduxState={countries} reduxName="search" />
    </div>
  );
}

export default SearchPage;
