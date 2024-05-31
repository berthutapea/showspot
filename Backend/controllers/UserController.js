const { Controller } = require('../core/Controller');

class UserController extends Controller {
  constructor() {
    super('UserModel');
  }

  async createDataUser(req, res) {
    const userData = req.body;
    const user = await this.model.insertDataUser(userData);
    try {
      if (user.affectedRows > 0) {
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
      const users = await this.model.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  }

  async getDataUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await this.model.findById(userId);
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
      const user = await this.model.findByName(userName);
      if (user.length == 0) {
        res.status(404).json({ message: 'Data Not Found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {}
  }

  async updateDataUser(req, res) {
    try {
      const userId = req.params.id;
      const updatedData = req.body;
      const result = await this.model.updateData(userId, updatedData);
      if (result) {
        res.status(200).json({ message: 'Data Updated' });
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
      const result = await this.model.deleteData(userId);
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

module.exports = { UserController };
