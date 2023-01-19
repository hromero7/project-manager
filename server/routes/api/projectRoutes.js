const router = require("express").Router();
const passport = require("passport");

const {
  findAll,
  findAllLeaderProjects,
  findOne,
  createProject,
  deleteProject,
  addMember,
  deleteUser,
} = require("../../controllers/projectController");

router.route("/all").get(findAll); // find all route
router
  .route("/:project_id")
  .get(passport.authenticate("jwt", { session: false }), findOne);
router
  .route("/user_projects/:userId")
  .get(passport.authenticate("jwt", { session: false }), findAllLeaderProjects);
router
  .route("/create")
  .post(passport.authenticate("jwt", { session: false }), createProject);
router
  .route("/delete/")
  .delete(passport.authenticate("jwt", { session: false }), deleteProject);
router
  .route("/add_member/:project_id")
  .put(passport.authenticate("jwt", { session: false }), addMember);
router
  .route("/delete_member/:project_id")
  .delete(passport.authenticate("jwt", { session: false }), deleteUser);

module.exports = router;
