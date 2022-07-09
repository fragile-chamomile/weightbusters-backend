const { Day } = require("../../models/day");

const getOneDay = async (req, res) => {
  const date = new Date("2022-07-07T13:04:09.383+00:00").toLocaleDateString();
  const owner = "62c93f8fd54f7decbe4e71a8";
  const day = await Day.findOne({ owner, date });

  console.log("day", day);
  res.status(200).send(day);
};

module.exports = getOneDay;
