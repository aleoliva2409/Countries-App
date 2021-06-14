import s from '../../sass/listCountries/ListCountries.module.sass'
import { Link } from "react-router-dom";

function Countries({ countries }) {
  return (
    <div className={s.countries__container}>
      {countries[0] === undefined ? (
        <p className={s.error__paragraph}>Countries not found</p>
      ) : (
        countries.map((country) => (
          <div
            key={country.id}
            className={s.card}
          >
            <div className={s.card__img}>
              <img
                src={country.image}
                alt="img not found"
                className={s.img}
              />
            </div>
            <div className={s.card__text}>
              <h3>
                <Link
                  to={`/countries/${country.id}`}
                  className={s.name__link}
                >{country.name}</Link>
              </h3>
              <p className={s.card__paragraph}><span>Population: </span>{country.capital}</p>
              <p className={s.card__paragraph}><span>Continent: </span>{country.continent}</p>
              <p className={s.card__paragraph}><span>Population: </span>{country.population}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Countries;
