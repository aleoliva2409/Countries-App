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

  const reload = () => {
    dispatch(getCountries());
  }

  return (
    <div className="wrapper">
      <ListCountries reduxState={countries} reduxName="db" />
      <div className={`btn__container ${countries[0] === undefined ? "d__none" : "d__block"}`}>
        <button className="btn" onClick={reload}>Volver a cargar los paises</button>
      </div>
    </div>
  );
}

export default HomePage;



