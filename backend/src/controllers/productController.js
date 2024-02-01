const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const product = await tables.product.readAll();
    res.json(product);
    console.info(res.json(product));
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
