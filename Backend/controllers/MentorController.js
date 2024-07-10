const { Controller } = require('../core/Controller');
const ResponseHandler = require('../handler/ResponseHandler');
const getUser = require('../middlewares/getUser');

class MentorController extends Controller {
  constructor() {
    super('MentorModel');
    this.studentModel = 'StudentModel';
    this.projectModel = 'ProjectModel';
    this.sopProjectModel = 'SopProjectModel';
    this.responseHandler = new ResponseHandler();
  }
  /*=== Mentor Entity ===*/
  async dashboardMentor(req, res) {
    try {
      const mentor = await this.loadModel(this.BaseModel);
      const myId =  req.rawHeaders[5];
      const myData = await mentor.findByMentorId(myId);

      let dashboardData;
      if (Object.keys(myData).length > 0){
        dashboardData = {
            admin_id: myData.admin_id,
            fullname: myData.fullname,
            photoProfile: myData.photo_profile,
        };
      this.responseHandler.success(res, 'Dashboard Mentor', 2, dashboardData);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getMyProfileMentor(req, res) {
    try {
      const myId = req.params.id;
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.findByMentorId(myId);
      if (Object.keys(result).length > 0) {
        this.responseHandler.success(res, 'Data Found', 2, result);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async updateMyProfileMentor(req, res) {
    try {
      const myId = req.params.id;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.updateData(myId, updatedData, filename);
      if (result.length > 0) {
        this.responseHandler.success(res, `Profile Updated`);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  async changePasswordMentor(req, res) {
    try {
      const myId = req.params.id;
      const newPassword = req.body;
      const mentor = await this.loadModel(this.BaseModel);
      const result = await mentor.changePasswordMentor(myId, newPassword);
      if (result.length > 0) {
        this.responseHandler.success(res, 'Password Changed');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  /*=== Project Entity ===*/
  async getSopProject(req, res) {
    try {
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const sopProject = await sopProjectModel.findAll('all');
      if (Object.keys(sopProject)) {
        this.responseHandler.success(res, 'Data Found', 2, sopProject);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

    async getShowProjects(req, res) {
      let statusProject;
      let page;
      if (req.params.page === undefined || req.params.page === '' || req.params.page === 0) {
        page = req.params.page = 1;
      } else {
        page = req.params.page;
      }

      if (req.params.statusproject === undefined || req.params.statusproject === '' || req.params.statusproject === 0) {
        statusProject = req.params.statusproject = 1;
      } else {
        statusProject = req.params.statusproject;
      }

      switch (statusProject) {
        case 'confirmed':
          statusProject = 1;
          break;
        case 'pending':
          statusProject = 2;
          break;
        case 'rejected':
          statusProject = 3;
          break;
        default:
          statusProject = 1;
          break;
      }

      try {
        const projectModel = await this.loadModel(this.projectModel);
        const statusProjectData = await projectModel.findProjectStatus(statusProject, page);
        const projects = {
          [statusProjectData.data[0].status]: {
            page: page,
            total: statusProjectData.total,
            project: statusProjectData.data
          }
        }
        this.responseHandler.success(res, `Data Found`, 2, projects);
      } catch (error) {
        this.responseHandler.serverError(res, error);
      }
  }

    async deleteProjectByMentor(req, res) {
    try {
      const projectId = req.params.id;
      const projectModel = await this.loadModel(this.projectModel);
      const result = await projectModel.deleteProjectById(projectId);
      if (result[0].affectedRows > 0) {
        this.responseHandler.success(res,'Data Deleted');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async findShowProjectById(req, res) {
    try {
      const projectId = req.params.id;
      const projectModel = await this.loadModel(this.projectModel);
      const project = await projectModel.findProjectById(projectId);
      if (Object.keys(project).length > 0) {
        this.responseHandler.success(res, 'Data Found', 2, project);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async findShowProjectByGroupName(req, res) {
    try {
      const groupName = req.params.groupname;
      const projectModel = await this.loadModel(this.projectModel);
      const project = await projectModel.findProjectByGroupName(groupName);
      if (Object.keys(project).length > 0) {
        this.responseHandler.success(res, 'Data Found', 2, project);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async valuationProject(req, res) {
    try {
      const params = {
        'application_id': req.params.id
      };
      const valuationData = req.body;

      const project = await this.loadModel(this.projectModel);
      const result = await project.update(params, valuationData);

      if (result > 0) {
        this.responseHandler.success(res, 'Valuation Project is Success');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }
}

module.exports = MentorController;
