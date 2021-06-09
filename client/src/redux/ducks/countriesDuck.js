import axios from "axios";

// constants

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SEARCH = "GET_COUNTRIES_SEARCH";
const CLEAN_COUNTRIES_SEARCH = "CLEAN_COUNTRIES_SEARCH";
const ORDER_COUNTRIES_SEARCH_ASC = "ORDER_COUNTRIES_SEARCH_ASC";
const ORDER_COUNTRIES_SEARCH_DESC = "ORDER_COUNTRIES_SEARCH_DESC";
const ORDER_COUNTRIES_DB_ASC = "ORDER_COUNTRIES_DB_ASC";
const ORDER_COUNTRIES_DB_DESC = "ORDER_COUNTRIES_DB_DESC";
const FILTER_COUNTRIES_SEARCH = "FILTER_COUNTRIES_SEARCH";
const FILTER_COUNTRIES_DB = "FILTER_COUNTRIES_DB";
const FILTER_ACTIVITIES_SEARCH = "FILTER_ACTIVITIES_SEARCH";
const FILTER_ACTIVITIES_DB = "FILTER_ACTIVITIES_DB";



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
        countriesDB: action.payload,
      };

    case GET_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case CLEAN_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case FILTER_COUNTRIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case FILTER_COUNTRIES_DB:
      return {
        ...state,
        countriesDB: action.payload,
      };

    default:
      return state;
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

export function filterCountries(nameFilter,typeFilter,countries,reduxName) {
  if(reduxName === "search") {
    if(typeFilter === "continent") {

      const payload = countries.filter(country => country.continent === nameFilter)

      return {
        type: FILTER_COUNTRIES_SEARCH,
        payload
      }

    } else if(typeFilter === "activity") {
      let payload = [];

      for (let i = 0; i < countries.length; i++) {
        countries.activities.forEach((act) => {
          if (act.name === nameFilter) {
            payload.push(countries[i]);
          }
        });
      }
      return {
        type: FILTER_ACTIVITIES_SEARCH,
        payload,
      };
    }
  
  } else if(reduxName === "db") {
    if (typeFilter === "continent") {
      const payload = countries.filter(
        (country) => country.continent === nameFilter
      );

      return {
        type: FILTER_COUNTRIES_DB,
        payload,
      };
    } else if (typeFilter === "activity") {
      let payload = [];

      for(let i = 0; i < countries.length; i++) {
        countries.activities.forEach(act => {
          if(act.name === nameFilter) {
            payload.push(countries[i])
          }
        })
      }

      return {
        type: FILTER_ACTIVITIES_DB,
        payload,
      };
    }
  }
}

export function orderCountries(name,type,countries) {

}