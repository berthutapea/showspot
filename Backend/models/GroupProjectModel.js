const { Model } = require('../core/Model');

class GroupProjectModel extends Model {
  constructor() {
    super('group_project');
    this.groupProjectId = 'group_project_id';
    this.groupProjectName = 'group_project_name';
    this.studentName = 'student_name';
    this.studentPosition = 'student_position';
    this.createdAt = 'created_at';
    this.updatedAt = 'updated_at';
  }
}



module.exports = GroupProjectModel;
