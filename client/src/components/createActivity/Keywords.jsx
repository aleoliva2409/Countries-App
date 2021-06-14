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
    e.preventDefault();
  };

  return (
    <div className="">
      <h4 className="">Selected Countries</h4>
      <div className="">
        {countriesSelected[0] === undefined ? (
          <p>Select countries</p>
        ) : (
          countriesSelected.map((country, index) => (
            <div className="" key={index}>
              <div className="">
                <img src={country.image} alt="img not found" />
              </div>
              <p className="">{country.name}</p>
              <button
                className=""
                onClick={remove}
                id={country.id}
              >
              x
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Keywords;
