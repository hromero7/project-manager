const router = require("express").Router();
const alertRoutes = require("./alertRoutes");
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes");
const taskRoutes = require("./taskRoutes");
const oaiRoutes = require("./oaiRoutes");

router.use("/user", userRoutes);
router.use("/alert", alertRoutes);
router.use("/project", projectRoutes);
router.use("/task", taskRoutes);
router.use("/oai", oaiRoutes);

module.exports = router;
