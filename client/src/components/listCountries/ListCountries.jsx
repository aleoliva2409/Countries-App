import s from '../../sass/listCountries/ListCountries.module.sass'
import React, { useState, useEffect } from "react";
import Countries from "./Countries";
import FiltersOrders from "./FiltersOrders";

function ListCountries({ reduxState, reduxName }) {
  const [filters, setFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    return () => {
      setCurrentPage(0);
    };
  }, []);

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
    <div className={`${s.container} wrapper`}>
      <div className={s.filters__container}>
        <button className={s.btn__showFilters} onClick={showFilters}>
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
      <div className={s.btn__paginations}>
        <button
          className={`${s.btn} ${prevBtn() && s.btn__disabled}`}
          onClick={prevPage}
          disabled={prevBtn()}
        >
          prev
        </button>
        <button
          className={`${s.btn} ${nextBtn() && s.btn__disabled}`}
          onClick={nextPage}
          disabled={nextBtn()}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default ListCountries;
