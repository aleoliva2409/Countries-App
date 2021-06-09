const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    let data = []

    activities.forEach(act => {
      data.push({
        id: act.id,
        name: act.name,
        difficulty: act.difficulty,
        duration: act.duration,
        season: act.season
      })
    })
    
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getActivities;