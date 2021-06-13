import s from './Country.module.css'
import { Link } from 'react-router-dom'

function Country({ data }) {
  // TODO colocar msg de espera mientras carga
  return (
    <div className={s.country__container}>
      <h1 className={s.country__title}>Country Details</h1>
      {data[0] === undefined ? (
        <h1 className={s.country__title}>Cargando...</h1>
      ) : (
        <div className={s.country__card} key={data[0].id}>
          <div className={s.card__img}>
            <img src={data[0].image} alt="img not found" />
          </div>
          <div className={s.card__text}>
            <h2 className={s.card__title}>{data[0].name}</h2>
            <p className={s.card__p}> Code: {data[0].id}</p>
            <p className={s.card__p}> Capital: {data[0].capital}</p>
            <p className={s.card__p}> Subregion: {data[0].subregion}</p>
            <p className={s.card__p}> Area: {data[0].area}</p>
            <p className={s.card__p}> Population: {data[0].population}</p>
            <h3 className={s.card__title}> <Link to="/activities/lists">Activities</Link></h3>
            <ul className={s.card__list}>
              {data[0].activities[0] === undefined ? (
                <li className={s.list__item}>no activities</li>
              ) : (
                data[0].activities.map((act, index) => (
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
