import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCountries from "../components/listCountries/ListCountries";
import { getCountries } from "../redux/ducks/countriesDuck";


function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesDB);
  // const postActivity = useSelector((state) => state.activities.postActivity)
  
  useEffect(() => {
    if (countries[0] === undefined) {
      dispatch(getCountries());
    }
  }, [dispatch,countries])

  

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, [postActivity])

  return (
    <div className="wrapper">
      <ListCountries reduxState={countries} reduxName="db" />
    </div>
  );
}

export default HomePage;



