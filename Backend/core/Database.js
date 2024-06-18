const config = require('../config/configuration');
const mysql = require('mysql2/promise');

class Database {
  constructor() {
    this.port = config.db.port;
    this.host = config.db.host;
    this.user = config.db.user;
    this.password = config.db.password;
    this.database = config.db.database;
    this.connection = null;
  }

  async openConnection() {
    try {
      this.connection = await mysql.createConnection({
        host: this.host,
        port: this.port,
        user: this.user,
        password: this.password,
        database: this.database,
      });

      if (this.connection) {
        console.log('Database Connected: ' + this.database);
      }
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
  }

  async closeConnection() {
    try {
      if (this.connection) {
        await this.connection.end();
        console.log('Database Closed Connection.');
      } else {
        console.log('No active connection.');
      }
    } catch (error) {
      console.error('Error closing the database connection: ', error);
    }
  }
}

module.exports = { Database };
