/**
 * Initializes a router from express.
 */
const router = require("express").Router();

/**
 * Imports several routes from each file into the router.
 */
router.use("/auth", require("./auth"));

module.exports = router;
