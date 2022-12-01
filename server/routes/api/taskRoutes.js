const router = require("express").Router();
const passport = require("passport");
const { createTask, deleteTask } = require("../../controllers/taskController");

router.route("/create/:project_id").put(passport.authenticate("jwt", { session: false }), createTask);
router.route("/delete/:project_id/:task_id").delete(passport.authenticate("jwt", { session: false }), deleteTask);



module.exports = router;