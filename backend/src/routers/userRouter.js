const express = require("express");

const router = express.Router();

const { browse } = require("../controllers/userControllers");

router.get("/", browse);

module.exports = router;
