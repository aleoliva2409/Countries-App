import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../redux/ducks/countriesDuck";

function FiltersOrders({ reduxName , countries }) {
  const [showFilter, setShowFilter] = useState(null);
  const [filter, setFilter] = useState(""); // TODO hacer objeto
  const [nameFilter, setNameFilter] = useState("")
  const [sort, setSort] = useState("")
  const dispatch = useDispatch();

  //TODO cambiar el get getActivities , traer las actividades de los paises buscados y obtenidos USAR COUNTRIES PROPS
  //TODO separar los filtros de act y countinent

  const handleFilter = (e) => {
    if (e.target.value === "continent") {
      setFilter(e.target.value);
      setShowFilter(true);
    } else {
      setFilter(e.target.value);
      setShowFilter(false);
    }
  };

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  const sendFilter = (e) => {
    dispatch(filterCountries(nameFilter,filter,countries,reduxName))
    e.preventDefault();
  }

  const orderAsc = (e) => {
    //despachar orderCountries(sort, asc, countries)
    e.preventDefault();
  };

  const orderDesc = (e) => {
    //despachar orderCountries(sort, desc, countries)
    e.preventDefault();
  };

  const activities = [
    {
      id: 1,
      name: "skate",
      difficulty: 3,
      duration: "42",
      season: "spring",
    },
    {
      id: 2,
      name: "swim",
      difficulty: 3,
      duration: "42",
      season: "spring",
    },
    {
      id: 3,
      name: "run",
      difficulty: 3,
      duration: "42",
      season: "spring",
    },
  ];

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
        {filter === "continent" && (
          <div>
            <label htmlFor="continent">Choose a continent : </label>
            <select
              name="continent"
              id="continent"
              onChange={(e) => {
                setNameFilter(e.target.value);
              }}
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
        {filter === "activity" && (
          <div>
            <label htmlFor="activity">Choose a activity: </label>
            <select
              name="activity"
              id="activity"
              onChange={(e) => {
                setNameFilter(e.target.value);
              }}
              defaultValue="DEFAULT"
            >
              <option value="DEFAULT" disabled>
                Select
              </option>
              { activities &&
                activities.map((act) => (
                  <option key={act.id} value={act.name}>
                    {act.name[0].toUpperCase() + act.name.substring(1)}
                  </option>
                ))}
            </select>
          </div>
        )}
        {showFilter !== null && <button>Filter</button>}
      </form>
      <form>
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
        <button onClick={orderAsc}>Ascendent</button>
        <button onClick={orderDesc}>Descendent</button>
      </form>
    </div>
  );
}

export default FiltersOrders;
