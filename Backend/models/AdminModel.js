const { Model } = require('../core/Model');

class AdminModel extends Model {
  constructor() {
    super('admins');
    this.adminId = 'admin_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
    this.campus = 'campus';
    this.major = 'major';
    this.groupTypeId = 'group_type_id';
    this.classTypeId = 'class_type_id';
    this.photoProfile = 'photo_profile';
  }
}

module.exports = AdminModel;
