const { Day } = require("../../models/day");

const getOneDay = async (req, res) => {
  const date = new Date(req.body.date).toLocaleDateString();
  const owner = req.user.id;
  const day = await Day.findOne({ owner, date });

  res.status(200).send(day);
};

module.exports = getOneDay;
