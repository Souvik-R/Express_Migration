const router = require("express").Router();
const userRouter = require("./user_router");


router.use("/user",userRouter);

module.exports = router;
