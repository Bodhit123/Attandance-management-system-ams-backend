const mysql = require("mysql");
require("dotenv").config({ path: "./config/.env" });

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const createConnection = (callback) => {
 return pool.getConnection(callback);
};

// Function to release a connection back to the pool
const releaseConnection = (connection) => {
 return connection.release();
};



module.exports = { createConnection, releaseConnection,db:pool };
