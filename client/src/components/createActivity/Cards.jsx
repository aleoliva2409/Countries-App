import { useDispatch, useSelector } from "react-redux";
import {
  removeCountryForm,
  addCountrySelected,
} from "../../redux/ducks/countriesDuck";

function Cards({ countries , state , changeState}) {
  const dispatch = useDispatch();
  const countriesForm = useSelector((state) => state.countries.countriesForm);

  const handleState = (e) => {
    dispatch(removeCountryForm(e.target.id, countriesForm));
    dispatch(addCountrySelected(e.target.id, countriesForm));
    changeState({
      ...state,
      countries: state.countries.concat(e.target.id)
    })
  };

  return (
    <div className="section__container">
      {countries.map((country) => (
        <section key={country.id} className="section">
            <div className="section__img">
              <img src={country.image} alt="img not found" />
          </div>
          <div className="section__name">
            <p>{country.name}</p>
          </div>
          <div className="section__btn">
            <button className="btn btn__add" onClick={handleState} id={country.id}>
              Add country
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Cards;
