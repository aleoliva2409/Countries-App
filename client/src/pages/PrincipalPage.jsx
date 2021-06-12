import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/ducks/countriesDuck";
import Principal from "../components/principal/Principal"

function PrincipalPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Principal />
    </div>
  );
}

export default PrincipalPage;
