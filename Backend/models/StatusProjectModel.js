const { Model } = require('../core/Model');

class StatusProjectModel extends Model {
  constructor() {
    super('status_project');
    this.statusProjectId = 'status_project_id';
    this.statusProjectName = 'status_project_name';
  }

  async findStatusProjectById(statusId) {
    const paramStatusProject = {
      [this.statusProjectId]: statusId
    };
    const statusProjectData = await this.findOne('where', paramStatusProject);
    return statusProjectData.status_project_name;
  }
}

module.exports = StatusProjectModel;
