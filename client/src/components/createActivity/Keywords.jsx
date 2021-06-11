import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCountrySelected,
  addCountryForm,
} from "../../redux/ducks/countriesDuck";

function Keywords({state,changeState}) {
  const dispatch = useDispatch();
  const countriesSelected = useSelector(
    (state) => state.countries.countriesSelected
  );

  const remove = (e) => {
    dispatch(removeCountrySelected(e.target.id, countriesSelected));
    dispatch(addCountryForm(e.target.id, countriesSelected));
    changeState({
      ...state,
      countries: state.countries.filter(country => country.id !== e.target.id)
    })
  };

  return (
    <div>
      <h4>Selected Countries</h4>
      <div>
        {countriesSelected[0] === undefined ? (
          <p>Select countries</p>
        ) : (
          countriesSelected.map((country, index) => (
            <div key={index}>
              <img src={country.image} alt="img not found" />
              <p>{country.name}</p>
              <button onClick={remove} id={country.id}>
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Keywords;
