const { Country, Activity } = require("../db");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // ! hacer expresion regular para limitar el name de la acitivity
    const activity = await Activity.findAll({
      where: {
        name: name,
      },
    });

    if (activity[0] === undefined) {
      const activityCreated = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });

      for (let country of countries) {
        const item = await Country.findByPk(country);
        await activityCreated.addCountry(item);
      }
      res.status(201).json([{ msg: "Activity created successfully" }]);
    } else {
      for (let country of countries) {
        const item = await Country.findByPk(country);
        const items = await Country.findByPk(country, {
          include: Activity,
        });
        if (items.activities[0] !== undefined) {
          for (let act of items.activities) {
            if (act.name !== name) {
              await activity[0].addCountry(item);
            }
          }
        } else {
          await activity[0].addCountry(item);
        }
      }
      return res
        .status(200)
        .json([{ msg: "activity already exists but it has been added" }]);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json([
      {
        msg: "there is an error",
      },
    ]);
  }
};

module.exports = postActivity;
