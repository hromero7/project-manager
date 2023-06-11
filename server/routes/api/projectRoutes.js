const router = require("express").Router();
const passport = require("passport");

const {
  findAll,
  findAllLeaderProjects,
  findOne,
  createProject,
  deleteProject,
  getMembers,
  addMember,
  deleteMember,
  updateProjectTitle,
  findAssignedProjects,
  promoteMember,
  projectProgress,
  demoteMember,
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
  .delete(passport.authenticate("jwt", { session: false }), deleteMember);
router
  .route("/update/:project_id")
  .put(passport.authenticate("jwt", { session: false }), updateProjectTitle);
router
  .route("/assigned_projects/:username")
  .get(passport.authenticate("jwt", { session: false }), findAssignedProjects);
router
  .route("/promote_member/:id")
  .put(passport.authenticate("jwt", { session: false }), promoteMember);
router
  .route("/demote_member/:id")
  .put(passport.authenticate("jwt", { session: false }), demoteMember);
router
  .route("/project_progress/:project_id")
  .get(passport.authenticate("jwt", { session: false }), projectProgress);

module.exports = router;
