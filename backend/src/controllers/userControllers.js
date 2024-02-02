// const argon2 = require("argon2");
const tables = require("../tables");

// Methode BREAD

// The B of BREAD - Browse for read all item in table

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    if (users === null) {
      res.sendStatus(404);
    } else {
      users.forEach((e) => {
        delete e.password;
      });
      res.status(200).json(users);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
