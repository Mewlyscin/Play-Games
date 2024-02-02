const express = require("express");

const router = express.Router();

// import router

const authentiRouter = require("./routers/authentiRouter");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

// Route use

router.use("/product", productRouter);
router.use("/authification", authentiRouter);
router.use("/user", userRouter);

module.exports = router;
