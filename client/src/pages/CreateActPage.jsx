import React from "react";
import Form from "../components/createActivity/Form";
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/ducks/countriesDuck'

function CreateActPage() {
  
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries.countriesDB)

  if(countries[0] === undefined) {
    dispatch(getCountries())
  }

  return (
    <div className="wrapper">
      <Form countries={countries}/>
    </div>
  );
}

export default CreateActPage;
