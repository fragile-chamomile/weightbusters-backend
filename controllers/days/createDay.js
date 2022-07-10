const { Day } = require("../../models/day");
const { Product } = require("../../models/product");
const { randomUUID } = require("crypto");

const createDay = async (req, res) => {
  const body = req.body;
  const owner = req.user.id;
  const date = new Date(body.date).toLocaleDateString();
  const { name } = req.body.item;
  const product = await Product.findOne({ "title.ru": name });
  const calories = (body.item.weight / 100) * product.calories;
  // const owner = "62c9420627d43702489bde8b";
  const existDay = await Day.findOne({ date, owner });
  let day;
  existDay
    ? (day = await Day.findOneAndUpdate(
        { _id: existDay.id },
      { $push: { items: { ...body.item, calories, id: randomUUID() } } },
        { new: true }
      ))
    : (day = await Day.create({
      items: { ...body.item, calories, id: randomUUID() },
        date,
        owner,
      }));

  res.status(201).send(day);
};

module.exports = createDay;
