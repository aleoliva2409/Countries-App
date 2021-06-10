import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCountries from "../components/countries/ListCountries";
import { getCountries } from "../redux/ducks/countriesDuck";


function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesDB);
  // const postActivity = useSelector((state) => state.activities.postActivity)
  
  if (countries[0] === undefined) {
    dispatch(getCountries());
  }

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, [postActivity])


  return (
    <div>
      <ListCountries reduxState={countries} reduxName="db" />
    </div>
  );
}

export default HomePage;



