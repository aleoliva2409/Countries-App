export function filterCountries(america,continent,state,reduxName) {
  if(countries === "search") {
    if(type === "continent") {
      const continent = [...state.filter(country => country.continent === name)];

      return {
        type: FILTER_COUNTRIES_SEARCH,
        payload: continent
      };
    }
  }

  return {
    type: FILTER_COUNTRIES_DB,
    payload: []
  };
}