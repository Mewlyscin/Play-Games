const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    // call all items from database
    const product = await tables.product.readAll();

    // respond with 404 is null or with items in JSON format
    if (product === null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    // call a specific item from database based on the provided ID

    const product = await tables.product.read(req.params.id);

    // respond with 404 is not found else with items in JSON format

    if (product == null) {
      res.sendStatus(404);
    } else {
      res.json(product);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = { browse, read };
