const axios = require("axios");

const getCountry = async (req, res) => {
  try {

    const {idCountry} = req.params
    const resp = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${idCountry}`
    );

    res.json({
      id: resp.data.alpha3Code,
      name: resp.data.name,
      image: resp.data.flag,
      continent: resp.data.region,
      capital: resp.data.capital,
      subregion: resp.data.subregion,
      area: resp.data.area + "km2",
      population: resp.data.population,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: "country code not found" });
  }
};

module.exports = getCountry;
