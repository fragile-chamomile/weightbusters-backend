const { Product } = require("../../models/product");

const getProductsFromQueryParam = async (req, res) => {
  const { query } = req.query;
  const products = await Product.find({
    $or: [
      { "title.ua": { $regex: `${query}`, $options: "i" } },
      { "title.ru": { $regex: `${query}`, $options: "i" } },
      { "title.en": { $regex: `${query}`, $options: "i" } },
    ],
  });
  if (products.length === 0) {
    return res.json({ message: "No matches found" });
  } else if (!products) {
    return res.status(400).json({ status: 400, body: "Bad Request" });
  }
  res.status(200).json(products);
};

module.exports = { getProductsFromQueryParam };
