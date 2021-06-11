import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCountries from "../components/listCountries/ListCountries";
import { getCountries } from "../redux/ducks/countriesDuck";


function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesDB);
    
  useEffect(() => {
    dispatch(getCountries());
    return () => {
      dispatch(getCountries());
    };
  }, [dispatch])

  return (
    <div className="wrapper">
      <ListCountries reduxState={countries} reduxName="db" />
      <button>Volver a cargar los paises</button>
    </div>
  );
}

export default HomePage;



