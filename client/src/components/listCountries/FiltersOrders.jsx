import s from '../../sass/listCountries/ListCountries.module.sass'
import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  filterByContinent,
  filterByActivity,
  sortByAlphabetical,
  sortByPopulation
} from "../../redux/ducks/countriesDuck";

function FiltersOrders({ reduxName, countries ,change }) {
  const [filters, setFilters] = useState({
    showFilter: null,
    filter: "",
    nameFilter: "",
  });
  const [sorts, setSorts] = useState({
    showSort: null,
    sort: "",
    nameSort: "",
  });
  const dispatch = useDispatch();

  const getActivities = countries.map((country) => {
    let array = [];

    if (country.activities[0] === undefined) {
      return array;
    }

    country.activities.forEach((act) => {
      array.push(act.name);
    });
    return array;
  });

  const activities = getActivities.flat().filter((act, index) => {
    return getActivities.flat().indexOf(act) === index;
  });

  const handleFilter = (e) => {
    if (e.target.value === "continent") {
      setFilters({
        ...filters,
        filter: e.target.value,
        showFilter: true,
        nameFilter: "",
      });
    } else {
      setFilters({
        ...filters,
        filter: e.target.value,
        showFilter: false,
        nameFilter: "",
      });
    }
  };

  const toNameFilter = (e) => {
    setFilters({
      ...filters,
      nameFilter: e.target.value,
    });
  };

  const sendFilter = (e) => {
    if (filters.filter === "continent") {
      dispatch(filterByContinent(filters.nameFilter, countries, reduxName));
    } else {
      dispatch(filterByActivity(filters.nameFilter, countries, reduxName));
    }
    change(0)
    e.preventDefault();
  };

  const handleSort = (e) => {
    if(e.target.value === "alphabetical") {
      setSorts({
        ...sorts,
        showSort: true,
        nameSort: e.target.value
      })
    } else {
      setSorts({
        ...sorts,
        showSort: false,
        nameSort: e.target.value
      })
    }
  };

  const toSort = (e) => {
    setSorts({
      ...sorts,
      sort: e.target.value
    })
  }

  const sendSort = (e) => {
    if(sorts.nameSort === "alphabetical") {
      dispatch(sortByAlphabetical(countries,reduxName,sorts.sort))
    } else {
      dispatch(sortByPopulation(countries,reduxName,sorts.sort))
    }
    change(0)
    e.preventDefault()
  }

  return (
    <div className={s.form__container}>
      <form className={s.form} onSubmit={sendFilter}>
        {/* <div className=""> */}
          <select
            name="filter"
            id="filter"
            className={s.select}
            onChange={handleFilter}
            defaultValue="DEFAULT"
          >
            <option
              value="DEFAULT" disabled>
              Filter by 
            </option>
            <option value="continent">Continent</option>
            <option value="activity">Activity</option>
          </select>
        {/* </div> */}
        {filters.filter === "continent" && (
          // <div className="">
            <select
              name="continent"
              id="continent"
              className={s.select}
              onChange={toNameFilter}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Choose
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="Polar">Polar</option>
            </select>
          // </div>
        )}
        {filters.filter === "activity" && (
          // <div className="">
            <select
              name="activity"
              id="activity"
              className={s.select}
              onChange={toNameFilter}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Choose
              </option>
              {activities &&
                activities.map((act, i) => (
                  <option key={i} value={act}>
                    {act[0].toUpperCase() + act.substring(1)}
                  </option>
                ))}
            </select>
          // </div>
        )}
        {filters.showFilter !== null && <button className={s.btn}>Filter</button>}
      </form>
      <form
        className={s.form}
        onSubmit={sendSort}>
        {/* <div className=""> */}
          <select
            name="sort"
            id="sort"
            className={s.select}
            onChange={handleSort}
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>
              Sort by
            </option>
            <option value="alphabetical">Alphabetical</option>
            <option value="population">Population</option>
          </select>
        {/* </div> */}
        {sorts.showSort !== null && (
          <Fragment>
            {/* <div className=""> */}
              <select
                name="typeSort"
                id="typeSort"
                className={s.select}
                onChange={toSort}
                defaultValue="DEFAULT"
              >
                <option value="DEFAULT" disabled>
                  Choose
                </option>
                <option value="ascendent">Ascendent</option>
                <option value="descendent">Descendent</option>
              </select>
            {/* </div> */}
            <button className={s.btn}>Sort</button>
          </Fragment>
        )}
      </form>
    </div>
  );
}

export default FiltersOrders;
