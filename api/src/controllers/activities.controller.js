const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    
    return res.json(activities);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getActivities;
