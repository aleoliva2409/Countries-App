import s from '../../sass/createActivity/Form.module.sass'
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
      countries: state.countries.filter(country => country !== e.target.id)
    })
    e.preventDefault();
  };

  return (
    <div className={s.keywords__container}>
      <h4 className={s.keywords__title}>Selected Countries</h4>
      <div className={s.keywords__cards}>
        {countriesSelected[0] === undefined ? (
          <p className={s.keywords__card__text}>Select countries</p>
        ) : (
          countriesSelected.map((country, index) => (
            <div className={s.keywords__card} key={index}>
              <div className={s.keywords__card__img}>
                <img src={country.image} alt="img not found" />
              </div>
              <p className={s.keywords__card__text}>{country.name}</p>
              <button
                className={s.keywords__card__btn}
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
