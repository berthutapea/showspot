const { Database } = require('./Database');

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

    }
  }

  async findAll() {
    try {
      await this.database.openConnection();
      const [results] = await this.database.connection.query(
        `SELECT * FROM ${this.tableName}`
      );
      this.database.closeConnection();
      return results;
    } catch (error) {
      console.error('Error fetching data from the database: ', error);
      throw error;
    }
  }
}

module.exports = { Model };
