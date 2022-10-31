const router = require("express").Router();
const alertRoutes = require("./alertRoutes");

router.use("/alert", alertRoutes);

module.exports = router;
