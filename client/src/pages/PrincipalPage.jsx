import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/ducks/countriesDuck";

function PrincipalPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1>Principal Page</h1>
      <button>
        <Link to="/home">Go Home</Link>
      </button>
    </div>
  );
}

export default PrincipalPage;
