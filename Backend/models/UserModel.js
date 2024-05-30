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
      [this.password]: datas.password
    };
    const user = await this.insertOne(userData);
    return user;
  }
}

module.exports = UserModel;
