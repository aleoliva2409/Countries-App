import React from "react";
import { useSelector } from "react-redux";
import ListCountries from "../components/listCountries/ListCountries";

function SearchPage() {
  const countries = useSelector((state) => state.countries.countriesSearch);

  return (
    <div className="wrapper" >
      <ListCountries reduxState={countries} reduxName="search" />
    </div>
  );
}

export default SearchPage;
