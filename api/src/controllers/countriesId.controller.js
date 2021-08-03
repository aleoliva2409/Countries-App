const { Country, Activity } = require("../db");

const getCountry = async (req, res) => {
  try {
    const { idCountry } = req.params;
    const country = await Country.findByPk(idCountry.toUpperCase(), {
      include: [
        {
          model: Activity,
        }
      ]
    })

    return res.json(country);

  } catch (error) {
    console.log(error);
    res.status(404).json([{ msg: "country code not found" }]);
  }
};

module.exports = getCountry;
