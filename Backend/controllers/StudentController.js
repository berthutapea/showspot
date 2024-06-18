const { Controller } = require('../core/Controller');

class StudentController extends Controller {
  constructor() {
    super('StudentModel');
    this.projectModel = 'ProjectModel';
  }

  /*=== Student Entity ===*/
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

  async getDataStudentByName(req, res) {
    try {
      const userName = req.params.name;
      const student = await this.model.findByName(userName);
      if (student.length == 0) {
        res.status(404).json({ message: 'Data Not Found' });
      } else {
        res.status(200).json(student);
      }
    } catch (error) {}
  }

  async updateDataStudent(req, res) {
    try {
      const studentId = req.params.id;
      const updatedData = req.body;
      const result = await this.model.updateData(studentId, updatedData);
      if (result) {
        res.status(200).json({ message: 'Data Updated' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  /*=== Project Entity ===*/
  async addProject(req, res) {
    try {
      const project = req.body;
      const result = await this.loadModel(this.projectModel).addProject(
        project
      );
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Data Project Added' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = StudentController;
