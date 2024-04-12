/**
 * Initializes the base configuration for the app.
 * Configures the environment variables.
 * Connects to the database.
 */
require("./config");

const express = require("express");

const app = express();

/**
 * Allows express to parse json body data.
 */
app.use(express.json());

/**
 * Imports all routes.
 */
app.use(require("./routes"));

/**
 * Starts the app.
 */
app.listen(process.env.PORT || 3000);
