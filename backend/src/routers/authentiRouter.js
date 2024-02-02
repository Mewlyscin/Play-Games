const express = require("express");

const router = express.Router();

const { login } = require("../controllers/authentiControllers");

router.post("/", login);

module.exports = router;
