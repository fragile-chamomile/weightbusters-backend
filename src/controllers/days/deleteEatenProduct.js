const { Day } = require("../../models/day");
const { BadRequest } = require("http-errors");

const deleteEatenProduct = async (req, res) => {
  const owner = req.user.id;
  const date = new Date(req.body.date).toLocaleDateString();
  const { id } = req.params;

  if (!id) throw new BadRequest("Product ID is not defined");

  const day = await Day.findOneAndUpdate(
    { owner, date },
    { $pull: { items: { id } } },
  );

  if (!day.items.some((item) => item.id === id)) throw new BadRequest('Not found');

  res.status(204).send();
};

module.exports = deleteEatenProduct;
