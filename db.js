/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    host: 'localhost',
    user: 'ryanb',
    password: '********',
    database: 'lunchly'
  });

db.connect();

module.exports = db;
