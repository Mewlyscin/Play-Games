const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const product = await tables.product.readAll();
    if (product === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
