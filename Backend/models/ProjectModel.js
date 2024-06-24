const { Model } = require('../core/Model');

class ProjectModel extends Model {
  constructor() {
    super('projects');
    this.projectId = 'project_id';
    this.projectCtgName = 'project_ctg_name';
    this.projectName = 'project_name';
    this.teamId = 'team_id';
    this.linkGitProject = 'link_github_project';
  }

  async addProject(datas) {
    const patternId = String(
      'project' + Math.floor(Math.random() * 100000) + 1
    );
    const projectData = {
      [this.projectId]: patternId,
      [this.projectCtgName]: datas.projectCtgName,
      [this.projectName]: datas.projectName,
      [this.teamId]: datas.teamId,
      [this.linkGitProject]: datas.linkGitProject,
    };
    return await this.insertOne(projectData);
  }
}

module.exports = ProjectModel;
