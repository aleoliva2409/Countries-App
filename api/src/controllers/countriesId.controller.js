const axios = require("axios");
const { Country, Activity } = require("../db");

const getCountry = async (req, res) => {
  try {
    const { idCountry } = req.params;
    const resp = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${idCountry}`
    );
    const country = resp.data;
    const activity = await Country.findByPk(country.alpha3Code, {
      include: Activity,
    });
    const { activities } = activity;

    return res.json([
      {
        id: country.alpha3Code,
        name: country.name,
        image: country.flag,
        continent: country.region,
        capital: country.capital,
        subregion: country.subregion,
        area: `${country.area} km2`,
        population: country.population,
        activities,
      },
    ]);
  } catch (error) {
    console.log(error);
    res.status(404).json([{ msg: "country code not found" }]);
  }
};

module.exports = getCountry;
