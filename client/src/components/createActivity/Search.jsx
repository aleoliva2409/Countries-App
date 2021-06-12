import React, { useState } from "react";
import s from "./Form.module.css"
import Cards from "./Cards";

function Search({ countries , state , changeState, search, setSearch }) {
  const [currentPage, setCurrentPage] = useState(0);

  const paginations = () => {
    if (search.length === 0) {
      return countries.slice(currentPage, currentPage + 5);
    }

    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    return filteredCountries.slice(currentPage, currentPage + 5);
  };

  const prevPage = (e) => {
    setCurrentPage(currentPage - 5);
    e.preventDefault();
  };

  const nextPage = (e) => {
    setCurrentPage(currentPage + 5);
    e.preventDefault();
  };

  const prevBtn = () => {
    if (currentPage > 0) {
      return false;
    } else {
      return true;
    }
  };

  const nextBtn = () => {
    if (
      countries.filter((country) => country.name.includes(search)).length >
      currentPage + 5
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSearch = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
    e.preventDefault();
  };
  return (
    <div className={s.search__container}>
      <div className={`${s.search}`}>
        <label className={`${s.search__label}`} htmlFor="country">
          Search:{" "}
        </label>
        <input
          type="text"
          id="country"
          name="country"
          className={`${s.input} ${s.search__input}`}
          onChange={handleSearch}
          value={search}
          placeholder="Search country..."
        />
      </div>
      <Cards
        countries={paginations()}
        state={state}
        changeState={changeState}
      />
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

export default Search;
