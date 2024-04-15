const mongoose = require("mongoose");

/**
 * Object with the configuration coming from the .env file.
 */
const db = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
};

const initialize = () => {
  /**
   * Composes the connection string.
   */
  const connectionString = `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}?authSource=admin`;

  /**
   * Connects to the database.
   */
  mongoose
    .connect(connectionString)
    .then(() => {
      /**
       * Connection was successful.
       */

      console.log(`Connected to the database "${db.name}".`);
    })
    .catch((error) => {
      /**
       * Connection failed.
       */

      console.error("Failed to connect to the database:");
      console.error(error);
    });
};

module.exports = initialize;
