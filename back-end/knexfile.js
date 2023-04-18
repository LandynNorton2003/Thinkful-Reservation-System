/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://thinkful_reservation_user:h3sz7jUb77AH5J7i4yKOQSHjpWYSBobP@dpg-cgvhd6qut4mc4k8iqgt0-a.oregon-postgres.render.com/thinkful_reservation",
  DATABASE_URL_DEVELOPMENT = "postgres://thinkful_reservation_user:h3sz7jUb77AH5J7i4yKOQSHjpWYSBobP@dpg-cgvhd6qut4mc4k8iqgt0-a/thinkful_reservation",
  DATABASE_URL_TEST = "postgres://thinkful_reservation_user:h3sz7jUb77AH5J7i4yKOQSHjpWYSBobP@dpg-cgvhd6qut4mc4k8iqgt0-a.oregon-postgres.render.com/thinkful_reservation",
  DATABASE_URL_PREVIEW = "postgres://thinkful_reservation_user:h3sz7jUb77AH5J7i4yKOQSHjpWYSBobP@dpg-cgvhd6qut4mc4k8iqgt0-a.oregon-postgres.render.com/thinkful_reservation",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
