import React, { useEffect, useState } from "react";
import s from "./ListCountries.module.css";
import Countries from "./Countries";
import FiltersOrders from "./FiltersOrders";

function ListCountries({ reduxState, reduxName }) {
  const [filters, setFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const paginations = () => {
    return reduxState.slice(currentPage, currentPage + 10);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 10);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 10);
  };

  const showFilters = () => {
    if (filters) {
      setFilters(false);
    } else {
      setFilters(true);
    }
  };

  const prevBtn = () => {
    if (currentPage > 0) {
      return false;
    } else {
      return true;
    }
  };

  const nextBtn = () => {
    if (reduxState.length > currentPage + 10) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={`wrapper ${s.container}`}>
      <div className={s.btn__container}>
        <button className={s.btn} onClick={showFilters}>
          Filters and Sorts
        </button>
      </div>
      {filters && (
        <FiltersOrders
          reduxName={reduxName}
          countries={reduxState}
          change={setCurrentPage}
        />
      )}
      <Countries countries={paginations()} />
      <div className={s.btn__container}>
        <button className={s.btn} onClick={prevPage} disabled={prevBtn()}>
          prev
        </button>
        <button className={s.btn} onClick={nextPage} disabled={nextBtn()}>
          next
        </button>
      </div>
    </div>
  );
}

export default ListCountries;
