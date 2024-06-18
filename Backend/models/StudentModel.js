const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');

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
  }

  async insertDataStudent(datas) {
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
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.insertOne(studentData, 1);
  }

  async findById(id) {
    const studentData = {
      [this.studentId]: id,
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.findOne(studentData, 1);
  }

  async findByName(name) {
    const studentData = {
      [this.fullname]: name,
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    return await this.findOne(studentData, 1);
  }

  async updateData(id, datas) {
    const param = {
      [this.studentId]: id,
    };
    return await this.update(param, datas);
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
