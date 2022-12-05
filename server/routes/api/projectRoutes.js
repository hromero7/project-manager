const router = require("express").Router();
const passport = require("passport");

const {
  findAll,
  findAllLeaderProjects,
  createProject,
  findByUser,
  deleteProject,
  addMember,
} = require("../../controllers/projectController");

router.route("/all").get(findAll); // find all route
router
  .route("/:project_id")
  .get(passport.authenticate("jwt", { session: false }, findAllLeaderProjects)); //finds all projects relevant to user.
router
  .route("/create")
  .post(passport.authenticate("jwt", { session: false }), createProject);
router
  .route("/user_project/:user_id")
  .get(passport.authenticate("jwt", { session: false }), findByUser);
router
  .route("/delete/:project_id")
  .delete(passport.authenticate("jwt", { session: false }), deleteProject);
router
  .route("/add_member/:project_id")
  .put(passport.authenticate("jwt", { session: false }), addMember);

module.exports = router;
