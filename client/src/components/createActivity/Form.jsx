import s from '../../sass/createActivity/Form.module.sass'
import React, { useState } from "react";
import Inputs from "./Inputs";
import Search from "./Search";
import Keywords from "./Keywords";
import { useDispatch, useSelector } from "react-redux";
import { reset, getCountries } from "../../redux/ducks/countriesDuck";
import { postActivity } from "../../redux/ducks/activitiesDuck";
import swal from 'sweetalert'

function Form({ countries }) {
  const dispatch = useDispatch();
  const countriesAdded = useSelector(
    (state) => state.countries.countriesSelected
  );

  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleSubmit = (e) => {
    dispatch(postActivity(form));
    setSearch("");
    setForm({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
    dispatch(getCountries("form"));
    dispatch(reset());
    swal({
      title: "Submitted Form",
      icon: "success",
      button: "Ok"
    })
    e.preventDefault();
  };

  return (
    <div className={s.form__container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.form__title}>Create Activities</h1>
        <Inputs state={form} changeState={setForm} />
        <Search
          countries={countries}
          state={form}
          changeState={setForm}
          search={search}
          setSearch={setSearch}
        />
        <Keywords state={form} changeState={setForm} />
        <div className={s.btn__container}>
          <button
            className={`${s.btn} ${
              countriesAdded[0] === undefined && s.btn__disabled
            }`}
            disabled={countriesAdded[0] === undefined ? true : false}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
