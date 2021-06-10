
function Country({ data }) {
  // TODO colocar msg de espera mientras carga
  return (
    <div>
      {
        data[0] !== undefined && 
        <h1>{data[0].name}</h1>
      }
    </div>
  );
}

export default Country;
