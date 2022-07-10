const { Product } = require("../../models/product");
const { errorOrResponce } = require("../../error");

const getProductsFromQueryParam = async (req, res, next) => {
  try {
    const { query } = req.params;
    const products = await Product.find({
      "title.ua": { $regex: `${query}`, $options: "i" },
    });
    if (products.length === 0) {
      return res.json({ message: "No matches found" });
    } else if (!products) {
      return res.status(400).json({status: 400, body: "Bad Request"});
    }
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = { getProductsFromQueryParam };
