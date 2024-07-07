const { Model } = require('../core/Model');
const config = require('../config/configuration')
const { HashingService } = require('../services/HashingService');

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

   async findById(id) {
    const myData = {
      [this.adminId]: id
    };
    const admin = await this.findOne('strict one', myData);
      const datas = {
          [this.adminId]: admin.admin_id,
          [this.fullname]: admin.fullname,
          [this.username]: admin.username,
          [this.campus]: admin.campus,
          [this.major]: admin.major,
          [this.groupTypeId]: admin.group_type_id,
          [this.classTypeId]: admin.class_type_id,
          [this.photoProfile]: admin.photo_profile,
      };
    return datas;
  }

  async updateData(id, datas, filename) {
    const param = {
      [this.adminId]: id,
    };
    if (filename === null || filename === 0 || filename === '' || filename === undefined) {
        const data = {
          [this.fullname] : datas.fullname,
          [this.username] : datas.username,
          [this.campus] : datas.campus,
          [this.major] : datas.major,
          [this.groupTypeId] : datas.group_type_id,
          [this.classTypeId] : datas.class_type_id,
        }
        return await this.update(param, data);
    } else {
        const filePath = `${config.api.base_url}api/images/${filename}`;
        const data = {
          [this.fullname] : datas.fullname,
          [this.username] : datas.username,
          [this.campus] : datas.campus,
          [this.major] : datas.major,
          [this.groupTypeId] : datas.group_type_id,
          [this.classTypeId] : datas.class_type_id,
          [this.photoProfile] : filePath,
        }
        return await this.update(param, data);
    }
    return false;
  }

  async changePassword(id, datas) {
    const hashingService = new HashingService();
    const param = {
      [this.adminId]: id
    }
    const hashedPassword = await hashingService.generateHash(datas.password);
    const newData = {
      [this.password]: hashedPassword
    }
    return this.update(param, newData);
  }
}

module.exports = AdminModel;
