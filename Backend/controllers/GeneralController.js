const { Controller } = require('../core/Controller');
const ResponseHandler = require('../handler/ResponseHandler');
const getUser = require('../middlewares/getUser');

class GeneralController extends Controller {
  constructor(){
    super();
    this.responseHandler = new ResponseHandler();
    this.projectModel = 'ProjectModel';
  }

  async homePageGetShowCaseProjects(req, res) {
    try {
      const projectModel = await this.loadModel(this.projectModel);
      const projects = await projectModel.findAll('all');
      this.responseHandler.success(res, 'Home Page ShowCase Project', 0, projects);
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async homePageGetShowCaseProjectsByFilterProjectId(req, res) {
    try {
      const projectId = req.params.id;
      const projectModel = await this.loadModel(this.projectModel);
      const projects = await projectModel.findFilterProjectById(projectId);
      this.responseHandler.success(res, 'Home Page ShowCase Project', 0, projects);
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async homePageGetShowCaseProjectByProjectId(req, res) {
    try {
      const projectId = req.params.id;
      const projectModel = await this.loadModel(this.projectModel);
      const project = await projectModel.findProjectById(projectId);
      this.responseHandler.success(res, 'Home Page ShowCase Project', 0, project);
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }
}

module.exports = GeneralController;