const { Controller } = require('../core/Controller');
const ResponseHandler = require('../handler/ResponseHandler');
const getUser = require('../middlewares/getUser');

class AdminController extends Controller {
  constructor() {
    super('AdminModel');
    this.mentorModel = 'MentorModel';
    this.studentModel = 'StudentModel';
    this.projectModel = 'ProjectModel';
    this.sopProjectModel = 'SopProjectModel';
    this.groupTypeModel = 'GroupTypeModel';
    this.classTypeModel = 'ClassTypeModel';
    this.responseHandler = new ResponseHandler();
  }
  /*=== Admin Entity ===*/
  async dashboardAdmin(req, res) {
    try {
      const myId =  req.rawHeaders[5];
      const admin = await this.loadModel(this.BaseModel);
      const mentor = await this.loadModel(this.mentorModel);
      const student = await this.loadModel(this.studentModel);
      const project = await this.loadModel(this.projectModel);
      const countAdmin = await admin.findAll('all');
      const countMentor = await mentor.findAll('all');
      const countStudent = await student.findAll('all');
      const countProject = await project.findAll('all');
      const myData = await admin.findById(myId);

      const dashboardData = {
        admin: {
          admin_id: myData.admin_id,
          fullname: myData.fullname,
          photoProfile: myData.photo_profile,
        },
        total: {
          admin: countAdmin.length,
          mentor: countMentor.length,
          student: countStudent.length,
          project: countProject.length,
        }
      };

      this.responseHandler.success(res, 'Dashboard Admin', 1, dashboardData);
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getMyProfileAdmin(req, res) {
    try {
      const myId = req.params.id;
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.findById(myId);
      if (Object.keys(result).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, result);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async updateMyProfileAdmin(req, res) {
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

  async changePasswordAdmin(req, res) {
    try {
      const myId = req.params.id;
      const newPassword = req.body;
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.changePasswordAdmin(myId, newPassword);
      if (result > 0) {
        this.responseHandler.success(res, 'Password Changed');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  /*=== Mentor Entity ===*/
  async createDataMentor(req, res) {
    try {
      const filename = req.file.filename;
      const mentor = req.body;
      const mentorsModel = await this.loadModel(this.mentorModel);
      const result = await mentorsModel.insertDataMentor(mentor, filename);
      if (result.affectedRows > 0) {
        this.responseHandler.success(res, 'Mentor Created');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataMentors(req, res) {
    try {
      const mentors = await this.loadModel(this.mentorModel);
      const mentorList = await mentors.findAll('all');

      const classTypeModel = await this.loadModel(this.classTypeModel);
      const groupTypeModel = await this.loadModel(this.groupTypeModel);

      const results = await Promise.all(mentorList.map(async (mentor) => {
        const classTypeName = await classTypeModel.findClassTypeById(mentor.class_type_id);
        const groupTypeName = await groupTypeModel.findGroupTypeById(mentor.group_type_id);
        return {
          mentor_id: mentor.mentor_id,
          photo_profile: mentor.photo_profile,
          fullname: mentor.fullname,
          campus: mentor.campus,
          major: mentor.major,
          group_type: groupTypeName,
          class_type: classTypeName,
        };
      }));
      if (Object.keys(results).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, results);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataMentorById(req, res) {
    try {
      const mentorId = req.params.id;
      const mentor = await this.loadModel(this.mentorModel);
      const classTypeModel = await this.loadModel(this.classTypeModel);
      const groupTypeModel = await this.loadModel(this.groupTypeModel);
      const result = await mentor.findByMentorId(mentorId);
      const classTypeName = await classTypeModel.findClassTypeById(result.class_type_id);
      const groupTypeName = await groupTypeModel.findGroupTypeById(result.group_type_id);
      const responseData = {
        mentor_id: result.mentor_id,
        fullname: result.fullname,
        username: result.username,
        campus: result.campus,
        major: result.major,
        class_type: classTypeName,
        class_type_id: result.class_type_id,
        group_type: groupTypeName,
        group_type_id: result.group_type_id,
        profile_image: result.photo_profile
      }
      if (Object.keys(mentor).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, responseData);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataMentorByName(req, res) {
    try {
      const mentorName = req.params.name;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.findByMentorName(mentorName);
      if (Object.keys(result).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, result);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }
  //
  async updateDataMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const mentor = await this.loadModel(this.mentorModel);
      const classTypeModel = await this.loadModel(this.classTypeModel);
      const groupTypeModel = await this.loadModel(this.groupTypeModel);
      const result = await mentor.updateData(mentorId, updatedData, filename);
      const classTypeName = await classTypeModel.findClassTypeById(result.class_type_id);
      const groupTypeName = await groupTypeModel.findGroupTypeById(result.group_type_id);
      const responseData = {
        mentor_id: result.mentor_id,
        fullname: result.fullname,
        username: result.username,
        campus: result.campus,
        major: result.major,
        class_type: classTypeName,
        class_type_id: result.class_type_id,
        group_type: groupTypeName,
        group_type_id: result.group_type_id,
        profile_image: result.photo_profile
      }
      if (Object.keys(responseData).length > 0) {
        this.responseHandler.success(res, `Data Mentor with ${mentorId} Updated`, 1, responseData);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  async deleteDataMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.deleteData(mentorId);
      if (result[0].affectedRows > 0) {
        this.responseHandler.success(res, `Data Deleted`, 1);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async changePasswordMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const newPassword = req.body;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.changePasswordMentor(mentorId, newPassword);
      if (result > 0) {
        this.responseHandler.success(res, 'Password Changed');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
        this.responseHandler.serverError(res, error);
    }
  }

  /*=== Student Entity ===*/
  async createDataStudent(req, res) {
    try {
      const studentData = req.body;
      const filename = req.file.filename;
      const student = await this.loadModel(this.studentModel);
      const result = await student.insertDataStudent(studentData, filename);
      if (result.affectedRows > 0) {
        this.responseHandler.success(res, 'Student Created');
      } else {
        this.responseHandler.error(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataStudents(req, res) {
    try {
      const studentModel = await this.loadModel(this.studentModel);
      const students = await studentModel.getAllStudentsData();
      if (students) {
        this.responseHandler.success(res, 'Data Found', 1, students);
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
      const studentModel = await this.loadModel(this.studentModel);
      const student = await studentModel.findById(studentId);

      if (Object.keys(student).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, student);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getDataStudentByName(req, res) {
    try {
      const studentName = req.params.name;
      const studentModel = await this.loadModel(this.studentModel);
      const student = await studentModel.findByName(studentName);
      if (Object.keys(student).length > 0) {
        this.responseHandler.success(res, 'Data Found', 1, student);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async updateDataStudent(req, res) {
    try {
      const studentId = req.params.id;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const studentModel = await this.loadModel(this.studentModel);
      const result = await studentModel.updateData(studentId, updatedData, filename);
      if (result[0].affectedRows > 0) {
        this.responseHandler.success(res, `Data Student with ${studentId} Updated`);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async changePasswordStudent(req, res) {
    try {
      const studentId = req.params.id;
      const newPassword = req.body;
      const studentModel = await this.loadModel(this.studentModel);
      const result = await studentModel.changePasswordStudent(
        studentId,
        newPassword
      );
      if (result.length > 0) {
        this.responseHandler.success(res, 'Password Changed');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async deleteDataStudent(req, res) {
    try {
      const studentId = req.params.id;
      const studentModel = await this.loadModel(this.studentModel);
      const result = await studentModel.deleteData(studentId);
      if (result[0].affectedRows > 0) {
        this.responseHandler.success(res, 'Data Deleted');
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  /*=== Project Entity ===*/
    async addSopProject(req, res) {
    try {
      const sopProjectId = 1;
      const updatedData = req.body;
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const result = await sopProjectModel.updateData(sopProjectId, updatedData);
      if (result > 0) {
        this.responseHandler.success(res, `Data SOP Project Added`);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async getSopProject(req, res) {
    try {
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const sopProject = await sopProjectModel.findAll('all');
      const datas = sopProject[0];
      if (Object.keys(sopProject)) {
        this.responseHandler.success(res, 'Data Found', 1, datas);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async updateSopProject(req, res) {
    try {
      const sopProjectId = 1;
      const updatedData = req.body;
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const result = await sopProjectModel.updateData(sopProjectId, updatedData);
      if (result > 0) {
        this.responseHandler.success(res, `Data SOP Project Updated`);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

    async deleteSopProject(req, res) {
    try {
      const sopProjectId = 1;
      const data = "";
      const sopProjectModel = await this.loadModel(this.sopProjectModel);
      const result = await sopProjectModel.deleteData(sopProjectId, data);
      if (result > 0) {
        this.responseHandler.success(res, `Data SOP Project Deleted`);
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
        this.responseHandler.success(res, `Data Found`, 1, projects);
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
        this.responseHandler.success(res,'Data Found', 1, project);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async findShowProjectByGroupName(req, res) {
    try {
      const groupName = req.params.name;
      const projectModel = await this.loadModel(this.projectModel);
      const project = await projectModel.findProjectByGroupName(groupName);
      if (project.length > 0) {
        this.responseHandler.success(res, 'Data Found', project);
      } else {
        this.responseHandler.notFound(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

    async valuationProjectByAdmin(req, res) {
    try {
      const params = {
        'application_id': req.params.id
      };
      const valuationData = req.body;

      const projectModel = await this.loadModel(this.projectModel);
      const result = await projectModel.update(params, valuationData);
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

module.exports = AdminController;
