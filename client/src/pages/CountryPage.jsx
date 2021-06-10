import { useEffect } from "react";
import Country from "../components/infoCountry/Country";
import { useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountryDetails, cleanCountry } from "../redux/ducks/countriesDuck";

function CountryPage() {

  const dispatch = useDispatch()
  const country = useSelector((state) => state.countries.countryDetails)
  const {idCountry} = useParams()

  useEffect(() => {
    dispatch(getCountryDetails(idCountry))
    return () => {
      dispatch(cleanCountry());
    };
  }, [dispatch,idCountry])
  
  return (
    <div className={`wrapper`} >
      <Country data={country}/>
    </div>
  );
}

export default CountryPage;
