import axios from "axios";

// constants

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SEARCH = "GET_COUNTRIES_SEARCH";
const CLEAN_COUNTRIES_SEARCH = "CLEAN_COUNTRIES_SEARCH";


//reducer

const inicialState = {
  countriesDB: [],
  countriesSearch: []
};

export default function reducer(state = inicialState , action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countriesDB: action.payload
      }

    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload
      }

    case CLEAN_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload
      }
      
    default:
      return state
  }
}

// actions

export function getCountries() {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/countries");

      return dispatch({type: GET_COUNTRIES , payload: res.data})

    } catch (error) {
      console.log(error)
    }
  }
}

export function getCountriesSearch(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/countries?name=${name}`);

      return dispatch({ type: GET_COUNTRIES_SEARCH, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanCountriesSearch() {
  return {
    type: CLEAN_COUNTRIES_SEARCH,
    payload: []
  }
}
