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

  async findAll(mode = 0, datas = 0, limit = 0, offset = 0, orderBy = 'id') {
    try {
      let query;
      let formattedValue;
      const field = Object.keys(datas);
      const value = Object.values(datas);
      await this.database.openConnection();
      if (mode == 1 && limit > 0 && offset >= 0 && orderBy) {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ? ORDER BY ${orderBy} ASC LIMIT ? OFFSET ?`;
        formattedValue = [value[0], parseInt(limit), offset];
      } else if (mode === 'where') {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ?`;
        formattedValue = [value[0]];
      } else if (mode === 'like') {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} LIKE ?`;
        formattedValue = [value[0]];
      } else if (mode === 'group student') {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} LIKE "%${value[0]}%"`;
        return [results] = await this.database.connection.query(query);
      } else if (mode === 'all') {
        query = `SELECT * FROM ${this.tableName}`;
      } else if (mode === 'confirmed') {
        query = 'SELECT * FROM projects WHERE status_project_id = 1';
        let [results] = await this.database.connection.query(query);
        return results;
      }
      const [results] = await this.database.connection.query(query, formattedValue);
      return results;
    } catch (error) {
      console.error('Error fetching data from the database: ', error);
      return false;
    } finally {
      this.database.closeConnection();
    }
  }

  /*
    0 = default mode (LIKE)
    1 = strict mode (=))
  */
async findOne(mode = 0, datas, limit = 0, offset = 0, orderBy = 'id') {
  try {
    await this.database.openConnection();
    const field = Object.keys(datas);
    const value = Object.values(datas);
    let query;
    let formattedValue;

    if (mode) {
      if (mode == 'strict all' && limit > 0 && offset >= 0 && orderBy) {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ? ORDER BY ${orderBy} ASC LIMIT ? OFFSET ?`;
        formattedValue = [value[0], limit, offset];
      } else if (mode == 'strict one') {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} = ?`;
        formattedValue = [value[0]];
      } else if (mode == 'like' && limit > 0 && offset >= 0) {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} LIKE ? ORDER BY ${orderBy} ASC LIMIT ? OFFSET ?`;
        formattedValue = [`%${value[0]}%`, limit, offset];
      } else if (mode == 'where') {
        query = `SELECT * FROM ${this.tableName} WHERE ${field[0]} LIKE ?`;
        formattedValue = [`%${value[0]}%`];
      } else if (mode == 'student in group') {
        query = `SELECT * FROM group_project WHERE student_name LIKE "%${value[0]}%"`;
      } else if (mode == 'student group') {
        query = `SELECT * FROM group_project WHERE group_project_id LIKE "%${value[0]}%"`;
        let [results] = await this.database.connection.query(query);
        return results;
      }
    }
    const [results] = await this.database.connection.query(query, formattedValue);
    return results[0];
  } catch (error) {
    console.error('Error fetching data from the database: ', error);
    return false;
  } finally {
    await this.database.closeConnection();
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

      const [result] = await this.database.connection.query(query);
      this.database.closeConnection();

      return result.affectedRows;
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
