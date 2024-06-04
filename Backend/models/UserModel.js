const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');

class UserModel extends Model {
  constructor() {
    super('users');
    this.userId = 'user_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
  }

  async insertDataUser(datas) {
    const hashingService = new HashingService();
    const patternId = String('user' + Math.floor(Math.random() * 10000) + 1);
    const userId = patternId;
    const hashedPassword = await hashingService.generateHash(datas.password);
    const userData = {
      [this.userId]: userId,
      [this.fullname]: datas.fullname,
      [this.username]: datas.username,
      [this.password]: hashedPassword,
    };
    return await this.insertOne(userData);
  }

  async findById(id) {
    const userData = {
      [this.userId]: id,
    };
    return await this.findOne(userData);
  }

  async findByName(name) {
    const userData = {
      [this.fullname]: name,
    };
    return await this.findOne(userData);
  }

  async updateData(id, datas) {
    const param = {
      [this.userId]: id,
    };
    return await this.update(param, datas);
  }

  async deleteData(id) {
    const param = {
      [this.userId]: id
    };
    return await this.delete(param);
  }

  async changePasswordUser(id, datas) {
    const hashingService = new HashingService();
    const param = {
      [this.userId]: id
    };
    const hashedPassword = await hashingService.generateHash(datas.password);
    const newData = {
      [this.password]: hashedPassword
    }
    return await this.update(param, newData);
  }
}

module.exports = UserModel;
