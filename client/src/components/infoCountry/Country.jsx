import s from '../../sass/infoCountry/Country.module.sass'
import { Link } from 'react-router-dom'

function Country({ data }) {
  return (
    <div className={s.country__container}>
      <h1 className={s.country__title}>Country Details</h1>
      {data?.name === undefined ? (
        <h1 className={s.country__title}>Cargando...</h1>
      ) : (
        <div className={s.country__card} key={data.id}>
          <div className={s.card__img}>
            <img src={data.image} alt="img not found" />
          </div>
          <div className={s.card__text}>
            <h2 className={s.card__title}>{data.name}</h2>
            <p className={s.card__p}> Code: {data.id}</p>
            <p className={s.card__p}> Capital: {data.capital}</p>
            <p className={s.card__p}> Subregion: {data.subregion}</p>
            <p className={s.card__p}> Area: {data.area}</p>
            <p className={s.card__p}> Population: {data.population}</p>
            <h3 className={s.card__title}>
              <Link to="/activities/lists">Activities</Link>
            </h3>
            <ul className={s.card__list}>
              {data?.activities.length === 0 ? (
                <li className={s.list__item}>no activities</li>
              ) : (
                data.activities.map((act, index) => (
                  <li className={s.list__item} key={index + 20}>
                    {act.name[0].toUpperCase() + act.name.slice(1)}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Country;
