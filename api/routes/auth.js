/**
 * Initializes a router from express.
 */
const router = require("express").Router();

/**
 * Gets all controllers.
 */
const controllers = require("../controllers");

/**
 * Sets up the login route.
 * POST /auth/login
 */
router.post("/login", controllers.auth.login);

/**
 * Sets up the register route.
 * POST /auth/register
 */
router.post("/register", controllers.auth.register);

module.exports = router;
