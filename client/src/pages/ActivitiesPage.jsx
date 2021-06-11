import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListActivities from "../components/activities/ListActivities";
import { getCountries } from "../redux/ducks/countriesDuck";

function ActivitiesPage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesDB);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const getActivities = countries.map((country) => {
    let array = [];

    if (country.activities[0] === undefined) {
      return array;
    }

    country.activities.forEach((act) => {
      array.push(act);
    });
    return array;
  });

  let aux = {};

  const activities = getActivities
    .flat()
    .filter((act) => (aux[act.id] ? false : (aux[act.id] = true))); 

  return (
    <div className="wrapper">
      <h1>Activities Page</h1>
      <ListActivities activities={activities} />
    </div>
  );
}

export default ActivitiesPage;
