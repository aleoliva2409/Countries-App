const axios = require("axios");
const { Country } = require("./src/db")

const initDB = async() => {
  try {
    const countries = await Country.findAll()
    if(countries.length === 250) {
      return
    } else {
      const resp = await axios.get(`https://restcountries.eu/rest/v2/all`);
      const countries = resp.data;

      for (let i = 0; i < countries.length; i++) {
        await Country.create({
          id: countries[i].alpha3Code,
          name: countries[i].name,
          image: countries[i].flag,
          continent: countries[i].region,
          capital: countries[i].capital,
          subregion: countries[i].subregion,
          area: `${countries[i].area} km2`,
          population: countries[i].population,
        });
      }
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  initDB,
};
