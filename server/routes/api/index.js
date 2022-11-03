const router = require("express").Router();
const alertRoutes = require("./alertRoutes");
const userRoutes = require("./userRoutes");

router.use("/user", userRoutes);
router.use("/alert", alertRoutes);

module.exports = router;
