const { Activity } = require("../db");
const { Op } = require("sequelize");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const actividad = await Activity.findOrCreate({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      defaults: {
        name,
        difficulty,
        duration,
        season,
      }
    })

    await actividad[0].addCountries(countries);

    return res.json([{ msg: "Activity created successfully" }])
  } catch (err) {
    console.log(err);
    res.status(404).json([
      {
        msg: "there is an error",
      },
    ]);
  }
};

module.exports = postActivity
