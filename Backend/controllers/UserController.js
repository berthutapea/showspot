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

  async getDataUsers(res) {
    try {
      const users = await this.model.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Bad Request' });
    }
  }
}

module.exports = { UserController };
