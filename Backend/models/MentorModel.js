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
    return await this.insertOne(mentorData, 1);
  }

  async findByMentorId(id) {
    const mentorData = {
      [this.mentorId]: id
    };
    const mentor = await this.findOne('strict one', mentorData);
      let datas;
      if (mentor != undefined) {
        datas = {
            [this.mentorId]: mentor.mentor_id,
            [this.fullname]: mentor.fullname,
            [this.username]: mentor.username,
            [this.campus]: mentor.campus,
            [this.major]: mentor.major,
            [this.groupTypeId]: mentor.group_type_id,
            [this.classTypeId]: mentor.class_type_id,
            [this.photoProfile]: mentor.photo_profile,
        }
      } else {
        return datas = {};
      }
    return datas;
  }

    async findByMentorName(name) {
      const mentorData = {
        [this.fullname]: name
      };
      const mentor = await this.findOne('where', mentorData);
      let datas;
      if (mentor != undefined) {
        datas = {
            [this.mentorId]: mentor.mentor_id,
            [this.fullname]: mentor.fullname,
            [this.username]: mentor.username,
            [this.campus]: mentor.campus,
            [this.major]: mentor.major,
            [this.groupTypeId]: mentor.group_type_id,
            [this.classTypeId]: mentor.class_type_id,
            [this.photoProfile]: mentor.photo_profile,
        }
      } else {
        return datas = {};
      }
    return datas;
  }

  async updateData(id, datas, filename) {
    const param = {
      [this.mentorId]: id,
    };

    let result;
    if (filename === null || filename === 0 || filename === '' || filename === undefined) {
        const data = {
          [this.fullname] : datas.fullname,
          [this.username] : datas.username,
          [this.campus] : datas.campus,
          [this.major] : datas.major,
          [this.groupTypeId] : datas.group_type_id,
          [this.classTypeId] : datas.class_type_id,
        }
        result = await this.update(param, data);
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
        result = await this.update(param, data);
    }
    if (result > 0) {
      return await this.findByMentorId(id);
    }
    // return false;
  }

  async deleteData(id) {
    const param = {
      [this.mentorId]: id
    }
    return await this.delete(param);
  }

  async changePasswordMentor(id, datas) {
    console.log(id)
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
