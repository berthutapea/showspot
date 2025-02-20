const { Controller } = require('../core/Controller');
const ResponseHandler = require('../handler/ResponseHandler');

class StudentController extends Controller {
  constructor() {
    super('StudentModel');
    this.projectModel = 'ProjectModel';
    this.groupProjectModel = 'GroupProjectModel';
    this.sopProjectModel = 'SopProjectModel';
    this.responseHandler = new ResponseHandler();
  }

  // /=== Student Entity ===/
    async dashboardStudent(req, res) {
    try {
      const student = await this.loadModel(this.BaseModel);
      const myId =  req.rawHeaders[5];
      const myData = await student.findById(myId);

      let dashboardData;
      if (Object.keys(myData).length > 0){
        dashboardData = {
            student_id: myData.student_id,
            fullname: myData.fullname,
            photoProfile: myData.photo_profile,
        };
      this.responseHandler.success(res, 'Dashboard Student', 3, dashboardData);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataStudentById(req, res) {
    try {
      const studentId = req.params.id;
      const student = await this.model.findById(studentId);
      if (student.length == 0) {
        res.status(404).json({ message: 'Data Not Found' });
      } else {
        res.status(200).json(student);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

    async getMyProfileStudent(req, res) {
    try {
      const myId = req.params.id;
      const student = await this.loadModel(this.BaseModel);
      const result = await student.findById(myId);
      if (Object.keys(result).length > 0) {
        this.responseHandler.success(res, 'Data Found', 3, result);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }
  async updateMyProfileStudent(req, res) {
    try {
      const myId = req.params.id;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const student = await this.loadModel(this.BaseModel);
      const result = await student.updateData(myId, updatedData, filename);
      if (result > 0) {
        this.responseHandler.success(res, ProfileUpdated);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  async changePasswordStudent(req, res) {
    try {
      const myId = req.params.id;
      const newPassword = req.body;
      const student = await this.loadModel(this.BaseModel);
      const result = await student.changePasswordStudent(myId, newPassword);
      if (result > 0) {
        this.responseHandler.success(res, 'Password Changed');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  // /=== Project Entity ===/
  async addProjectStudent(req, res) {
    try {
      const projectData = req.body;
      console.log(projectData);
      const filename = req.file.filename;
      const project = await this.loadModel('ProjectModel');
      const result = await project.addProject(projectData, filename);
      if (result.affectedRows > 0) {
        this.responseHandler.success(res, 'Project Added');
      } else {
        this.responseHandler.error(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getSopProject(req, res) {
    try {
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const sopProject = await sopProjectModel.findAll('all');
      if (Object.keys(sopProject)) {
        this.responseHandler.success(res, 'Data Found', 3, sopProject);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getShowCaseProjectStudent(req, res) {
    const page = req.params.page;
    const studentId = req.params.id;

    let groupProjectStudentData;

    const studentModel = await this.loadModel(this.BaseModel)
    const student = await studentModel.findById(studentId);

    const params = {
      student_name: student.fullname
    };

    const groupProjectModel = await this.loadModel(this.groupProjectModel);
    const groupProjectStudent = await groupProjectModel.findAll('group student', params);

    if (groupProjectStudent.length > 0) {
      const projectModel = await this.loadModel(this.projectModel);
      const offset = (page - 1) * 5;

      const fetchArray = await Promise.all(groupProjectStudent.map(async (group) => {
        return await projectModel.findAll(1, { group_id: group.group_project_id }, 5, offset, 'created_at');
      }));

      const set = new Set(fetchArray.flatMap(data => data.map(JSON.stringify)));
      const uniqueResult = Array.from(set).map(JSON.parse);

      await Promise.all([set, uniqueResult]);

      groupProjectStudentData = {
        page: page,
        projects: uniqueResult,
        total: uniqueResult.length
      };
    }
    try {
      if (Object.keys(groupProjectStudentData)) {
        this.responseHandler.success(res, 'Data Found', 3, groupProjectStudentData);
      }
    } catch (error) {
       if (groupProjectStudent.length == 0) {
        this.responseHandler.badRequest(res);
      } else {
        this.responseHandler.serverError(res, error);
      }
    }
  }

  async getShowCaseProjectByProjectId(req, res) {
    const projectId = req.params.projectId;

    const params = {
      application_id: projectId
    };

    const project = await this.loadModel(this.projectModel);
    const studentProject = await project.findOne('strict one', params);

    const groupProject = await this.loadModel(this.groupProjectModel);
    const studentGroupProject = await groupProject.findAll('where', { group_project_id: studentProject.group_id });

    const datas = {
      application_id: studentProject.application_id,
      application_title: studentProject.application_title,
      application_image: studentProject.application_image,
      group_name: studentProject.group_name,
      grade_id: studentProject.grade_id,
      project_filter_id: studentProject.project_filter_id,
      status_project_id: studentProject.status_project_id,
      link_video: studentProject.link_video,
      link_design: studentProject.link_design,
      link_github: studentProject.link_github,
      description: studentProject.description,
      notes: studentProject.notes,
      team_project: [
        studentGroupProject
      ]
    }

    try {
      if (Object.keys(datas)) {
        this.responseHandler.success(res, 'Data Found', 3, datas);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

    async updateProjectByStudent(req, res) {
    try {
      const projectId = req.params.projectid;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const project = await this.loadModel(this.projectModel);
      const result = await project.updateProject(projectId, updatedData, filename);
      if (result > 0) {
        // eslint-disable-next-line no-undef
        this.responseHandler.success(res, ProjectUpdated);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  async deleteProjectByStudent(req, res) {
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
}

module.exports = StudentController;