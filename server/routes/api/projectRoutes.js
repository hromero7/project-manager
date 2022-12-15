const router = require("express").Router();
const passport = require("passport");

const {
  findAll,
  findAllLeaderProjects,
  createProject,
  navToProject,
  deleteProject,
  addMember,
} = require("../../controllers/projectController");

router.route("/all").get(findAll); // find all route
router
  .route("/:userId")
  .get(passport.authenticate("jwt", { session: false }), findAllLeaderProjects);
router
  .route("/create")
  .post(passport.authenticate("jwt", { session: false }), createProject);
router
  .route("/p/:project_id")
  .get(passport.authenticate("jwt", { session: false }), navToProject);
router
  .route("/delete/")
  .delete(passport.authenticate("jwt", { session: false }), deleteProject);
router
  .route("/add_member/:project_id")
  .put(passport.authenticate("jwt", { session: false }), addMember);

module.exports = router;
