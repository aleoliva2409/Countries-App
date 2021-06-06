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
      const country = resp.data;
      const activity = await Country.findByPk(country[0].alpha3Code, {
        include: Activity,
      });
      const { activities } = activity;

      return res.json([
        {
          id: country[0].alpha3Code,
          name: country[0].name,
          image: country[0].flag,
          continent: country[0].region,
          capital: country[0].capital,
          subregion: country[0].subregion,
          area: `${country[0].area} km2`,
          population: country[0].population,
          activities,
        },
      ]);
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
