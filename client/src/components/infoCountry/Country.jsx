import { Link } from 'react-router-dom'

function Country({ data }) {
  return (
    <div className="">
      <h1 className="">Country Details</h1>
      {data[0] === undefined ? (
        <h1 className="">Cargando...</h1>
      ) : (
        <div className="" key={data[0].id}>
          <div className="">
            <img src={data[0].image} alt="img not found" />
          </div>
          <div className="">
            <h2 className="">{data[0].name}</h2>
            <p className=""> Code: {data[0].id}</p>
            <p className=""> Capital: {data[0].capital}</p>
            <p className=""> Subregion: {data[0].subregion}</p>
            <p className=""> Area: {data[0].area}</p>
            <p className=""> Population: {data[0].population}</p>
            <h3 className=""> <Link to="/activities/lists">Activities</Link></h3>
            <ul className="">
              {data[0].activities[0] === undefined ? (
                <li className="">no activities</li>
              ) : (
                data[0].activities.map((act, index) => (
                  <li className="" key={index + 20}>
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
