import React, { useState } from "react";
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

  return (
    <div className="">
      <form className="" onSubmit={handleSubmit}>
        <h1 className="">Create Activities</h1>
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
          <button className="">Create</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
