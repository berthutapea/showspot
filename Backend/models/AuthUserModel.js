const { Model } = require('../core/Model');
const { SessionModel } = require('../models/SessionModel');
const { HashingService } = require('../services/HashingService');

class AuthUserModel {
  constructor() {
    this.usernameField = 'username';
    this.passwordField = 'password';
    this.admin = new Model('admins');
    this.mentor = new Model('mentors');
    this.student = new Model('students');
    this.sessionModel = new SessionModel();
    this.hashingService = new HashingService();
  }

  async checkIsUser(datas) {
    if (!datas) {
      return false;
    }

    const { username, password } = datas;
    let userData;
    let role;

    const admin = await this.admin.findOne('strict one', { [this.usernameField]: username });
    const mentor = await this.mentor.findOne('strict one', { [this.usernameField]: username });
    const student = await this.student.findOne('strict one', { [this.usernameField]: username });

    if (admin) {
      userData = admin;
      role = 'admin';
    } else if (mentor) {
      userData = mentor;
      role = 'mentor';
    } else if (student) {
      userData = student;
      role = 'student';
    } else {
      return false;
    }

    if (Object.keys(userData).length > 0) {
      const user = userData;
      const passwordMatch = await this.hashingService.compareHash(password, user.password);
      if (passwordMatch) {
        const sessionData = {
          user_id: user[`${role}_id`],
          access_code: this.getAccessCode(role),
        };
        const sessionResult = await this.sessionModel.createSession(sessionData);
        if (Object.keys(sessionResult).length > 0) {
          return {
            user_id: sessionResult.user_id,
            session_token: sessionResult.session_code,
            access: sessionResult.access_code
          };
        }
      }
    }
    return false;
  }

  getAccessCode(role) {
    switch (role) {
      case 'admin': return 1;
      case 'mentor': return 2;
      case 'student': return 3;
      default: return 0;
    }
  }
}

module.exports = { AuthUserModel };
