const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');

class MentorModel extends Model {
  constructor() {
    super('mentors');
    this.mentorId = 'mentor_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
    this.campus = 'campus';
    this.major = 'major';
    this.email = 'email';
  }

  async insertDataMentor(datas) {
    const hashingService = new HashingService();
    const patternId = String('mentor' + Math.floor(Math.random() * 10000) + 1);
    const mentorId = patternId;
    const hashedPassword = await hashingService.generateHash(datas.password);
    const mentorData = {
      [this.mentorId]: mentorId,
      [this.fullname]: datas.fullname,
      [this.username]: datas.username,
      [this.password]: hashedPassword,
      [this.campus]: datas.campus,
      [this.major]: datas.major,
      [this.email]: datas.email,
    };

    return await this.insertOne(mentorData);
  }

  async findByMentorId(id) {
    const mentorData = {
      [this.mentorId]: id
    };

    return await this.findOne(mentorData);
  }

  async updateData(id, mentorData) {
    const param = {
      [this.mentorId]: id
    };

    return await this.update(param, mentorData);
  }

  async deleteData(id) {
    const param = {
      [this.mentorId]: id
    }
    return await this.delete(param);
  }

  async changePasswordMentor(id, datas) {
    console.log(datas);
    const hashingService = new HashingService();
    const param = {
      [this.mentorId]: id
    }
    const hashedPassword = await hashingService.generateHash(datas.password);
    const newData = {
      [this.mentorId]: hashedPassword
    }
    return this.update(param, newData);
  }
}

module.exports = MentorModel;
