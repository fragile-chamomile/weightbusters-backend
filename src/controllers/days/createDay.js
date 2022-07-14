const { Day } = require("../../models/day");
const { Product } = require("../../models/product");
const { randomUUID } = require("crypto");
const { BadRequest } = require("http-errors");

const createDay = async (req, res) => {
  const body = req.body;
  const owner = req.user.id;
  const date = new Date(body.date).toLocaleDateString();
  const { name, weight } = req.body.item;
  const product = await Product.findOne({
    $or: [{ "title.ua": name }, { "title.ru": name }, { "title.en": name }],
  });

  if (!product) throw new BadRequest('Invalid product name');

  const calories = (body.item.weight / 100) * product.calories;
  const existDay = await Day.findOne({ date, owner });

  let day;
  existDay
    ? (day = await Day.findOneAndUpdate(
        { _id: existDay.id },
        {
          $push: {
            items: {
              weight,
              name: { ...product.title },
              calories,
              id: randomUUID(),
            },
          },
        },
        { new: true }
      ))
    : (day = await Day.create({
        items: {
          weight,
          name: { ...product.title },
          calories,
          id: randomUUID(),
        },
        date,
        owner,
      }));

  res.status(201).send(day);
};

module.exports = createDay;
