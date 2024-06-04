const { Database } = require('./Database.js');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
    this.database = new Database();
  }

  async insertOne(datas) {
    try {
      await this.database.openConnection();
      const fields = Object.keys(datas);
      const values = Object.values(datas);

      const fieldsArg = fields.join(', ');
      const valuesArg = values.map(() => '?').join(', ');

      let query = `INSERT INTO ${this.tableName} (${fieldsArg}) VALUES (${valuesArg})`;
      const [results] = await this.database.connection.query(query, values);
      this.database.closeConnection();
      return results;
    } catch (error) {
      console.error('Error create data from the database: ', error);
      return false;
    }
  }

  async findAll() {
    try {
      await this.database.openConnection();
      let query = `SELECT * FROM ${this.tableName}`;
      const [results] = await this.database.connection.query(query);
      this.database.closeConnection();
      return results;
    } catch (error) {
      console.error('Error fetching data from the database: ', error);
      return false;
    }
  }

  async findOne(datas) {
    try {
      await this.database.openConnection();
      const field = Object.keys(datas);
      const value = Object.values(datas);

      let query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ?`;
      const [results] = await this.database.connection.query(query, value);
      this.database.closeConnection();
      return results;
    } catch (error) {
      console.error('Error fetching data from the database: ', error);
      return false;
    }
  }

  async update(params, datas) {
    try {
      await this.database.openConnection();
      const param = Object.keys(params);
      const paramValue = Object.values(params);
      const fieldsArg = Object.keys(datas);
      const newValues = Object.values(datas);

      const setStatement = fieldsArg
        .map((field, index) => `${field} = '${newValues[index]}'`)
        .join(', ');

      const whereClause = param.map(
        (param, index) => `${param} = '${paramValue[index]}'`
      );

      const query = `UPDATE ${this.tableName} SET ${setStatement} WHERE ${whereClause}`;
      const result = await this.database.connection.query(query);
      this.database.closeConnection();

      return result;
    } catch (error) {
      console.error('Error from the database: ', error);
      return false;
    }
  }

  async delete(params) {
    try {
      await this.database.openConnection();
      const param = Object.keys(params);
      const paramValue = Object.values(params);

      const setStatement = param.map(
        (field, index) => `${field} = '${paramValue[index]}'`
      );

      const query = `DELETE FROM ${this.tableName} WHERE ${setStatement}`;

      const result = await this.database.connection.query(query);
      this.database.closeConnection();

      return result;
    } catch (error) {
      console.error('Error from the databse: ', error);
      return false;
    }
  }
}

module.exports = { Model };
