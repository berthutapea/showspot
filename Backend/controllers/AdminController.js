const { Controller } = require('../core/Controller');
const { AdminModel } = require('../models/AdminModel');

class AdminController extends Controller {
  constructor() {
    super('AdminModel');
    this.mentorModel = 'MentorModel';
    this.userModel = 'UserModel';
  }
  /*=== Admin Entity ===*/

  /*=== Mentor Entity ===*/

  async createDataMentor(req, res) {
    try {
      const mentor = req.body;
      const mentorsModel = await this.loadModel('MentorModel');
      const result = await mentorsModel.insertDataMentor(mentor);
      if (result.length > 0) {
        res.status(200).json({ message: 'Data Mentor Created' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDataMentors(req, res) {
    try {
      const mentors = await this.loadModel(this.mentorModel);
      const results = await mentors.findAll();
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDataMentorById(req, res) {
    try {
      const mentorId = req.params.id;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.findByMentorId(mentorId);

      if (result.length > 0) {
        res.status(200).json({ result });
      } else {
        res.status(404).json({ message: `Data with '${mentorId}' Not Found!` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateDataMentor(req, res) {
    try {
      const mentorId = req.params.id;
      const updatedData = req.body;
      const mentor = await this.loadModel(this.mentorModel);
      const result = await mentor.updateData(mentorId, updatedData);
      if (result > 0) {
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
      if (result > 0) {
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

  /*=== User Entity ===*/
  async createDataUser(req, res) {
    try {
      const userData = req.body;
      const user = await this.loadModel(this.userModel);
      const result = await user.insertDataUser(userData);
      if (result.length > 0) {
        res.status(201).json({ message: 'User Created' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDataUsers(req, res) {
    try {
      const userModel = await this.loadModel(this.userModel);
      const users = await userModel.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  }

  async getDataUserById(req, res) {
    try {
      const userId = req.params.id;
      const userModel = await this.loadModel(this.userModel);
      const user = await userModel.findById(userId);
      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `Data with '${userId}' Not Found!` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDataUserByName(req, res) {
    try {
      const userName = req.params.name;
      const userModel = await this.loadModel(this.userModel);
      const user = await userModel.findByName(userName);
      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: `Data with '${userName}' Not Found` });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateDataUser(req, res) {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const userModel = await this.loadModel(this.userModel);
      const result = await userModel.updateData(userId, updatedData);
      if (result.length > 0) {
        res.status(200).json({ message: 'Data Updated' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async changePasswordUser(req, res) {
    try {
      const userId = req.params.id;
      const newPassword = req.body;
      const userModel = await this.loadModel(this.userModel);
      const result = await userModel.changePasswordUser(userId, newPassword);

      if (result.length > 0) {
        res.status(200).json({ message: 'Password Changed' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteDataUser(req, res) {
    try {
      const userId = req.params.id;
      const userModel = await this.loadModel(this.userModel);
      const result = await userModel.deleteData(userId);
      if (result.length) {
        res.status(200).json({ message: 'Data Deleted' });
      } else {
        res.status(400).json({ message: 'Bad Request' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = { AdminController };
