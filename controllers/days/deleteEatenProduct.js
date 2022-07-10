const { Day } = require("../../models/day");

const deleteEatenProduct = async (req, res) => {
  const owner = req.user.id;
  const date = new Date(req.body.date).toLocaleDateString();
  // const owner = "62c93f8fd54f7decbe4e71a8";
  const { id } = req.params;
  console.log("id", id);
  const day = await Day.findOneAndUpdate(
    { owner, date },
    { $pull: { items: { id } } },
    {new: true}
  );

  res.status(204);
};

module.exports = deleteEatenProduct;
