const { Model } = require('../core/Model');

class AdminModel extends Model {
  constructor() {
    super('admins');
  }
}

module.exports = AdminModel;
