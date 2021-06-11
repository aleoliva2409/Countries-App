
function Country({ data }) {
  // TODO colocar msg de espera mientras carga
  return (
    <div>
      {
        data[0] === undefined ? 
        <h1>Cargando...</h1> :
        <div key={data[0].id}>
          <h1>{data[0].name}</h1>
          <img src={data[0].image} alt="img not found" />
          <p> Code: {data[0].id}</p>
          <p> Capital: {data[0].capital}</p>
          <p> Subregion: {data[0].subregion}</p>
          <p> Area: {data[0].area}</p>
          <p> Population: {data[0].population}</p>
          <h3>Activities</h3>
          <ul>
            {
              data[0].activities[0] === undefined ?
              <p>no activities</p> :
              data[0].activities.map((act,index) => (
                <li key={index+20}>{act.name}</li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default Country;
