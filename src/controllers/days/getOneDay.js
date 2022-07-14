const { Day } = require("../../models/day");
const { BadRequest } = require("http-errors");

const getOneDay = async (req, res) => {
  const date = new Date(req.body.date).toLocaleDateString();
  const owner = req.user.id;
  const day = await Day.findOne({ owner, date });

  if(!day) throw new BadRequest('Not found')

  res.status(200).send(day);
};

module.exports = getOneDay;
