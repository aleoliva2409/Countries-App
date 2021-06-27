import axios from "axios";

// constants

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SEARCH = "GET_COUNTRIES_SEARCH";
const CLEAN_COUNTRIES_SEARCH = "CLEAN_COUNTRIES_SEARCH";
const SORT_ALPHABETICAL_SEARCH = "SORT_ALPHABETICAL_SEARCH";
const SORT_ALPHABETICAL_DB = "SORT_ALPHABETICAL_DB";
const SORT_POPULATION_SEARCH = "SORT_POPULATION_SEARCH";
const SORT_POPULATION_DB = "SORT_POPULATION_DB";
const FILTER_COUNTRIES_SEARCH = "FILTER_COUNTRIES_SEARCH";
const FILTER_COUNTRIES_DB = "FILTER_COUNTRIES_DB";
const FILTER_ACTIVITIES_SEARCH = "FILTER_ACTIVITIES_SEARCH";
const FILTER_ACTIVITIES_DB = "FILTER_ACTIVITIES_DB";
const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
const CLEAN_COUNTRY = "CLEAN_COUNTRY";
const GET_COUNTRIES_FORM = "GET_COUNTRIES_FORM";
const ADD_COUNTRY_FORM = "ADD_COUNTRY_FORM";
const REMOVE_COUNTRY_FORM = "REMOVE_COUNTRY_FORM";
const ADD_COUNTRY_SELECTED = "ADD_COUNTRY_SELECTED";
const REMOVE_COUNTRY_SELECTED = "REMOVE_COUNTRY_SELECTED";
const RESET_FORM = "RESET_FORM";
// const ADD_CODE = "ADD_CODE";
// const REMOVE_CODE = "REMOVE_CODE";

//reducer

const inicialState = {
  countriesDB: [],
  countriesSearch: [],
  countryDetails: [],
  countriesForm: [],
  countriesSelected: [],
};

export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countriesDB: action.payload
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

    case FILTER_ACTIVITIES_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case FILTER_ACTIVITIES_DB:
      return {
        ...state,
        countriesDB: action.payload,
      };

    case SORT_ALPHABETICAL_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case SORT_ALPHABETICAL_DB:
      return {
        ...state,
        countriesDB: action.payload,
      };

    case SORT_POPULATION_SEARCH:
      return {
        ...state,
        countriesSearch: action.payload,
      };

    case SORT_POPULATION_DB:
      return {
        ...state,
        countriesDB: action.payload,
      };

    case GET_COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: action.payload,
      };

    case CLEAN_COUNTRY:
      return {
        ...state,
        countryDetails: action.payload,
      };

    case GET_COUNTRIES_FORM:
      return {
        ...state,
        countriesForm: action.payload,
      };

    case ADD_COUNTRY_FORM:
      return {
        ...state,
        countriesForm: state.countriesForm.concat(action.payload),
      };

    case REMOVE_COUNTRY_FORM:
      return {
        ...state,
        countriesForm: action.payload,
      };

    case ADD_COUNTRY_SELECTED:
      return {
        ...state,
        countriesSelected: state.countriesSelected.concat(action.payload),
      };

    case REMOVE_COUNTRY_SELECTED:
      return {
        ...state,
        countriesSelected: [...action.payload],
      };

    case RESET_FORM:
      return {
        ...state,
        countriesSelected: [],
      };

    default:
      return state;
  }
}

// actions

export function getCountries(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:3001/countries");

      if(name === "form") {
        return dispatch({type: GET_COUNTRIES_FORM, payload: res.data})
      }

      return dispatch({ type: GET_COUNTRIES, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCountriesSearch(name) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `http://localhost:3001/countries?name=${name}`
      );

      return dispatch({ type: GET_COUNTRIES_SEARCH, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanCountriesSearch() {
  return {
    type: CLEAN_COUNTRIES_SEARCH,
    payload: [],
  };
}

export function filterByContinent(nameFilter, countries, reduxName) {
  const payload = countries.filter(
    (country) => country.continent === nameFilter
  );

  if (reduxName === "search") {
    return {
      type: FILTER_COUNTRIES_SEARCH,
      payload,
    };
  } else {
    return {
      type: FILTER_COUNTRIES_DB,
      payload,
    };
  }
}

export function filterByActivity(nameFilter, countries, reduxName) {
  const payload = countries
    .map((country) => {
      let array = [];
      country.activities.forEach((act) => {
        if (act.name === nameFilter) {
          array.push(country);
        }
      });
      return array;
    })
    .flat();

  if (reduxName === "search") {
    return {
      type: FILTER_ACTIVITIES_SEARCH,
      payload,
    };
  } else {
    return {
      type: FILTER_ACTIVITIES_DB,
      payload,
    };
  }
}

// TODO ver sort alfabeticamente
export function sortByAlphabetical(countries, reduxName, sort) {
  let payload;

  if (sort === "ascendent") {
    payload = [
      ...countries.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        return 0;
      }),
    ];
  } else {
    payload = [
      ...countries.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      }),
    ];
  }

  if (reduxName === "search") {
    return {
      type: SORT_ALPHABETICAL_SEARCH,
      payload,
    };
  } else {
    return {
      type: SORT_ALPHABETICAL_DB,
      payload,
    };
  }
}

export function sortByPopulation(countries, reduxName, sort) {
  let payload;

  if (sort === "ascendent") {
    payload = [...countries.sort((a, b) => a.population - b.population)];
  } else {
    payload = [...countries.sort((a, b) => b.population - a.population)];
  }

  if (reduxName === "search") {
    return {
      type: SORT_POPULATION_SEARCH,
      payload,
    };
  } else {
    return {
      type: SORT_POPULATION_DB,
      payload,
    };
  }
}

export function getCountryDetails(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function cleanCountry() {
  return {
    type: CLEAN_COUNTRY,
    payload: [],
  };
}

// export function getCountriesForm() {
//   return {
//     type: GET_COUNTRIES_FORM,
//   };
// }

export function addCountryForm(id, countries) {
  const payload = countries.filter((country) => country.id === id);

  console.log(payload);

  return {
    type: ADD_COUNTRY_FORM,
    payload,
  };
}

export function removeCountryForm(id, countries) {
  const payload = countries.filter((country) => country.id !== id);

  return {
    type: REMOVE_COUNTRY_FORM,
    payload,
  };
}

export function addCountrySelected(id, countries) {
  const payload = countries.filter((country) => country.id === id);

  return {
    type: ADD_COUNTRY_SELECTED,
    payload,
  };
}

export function removeCountrySelected(id, countries) {
  const payload = countries.filter((country) => country.id !== id);
  return {
    type: REMOVE_COUNTRY_SELECTED,
    payload,
  };
}

export function reset() {
  return {
    type: RESET_FORM,
  };
}

//TODO HACER FUNCTION UPDATE PARA LAS MINI CARD!!!
