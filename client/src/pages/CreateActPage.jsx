import React, { useEffect } from "react";
import Form from "../components/createActivity/Form";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, reset } from "../redux/ducks/countriesDuck";

function CreateActPage() {
  const countries = useSelector((state) => state.countries.countriesForm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries("form"));
    return () => {
      dispatch(getCountries("form"));
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Form countries={countries} />
    </div>
  );
}

export default CreateActPage;
