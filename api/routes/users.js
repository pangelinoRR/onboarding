/**
 * Initializes a router from express.
 */
const router = require("express").Router();

/**
 * Gets all controllers.
 */
const controllers = require("../controllers");

/**
 * Gets all middleware.
 */
const middleware = require("../middleware");

/**
 * Returns the details of a user.
 * Only for testing purposes.
 *
 * GET /api/users/:id
 * Requires Authentication.
 */
router.get("/:id", middleware.jwt(), controllers.users.details);

module.exports = router;
