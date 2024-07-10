const { Model } = require('../core/Model');

class GroupProjectModel extends Model {
  constructor() {
    super('group_project');
    this.groupProjectId = 'group_project_id';
    this.groupProjectName = 'group_project_name';
    this.studentName = 'student_name';
    this.studentPosition = 'student_position';
    this.createdAt = 'created_at';
  }

  async updateGroupProject(params, andParams, datas) {
    try {
      await this.database.openConnection();
      const param = Object.keys(params);
      const paramValue = Object.values(params);

      const andParam = Object.keys(andParams);
      const andParamValue = Object.values(andParams);

      const fieldsArg = Object.keys(datas);
      const newValues = Object.values(datas);

      const setStatement = fieldsArg
        .map((field, index) => `${field} = '${newValues[index]}'`)
        .join(', ');

      const whereClause = param.map(
        (param, index) => `${param} = '${paramValue[index]}'`
      );

      const andWhereClause = andParam.map(
        (andParam, index) => `${andParam} = '${andParamValue[index]}'`
      );

      const query = `UPDATE ${this.tableName} SET ${setStatement} WHERE ${whereClause} AND ${andWhereClause}`;

      const [result] = await this.database.connection.query(query);
      this.database.closeConnection();

      return result.affectedRows;
    } catch (error) {
      console.error('Error from the database: ', error);
      return false;
    }
  }
}

module.exports = GroupProjectModel;
