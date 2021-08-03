const { Op } = require("sequelize")
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {

        const countriesDB = await Country.findAll({
          include: [
            {
              model: Activity
            }
          ]
        });

        return res.json(countriesDB);

    } else {

      const countriesSearch = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        },
        include: [
          {
            model: Activity,
          }
        ]
      })

      return res.json(countriesSearch)
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
