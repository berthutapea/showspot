const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');
const config = require('../config/configuration');

class StudentModel extends Model {
  constructor() {
    super('students');
    this.studentId = 'student_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
    this.campus = 'campus';
    this.major = 'major';
    this.groupTypeId = 'group_type_id';
    this.classTypeId = 'class_type_id';
    this.photoProfile = 'photo_profile';
  }

async getAllStudentsData() {
  const datas = await this.findAll('all');
  const students = await datas.map((data) => {
    return {
      [this.studentId]: data.student_id,
      [this.fullname]: data.fullname,
      [this.campus]: data.campus,
      [this.major]: data.major,
      [this.groupTypeId]: data.group_type_id,
      [this.classTypeId]: data.class_type_id,
      [this.photoProfile]: data.photo_profile,
    };
  });
  return students;
}

  async insertDataStudent(datas, filename) {
    const filePath = `${config.api.base_url}api/images/${filename}`;
    const hashingService = new HashingService();
    const patternId = String('student' + Math.floor(Math.random() * 10000) + 1);
    const studentId = patternId;
    const hashedPassword = await hashingService.generateHash(datas.password);
    const studentData = {
      [this.studentId]: studentId,
      [this.fullname]: datas.fullname,
      [this.username]: datas.username,
      [this.password]: hashedPassword,
      [this.campus]: datas.campus,
      [this.major]: datas.major,
      [this.groupTypeId]: datas.group_type_id,
      [this.classTypeId]: datas.class_type_id,
      [this.photoProfile]: filePath
    };

    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.insertOne(studentData, 1);
  }

  async findById(id) {
    const studentData = {
      [this.studentId]: id,
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.findOne(studentData, 0, 0, 0, 'fullname');
  }

  async findByName(name) {
    const studentData = {
      [this.fullname]: name,
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.findOne(studentData, 0, 0, 0, this.fullname);
  }

  async updateData(id, datas, filename) {
    const param = {
      [this.studentId]: id,
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

  async deleteData(id) {
    const param = {
      [this.studentId]: id,
    };
    return await this.delete(param);
  }

  async changePasswordStudent(id, datas) {
    const hashingService = new HashingService();
    const param = {
      [this.studentId]: id,
    };
    const hashedPassword = await hashingService.generateHash(datas.password);
    const newData = {
      [this.password]: hashedPassword,
    };
    return await this.update(param, newData);
  }
}

module.exports = StudentModel;
