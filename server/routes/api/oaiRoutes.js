const router = require("express").Router();
const {
  findAllOAI,
  sendQs,
  chatGPTRequest,
} = require("../../controllers/oaiController");

router.route("/all").get(findAllOAI);
router.route("/sendQs").post(sendQs);
router.route("/chatAI").post(chatGPTRequest);

module.exports = router;
