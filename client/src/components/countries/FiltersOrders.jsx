import React, { useState } from "react";
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

  // TODO actualizar las activities y continentes de los paises que resultan de la busqueda

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
    <div>
      <form onSubmit={sendFilter}>
        <div>
          <label htmlFor="filter">Filter by: </label>
          <select
            name="filter"
            id="filter"
            onChange={handleFilter}
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>
              Select
            </option>
            <option value="continent">Continent</option>
            <option value="activity">Activity</option>
          </select>
        </div>
        {filters.filter === "continent" && (
          <div>
            <label htmlFor="continent">Choose a continent : </label>
            <select
              name="continent"
              id="continent"
              onChange={toNameFilter}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Select
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        )}
        {filters.filter === "activity" && (
          <div>
            <label htmlFor="activity">Choose a activity: </label>
            <select
              name="activity"
              id="activity"
              onChange={toNameFilter}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Select
              </option>
              {activities &&
                activities.map((act, i) => (
                  <option key={i} value={act}>
                    {act[0].toUpperCase() + act.substring(1)}
                  </option>
                ))}
            </select>
          </div>
        )}
        {filters.showFilter !== null && <button>Filter</button>}
      </form>
      <form onSubmit={sendSort}>
        <label htmlFor="sort">Sort by</label>
        <select
          name="sort"
          id="sort"
          onChange={handleSort}
          defaultValue="DEFAULT"
        >
          <option value="DEFAULT" disabled>
            Select
          </option>
          <option value="alphabetical">Alphabetical</option>
          <option value="population">Population</option>
        </select>
        {sorts.showSort !== null && (
          <div>
            <label htmlFor="typeSort">Choose: </label>
            <select
              name="typeSort"
              id="typeSort"
              onChange={toSort}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Select
              </option>
              <option value="ascendent">Ascendent</option>
              <option value="descendent">Descendent</option>
            </select>
            <button>Sort</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default FiltersOrders;
