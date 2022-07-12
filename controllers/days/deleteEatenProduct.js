const { Day } = require("../../models/day");

const deleteEatenProduct = async (req, res) => {
  const owner = req.user.id;
  const date = new Date(req.body.date).toLocaleDateString();
  const { id } = req.params;
  await Day.findOneAndUpdate(
    { owner, date },
    { $pull: { items: { id } } },
    {new: true}
  );

  res.status(204).json();
};

module.exports = deleteEatenProduct;
