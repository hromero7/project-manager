const router = require("express").Router();
const { findAllOAI, sendQs } = require("../../controllers/oaiController");

router.route("/all").get(findAllOAI);
router.route("/sendQ").post(sendQs);

module.exports = router;
