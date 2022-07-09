const { Day } = require("../../models/day");
const { Product } = require("../../models/product");

const createDay = async (req, res) => {
  const body = req.body;
  // const owner = req.user.id;
  const date = new Date(body.date).toLocaleDateString();
  const prod = "Перловая крупа";

  const product = await Product.findOne({ "title.ru": prod });
  const call = body.item.weight / 100 * product.calories

  const owner = "62c9420627d43702489bde8b";
  const existDay = await Day.findOne({ $or: [{ date }, { owner }] });

  // console.log('existDay', existDay)
  let day;
  existDay
    ? (day = await Day.findOneAndUpdate(
        { _id: existDay.id },
      { $push: { item: { ...body.item, call } } },
        { new: true }
      ))
    : (day = await Day.create({ item: {...body, call}, date, owner }));

  res.status(200).send(day);
};

module.exports = createDay;
