const axios = require('axios')
const { Country } = require('../db')

const getCountries = async(req, res) => {
  try {
    const resp = await axios.get(`https://restcountries.eu/rest/v2/all`);
    const countries = resp.data;

    // console.log(countries);

    for(let i = 0; i < countries.length; i++) {
      await Country.create({
        id: countries[i].alpha3Code,
        name: countries[i].name,
        image: countries[i].flag,
        continent: countries[i].region,
        capital: countries[i].capital,
        subregion: countries[i].subregion,
        area: countries[i].area,
        population: countries[i].population
      });
    }

    const countriesDB = await Country.findAll();

    res.json(countriesDB);

  } catch (error) {
    console.log(error);
  }
}

module.exports = getCountries