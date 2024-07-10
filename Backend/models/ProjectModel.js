const { Model } = require('../core/Model');
const config = require('../config/configuration');
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
    this.groupId = 'group_id';
    this.gradeId = 'grade_id';
    this.projectFilterId = 'project_filter_id';
    this.statusProjectId = 'status_project_id';
    this.notes = 'notes';
  }

  async addProject(datas, filename) {
    console.log('addProject berjalan..')
    const groupProjectModel = new GroupProjectModel();
    const filePath = `${config.api.base_url}api/images/${filename}`;
    const patternId = String('project' + Math.floor(Math.random() * 10000) + 1);

    const projectId = patternId;
    const projectData = {
      [this.applicationId]: projectId,
      [this.applicationImage]: filePath,
      [this.applicationTitle]: datas.application_title,
      [this.groupName]: datas.group_name,
      [this.linkVideo]: datas.link_video,
      [this.linkDesign]: datas.link_design,
      [this.linkGithub]: datas.link_github,
      [this.description]: datas.description,
      [this.statusProjectId]: 2,
      [this.groupId]: `group-${projectId}`,
    };

    const groupProject = {
      Hustler: datas.Hustler,
      Hipster: datas.Hipster,
      "Scrum Master": datas["Scrum Master"],
      Hacker: datas.Hacker,
    };

    for (let key in groupProject) {
      if (groupProject.hasOwnProperty(key)) {
        let groupProjectData = {
          group_project_id: `group-${projectId}`,
          group_project_name: datas.group_name,
          student_name: groupProject[key],
          student_position: key,
        };
        await groupProjectModel.insertOne(groupProjectData);
      }
    }

    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.insertOne(projectData, 1);
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
        [this.applicationId]: project.application_id,
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

  async findFilterProjectById(filterId) {
    const paramFilterProject = {
      [this.projectFilterId]: filterId
    };
    const filterProjectdata = await this.findAll('where', paramFilterProject);
    return filterProjectdata;
  }

  async deleteProjectById(projectId) {
    const param = {
      [this.applicationId]: projectId,
    };
    return await this.delete(param);
  }
}



module.exports = ProjectModel;
