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

  /*=== Mentor Entity ===*/

  async createDataMentor(req, res) {
    isAuthenticated(req, res);
    try {
      const mentor = req.body;
      const mentorsModel = await this.loadModel(this.mentorModel);
      const result = await mentorsModel.insertDataMentor(mentor);
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

      if (result.affectedRows > 0) {
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
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.updateData(mentorId, updatedData);
      if (result[0].affectedRows > 0) {
        res
          .status(201)
          .json({ message: `Data Mentor with ${mentorId} Updated` });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteDataMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.deleteData(mentorId);
      if (result[0].affectedRows > 0) {
        res.status(200).json({ message: 'Data Mentor Deleted' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async changePasswordMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const newPassword = req.body;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.changePasswordMentor(mentorId, newPassword);
      res.status(200).json({ message: 'Password Changed' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  /*=== Student Entity ===*/
  async createDataStudent(req, res) {
    try {
      const studentData = req.body;
      const student = await this.loadModel(this.studentModel);
      const result = await student.insertDataStudent(studentData);
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
      const studentModel = await this.loadModel(this.studentModel);
      const result = await studentModel.updateData(studentId, updatedData);
      if (result[0].affectedRows > 0) {
        this.responseHandler.success(res, 'Data Updated');
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
