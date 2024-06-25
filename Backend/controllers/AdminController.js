const { Controller } = require('../core/Controller');
const { AdminModel } = require('../models/AdminModel');
const ResponseHandler = require('../handler/ResponseHandler');

class AdminController extends Controller {
  constructor() {
    super('AdminModel');
    this.mentorModel = 'MentorModel';
    this.studentModel = 'StudentModel';
    this.responseHandler = new ResponseHandler();
  }
  /*=== Admin Entity ===*/

  async getMyProfileAdmin(req, res) {
    try {
      const myId = req.params.id;
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.findById(myId);
      if (result.length > 0) {
        this.responseHandler.success(res, 'Data Found', result);
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
      const results = await mentors.findAll();
      if (results) {
        this.responseHandler.success(res, 'Data Found', results);
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
      const result = await mentor.findByMentorId(mentorId);
      if (result.length > 0) {
        this.responseHandler.success(res, 'Data Found', result);
      } else {
        this.responseHandler.badRequest(res);
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
      if (result.length > 0) {
        this.responseHandler.success(res, 'Data Found', result);
      } else {
        this.responseHandler.badRequest(res);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

  async updateDataMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const updatedData = req.body;
      const filename = req.file === undefined ?  0 : req.file.filename;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.updateData(mentorId, updatedData, filename);
      if (result.length > 0) {
        this.responseHandler.success(res, `Data Mentor with ${mentorId} Updated`);
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
        this.responseHandler.success(res, `Data Deleted`);
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
      const admin = await this.loadModel(this.BaseModel);
      const result = await admin.changePassword(myId, newPassword);
      if (result.length > 0) {
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
        this.responseHandler.success(res, 'Data Found', students);
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
      if (student.length > 0) {
        this.responseHandler.success(res, 'Data Found', student);
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
      if (student.length > 0) {
        this.responseHandler.success(res, 'Data Found', student);
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
}

module.exports = AdminController;
