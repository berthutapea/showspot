const { Controller } = require('../core/Controller');
const { AdminModel } = require('../models/AdminModel');

class AdminController extends Controller {
  constructor() {
    super('AdminModel');
  }
  /*=== Admin Entity ===*/
  async getDataMentors(req, res) {
    try {
      const mentorsModel = await this.loadModel('MentorModel');
      console.log(mentors);
    } catch (error) {}
  }

  /*=== User Entity ===*/
  async createDataUser(req, res) {
    try {
      const userData = req.body;
      const userModel = await this.loadModel('UserModel');
      const result = await userModel.insertDataUser(userData);
      if (result.affectedRows > 0) {
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
      const userModel = await this.loadModel('UserModel');
      const users = await userModel.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  }

  async getDataUserById(req, res) {
    try {
      const userId = req.params.id;
      const userModel = await this.loadModel('UserModel');
      const user = await userModel.findById(userId);
      if (user.length == 0) {
        res.status(404).json({ message: 'Data Not Found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getDataUserByName(req, res) {
    try {
      const userName = req.params.name;
      const userModel = await this.loadModel('UserModel');
      const user = await userModel.findByName(userName);
      if (user.length == 0) {
        res.status(404).json({ message: 'Data Not Found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateDataUser(req, res) {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const userModel = await this.loadModel('UserModel');
      const result = await userModel.updateData(userId, updatedData);
      if (result) {
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
      const userModel = await this.loadModel('UserModel');
      const result = await userModel.changePasswordUser(userId, newPassword);

      if (result) {
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
      const userModel = await this.loadModel('UserModel');
      const result = await userModel.deleteData(userId);
      if (result) {
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
