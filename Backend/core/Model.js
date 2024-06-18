const { Database } = require('./Database.js');

class Model {
  constructor(tableName) {
    this.tableName = tableName;
    this.database = new Database();
  }

  /*
    0 = default mode (allow duplicate value, except: id)
    1 = strict mode (not allow duplicate value)
  */
  async insertOne(datas, mode = 0) {
    console.log(datas);
    try {
      await this.database.openConnection();
      const fields = Object.keys(datas);
      const values = Object.values(datas);
      let query;

      if (mode) {
        query = `SELECT ${fields[1]} FROM ${this.tableName} WHERE ${fields[1]} = '${values[1]}'`;
        const [checkDuplicateData] = await this.database.connection.query(query);
        if (checkDuplicateData.length > 0){
          return 0;
        }
      }

      const fieldsArg = fields.join(', ');
      const valuesArg = values.map(() => '?').join(', ');

      query = `INSERT INTO ${this.tableName} (${fieldsArg}) VALUES (${valuesArg})`;
      const [results] = await this.database.connection.query(query, values);
      return results;
    } catch (error) {
      console.error('Error create data from the database: ', error);
      return false;
    } finally {
      this.database.closeConnection();
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

  /*
    0 = default mode (LIKE)
    1 = strict mode (=))
  */
  async findOne(datas, mode = 0) {
    try {
      await this.database.openConnection();
      const field = Object.keys(datas);
      const value = Object.values(datas);
      let query;
      let formattedValue;

      if (mode) {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ?`
        formattedValue = value;
      } else {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} LIKE ?`;
        formattedValue = `%${value}%`;
      }
      const [results] = await this.database.connection.query(query, [formattedValue]);
      return results;
    } catch (error) {
      console.error('Error fetching data from the database: ', error);
      return false;
    } finally {
      this.database.closeConnection();
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
