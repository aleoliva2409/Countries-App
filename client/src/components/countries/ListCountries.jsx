import React, { useState } from "react";
import s from "./ListCountries.module.css";
import Countries from "./Countries";
import FiltersOrders from "./FiltersOrders";

function ListCountries({ reduxState , reduxName }) {
  const [filters, setFilters] = useState(false);

  const showFilters = () => {
    if (filters) {
      setFilters(false);
    } else {
      setFilters(true);
    }
  };

  return (
    <div className={`wrapper ${s.container}`}>
      <div className={s.btn__container}>
        <button className={s.btn} onClick={showFilters}>
          Filters and Sorts
        </button>
      </div>
      {filters && <FiltersOrders reduxName={reduxName} countries={reduxState} />}
      <Countries countries={reduxState} />
      <div className={s.btn__container}>
        <button className={s.btn}>prev</button>
        <button className={s.btn}>next</button>
      </div>
    </div>
  );
}

export default ListCountries;
