import React, { useState } from "react";
import s from "./Form.module.css";
import Inputs from "./Inputs";
import Search from "./Search";
import Keywords from "./Keywords";
import { useDispatch } from "react-redux";
import { reset, getCountries } from "../../redux/ducks/countriesDuck";
import { postActivity } from "../../redux/ducks/activitiesDuck";

function Form({ countries }) {
  const dispatch = useDispatch();

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
    e.preventDefault();
  };

  //TODO hacer un reseteo cuando se envie el form dispatch(getCountriesForm o getCountries)

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
        <div className="btn__container">
          <button className={s.btn}>Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
