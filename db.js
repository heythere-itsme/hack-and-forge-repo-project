const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mayank1108",
  database: "postgres",
});

async function createTable() {
    try {
      
      await pool.query(
        `CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          userType VARCHAR(10) DEFAULT 'User'
        )`
      );
      console.log("Table 'users' created successfully!");
    } catch (error) {
      console.error("Error creating table:", error);
    }
  }
  
  createTable()
  
  
  module.exports = pool;