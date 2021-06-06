const axios = require('axios')
const { Country } = require('../db')

let data = false

const getCountries = async(req, res) => {
  try {

    const { name } = req.query;

    if(!name) {
      if(data === false) {
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
            area: countries[i].area,
            population: countries[i].population,
          });
        }

        const countriesDB = await Country.findAll();
        data = true
        return res.json(countriesDB);
      } else {
        const countriesDB = await Country.findAll();
        return res.json(countriesDB);
      }
    } else {

      const resp = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const country = resp.data;

      return res.json(country);
    }
    
  } catch (error) {
    console.log(error);
    res.status(404).json({
      msg: "country not found",
    });
  }
}

module.exports = getCountries