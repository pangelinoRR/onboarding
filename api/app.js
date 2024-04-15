/**
 * Gets the application configuration initializer.
 */
const config = require("./config");

/**
 * Gets and Express application instance.
 */
const app = require("express")();

/**
 * Initializes all configurations for
 * the application, including the database connection,
 * passport, body parsers and router.
 */
config.bootstrap(app);

/**
 * Starts the app.
 */
app.listen(process.env.PORT || 3000);
