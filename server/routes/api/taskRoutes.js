const router = require("express").Router();
const passport = require("passport");
const {
  createTask,
  deleteTask,
  updateTask,
  addTaskAssignee,
  removeTaskAssignee,
} = require("../../controllers/taskController");

router
  .route("/create/:project_id")
  .post(passport.authenticate("jwt", { session: false }), createTask);
router
  .route("/delete/:project_id/:task_id")
  .delete(passport.authenticate("jwt", { session: false }), deleteTask);
router
  .route("/update/:project_id/:task_id")
  .put(passport.authenticate("jwt", { session: false }), updateTask);

router
  .route("/add_assignee/:project_id/:task_id")
  .put(passport.authenticate("jwt", { session: false }), addTaskAssignee);

router
  .route("/remove_assignee/:project_id/:task_id/:user_id")
  .put(passport.authenticate("jwt", { session: false }), removeTaskAssignee);

module.exports = router;
