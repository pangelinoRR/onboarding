const initializer = (app) => {
  /**
   * Imports all routes.
   */
  app.use("/api", require("../routes"));
};

module.exports = initializer;
