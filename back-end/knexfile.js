/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://twbxkkmz:FRZ9ctWfqqrkxHfCGCKvo84VSNloXWvV@heffalump.db.elephantsql.com/twbxkkmz",
  DATABASE_URL_DEVELOPMENT = "postgres://pjwukfje:hnf3EVBx3sAmT6n9vuTcd3W1YEqX3fEZ@heffalump.db.elephantsql.com/pjwukfje",
  DATABASE_URL_TEST = "postgres://pjwukfje:hnf3EVBx3sAmT6n9vuTcd3W1YEqX3fEZ@heffalump.db.elephantsql.com/pjwukfje",
  DATABASE_URL_PREVIEW = "postgres://twbxkkmz:FRZ9ctWfqqrkxHfCGCKvo84VSNloXWvV@heffalump.db.elephantsql.com/twbxkkmz",
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
