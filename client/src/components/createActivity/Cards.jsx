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
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>
                <img src={country.image} alt="img not found" />
              </td>
              <td>{country.name}</td>
              <td>
                <button onClick={handleState} id={country.id}>
                  Add country
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cards;
