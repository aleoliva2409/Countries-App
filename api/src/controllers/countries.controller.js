const axios = require("axios");
const { Country, Activity } = require("../db");

let data = false;

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      if (data === false) {
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

        const countriesDB = await Country.findAll();
        data = true;
        return res.json(countriesDB);
      } else {
        const countriesDB = await Country.findAll();
        return res.json(countriesDB);
      }
    } else {
      const resp = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const countries = resp.data;
      let data = []

      
      for(let country of countries) {
        const activity = await Country.findByPk(country.alpha3Code, {
          include: Activity,
        });
        
        data.push({
          id: country.alpha3Code,
          name: country.name,
          image: country.flag,
          continent: country.region,
          capital: country.capital,
          subregion: country.subregion,
          area: `${country.area} km2`,
          population: country.population,
          activities: activity?.activities || [],
        });
      }

      return res.json(data);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json([
      {
        msg: "country not found",
      },
    ]);
  }
};

module.exports = getCountries;
