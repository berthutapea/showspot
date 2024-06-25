const { Model } = require('../core/Model');
const StatusProjectModel = require('../models/StatusProjectModel');

class ProjectModel extends Model {
  constructor() {
    super('projects');
    this.applicationId = 'application_id';
    this.applicationTitle = 'application_title';
    this.applicationImage = 'application_image';
    this.grupName = 'grup_name';
    this.linkVideo = 'link_video';
    this.linkDesign = 'link_design';
    this.linkGithub = 'link_github';
    this.description = 'description';
    this.grup = 'grup_id';
    this.gradeId = 'grade_id';
    this.projectFilterId = 'project_filter_id';
    this.statusProjectId = 'status_project_id';
    this.notes = 'notes';
    this.createdAt = 'created_at';
    this.updatedAt = 'updated_at';
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

  async findProjectStatus (statusId, page) {
    const statusProjectModel = new StatusProjectModel();
    const offset = (page - 1) * 2;
    const paramProject = {
      [this.statusProjectId]: statusId
    };
    const projects = await this.findOne(paramProject, 1, 2, offset, 'created_at');
    const dataPromises = projects.map(async (project) => {
      return {
        [this.applicationTitle]: project.application_title,
        [this.applicationImage]: project.application_image,
        [this.grupName]: project.grup_name,
        status: await statusProjectModel.findStatusProjectById(statusId),
      };
    });
    const data = await Promise.all(dataPromises);
    return data;
  }

  // ===> make a search project by group name
    async findProjectByGroupName (statusId, page) {
     
  }
}



module.exports = ProjectModel;
