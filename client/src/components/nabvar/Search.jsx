import s from "./Navbar.module.css";
import { Redirect } from "react-router-dom";
import { Fragment, useState } from "react";
import { getCountriesSearch } from "../../redux/ducks/countriesDuck";
import { useDispatch } from "react-redux";

function Search() {
  const [search, setSearch] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(getCountriesSearch(search));
    setSearch("");
    setRedirect(true);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      setRedirect(false);
    }
  };

  return (
    <Fragment>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="country"
          value={search}
          onChange={handleChange}
          className={s.input}
          placeholder="Search countries..."
        />
        <button className={s.btn}>Search</button>
      </form>
      {redirect && <Redirect to="/search" />}
    </Fragment>
  );
}

export default Search;
