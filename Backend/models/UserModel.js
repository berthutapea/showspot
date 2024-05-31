const { Model } = require('../core/Model');

class UserModel extends Model {
  constructor() {
    super('users');
    this.userId = 'user_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
  }

  async insertDataUser(datas) {
    const userData = {
      [this.userId]: datas.userId,
      [this.fullname]: datas.fullname,
      [this.username]: datas.username,
      [this.password]: datas.password,
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
      [this.userId]: id,
    };
    return await this.delete(param);
  }

  async changePasswordUser(id, password) {
    const param = {
      [this.userId]: id,
    };
    return await this.update(param, password);
  }
}

module.exports = UserModel;
