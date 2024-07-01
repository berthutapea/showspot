const { Model } = require('../core/Model');
const StatusProjectModel = require('../models/StatusProjectModel');
const GroupProjectModel = require('../models/GroupProjectModel');

class ProjectModel extends Model {
  constructor() {
    super('projects');
    this.applicationId = 'application_id';
    this.applicationTitle = 'application_title';
    this.applicationImage = 'application_image';
    this.groupName = 'group_name';
    this.linkVideo = 'link_video';
    this.linkDesign = 'link_design';
    this.linkGithub = 'link_github';
    this.description = 'description';
    this.group = 'group_id';
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

  // mode = 0, datas = 0, limit = 0, offset = 0, orderBy = 'id'
  async findProjectStatus (statusId, page) {
    const statusProjectModel = new StatusProjectModel();
    const offset = (page - 1) * 5;
    const paramProject = {
      [this.statusProjectId]: statusId
    };
    const projects = await this.findAll(1, paramProject, 5, offset, 'created_at');
    const totalData = await this.findAll('where', paramProject);
    const statusProject = await statusProjectModel.findStatusProjectById(statusId);
    const dataPromises = projects.map(async (project) => {
      return {
        [this.applicationTitle]: project.application_title,
        [this.applicationImage]: project.application_image,
        [this.groupName]: project.group_name,
        status: await statusProject,
      };
    });
    const datas = await Promise.all(dataPromises);
    return { data: datas, total: totalData.length };
  }

  async findProjectById(projectId) {
    const groupProjectModel = new GroupProjectModel();
    const projectData = {
      [this.applicationId]: projectId,
    };

    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    const resultProject = await this.findOne('strict one', projectData);
    const groupProjectData = {
      [groupProjectModel.groupProjectId]: await resultProject.group_id,
    };


    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    const resultGroup = await groupProjectModel.findAll('where', groupProjectData);

    const result = {
      project: resultProject,
      group_project: resultGroup,
    };

    return result;
  }

  // ===> make a search project by group name
  async findProjectByGroupName (groupName) {
    const projectData = {
      [this.groupName]: groupName,
    };

    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.findAll('where', projectData);
  }
}



module.exports = ProjectModel;
