const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');
const config = require('../config/configuration');

class MentorModel extends Model {
  constructor() {
    super('mentors');
    this.mentorId = 'mentor_id';
    this.fullname = 'fullname';
    this.username = 'username';
    this.password = 'password';
    this.campus = 'campus';
    this.major = 'major';
    this.groupTypeId = 'group_type_id';
    this.classTypeId = 'class_type_id';
    this.photoProfile = 'photo_profile';
  }

  async insertDataMentor(datas, filename) {
    const filePath = `${config.api.base_url}api/images/${filename}`;
    const hashingService = new HashingService();
    const patternId = String('mentor' + Math.floor(Math.random() * 10000) + 1);
    const mentorId = patternId;
    const hashedPassword = await hashingService.generateHash(datas.password);
    const mentorData = {
      [this.mentorId] : mentorId,
      [this.fullname] : datas.fullname,
      [this.username] : datas.username,
      [this.password] : hashedPassword,
      [this.campus] : datas.campus,
      [this.major] : datas.major,
      [this.groupTypeId] : datas.group_type_id,
      [this.classTypeId] : datas.class_type_id,
      [this.photoProfile] : filePath,
    };
    return await this.insertOne(mentorData);
  }

  async findByMentorId(id) {
    const mentorData = {
      [this.mentorId]: id
    };
    const mentor = await this.findOne(mentorData);
      const data = await mentor.map((data) => {
        return {
          [this.mentorId]: data.mentor_id,
          [this.fullname]: data.fullname,
          [this.campus]: data.campus,
          [this.major]: data.major,
          [this.groupTypeId]: data.group_type_id,
          [this.classTypeId]: data.class_type_id,
          [this.photoProfile]: data.photo_profile,
        };
    });
    return data;
  }

    async findByMentorName(name) {
      const mentorData = {
        [this.fullname]: name
      };
      const mentor = await this.findOne(mentorData);
      const data = await mentor.map((data) => {
        return {
          [this.mentorId]: data.mentor_id,
          [this.fullname]: data.fullname,
          [this.campus]: data.campus,
          [this.major]: data.major,
          [this.groupTypeId]: data.group_type_id,
          [this.classTypeId]: data.class_type_id,
          [this.photoProfile]: data.photo_profile,
        };
    });
    return data;
  }

  async updateData(id, datas, filename) {
    const param = {
      [this.mentorId]: id,
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
      [this.mentorId]: id
    }
    return await this.delete(param);
  }

  async changePasswordMentor(id, datas) {
    const hashingService = new HashingService();
    const param = {
      [this.mentorId]: id
    }
    const hashedPassword = await hashingService.generateHash(datas.password);
    const newData = {
      [this.password]: hashedPassword
    }
    return this.update(param, newData);
  }
}

module.exports = MentorModel;
