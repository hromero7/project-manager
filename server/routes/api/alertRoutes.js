const router = require("express").Router();
const { findAll, create } = require("../../controllers/alertController");

router.route("/").get(findAll);
router.route("/post/").post(create);

module.exports = router;
