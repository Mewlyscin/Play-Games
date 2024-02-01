const express = require("express");

const router = express.Router();

const { browse } = require("../controllers/productController");

router.get("/", browse);

module.exports = router;
