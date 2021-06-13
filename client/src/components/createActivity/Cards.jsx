// import s from './Form.module.css'
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
    // <div className={s.table__container}>
    //   <table className={s.table}>
    //     <thead className={s.table__head}>
    //       <tr className={s.table__row__head}>
    //         <th className={s.table__cell_head}>Flag</th>
    //         <th className={s.table__cell_head}>Name</th>
    //         <th className={s.table__cell_head}>Add</th>
    //       </tr>
    //     </thead>
    //     <tbody className={s.table__body}>
    //       {countries.map((country) => (
    //         <tr key={country.id} className={s.table__row}>
    //           <td className={s.table__cell__img}>
    //             <div className={s.table__img}>
    //               <img  src={country.image} alt="img not found" />
    //             </div>
    //           </td>
    //           <td className={s.table__cell}>{country.name}</td>
    //           <td className={s.table__cell}>
    //             <button className={`${s.btn} ${s.btn__add}`} onClick={handleState} id={country.id}>
    //               Add country
    //             </button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
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
