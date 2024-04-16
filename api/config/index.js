/**
 * Initializes environment variables.
 */
require("dotenv").config();

const database = require("./database");
const passport = require("./passport");
const router = require("./router");

const cors = require("cors");
const { json } = require("express");

const bootstrap = (app) => {
  /**
   * Connects to the database.
   */
  database();

  /**
   * Initializes Passport.
   */
  passport(app);

  /**
   * Allows express to parse json body data.
   */
  app.use(json());

  /**
   * Allows external requests.
   */
  app.use(cors());

  /**
   * Registers all routes.
   */
  router(app);
};

module.exports = {
  bootstrap,
};
