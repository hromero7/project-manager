const router = require("express").Router();
const passport = require("passport");
const passportConfig = require("../../middleware/passport");
const {
  findAll,
  createUser,
  login,
  logout,
  authenticateUser,
  findbyid,
  findbyusername,
} = require("../../controllers/userController");

router.route("/all").get(findAll); // findAll route
router.route("/find/:id").get(findbyid); // findbyid route
router.route("/finduser/:username").get(findbyusername);
router.route("/register").post(createUser); //register new user route
router.route("/login").post(
  passport.authenticate("local", {
    session: false,
    failureMessage: true,
  }),
  login
); //login user route
router
  .route("/logout")
  .get(passport.authenticate("jwt", { session: false }), logout); //logout user route
router
  .route("/authenticated")
  .get(passport.authenticate("jwt", { session: false }), authenticateUser); //verifys user is authenticated

module.exports = router;
