const { Model } = require('../core/Model');
const { SessionModel } = require('../models/SessionModel');
const { HashingService } = require('../services/HashingService');

class AuthUserModel {
  constructor(models) {
    this.usernameField = 'username';
    this.passwordField = 'password';
    this.models = {
      admin: new Model('admins'),
      mentor: new Model('mentors'),
      student: new Model('students'),
    };
    this.sessionModel = new SessionModel();
    this.hashingService = new HashingService();
  }

  async checkIsUser(datas) {
    if (!datas) {
      return false;
    }

    const { username, password } = datas;

    for (const [role, model] of Object.entries(this.models)) {
      const userData = await model.findOne({ [this.usernameField]: username }, 1);

      if (userData && userData.length > 0) {
        const user = userData[0];
        const passwordMatch = await this.hashingService.compareHash(password, user.password);

        if (passwordMatch) {
          const sessionData = {
            user_id: user[`${role}_id`],
            access_code: this.getAccessCode(role),
          };
          const sessionResult = await this.sessionModel.createSession(sessionData);
          return {
            user_id: user[`${role}_id`],
            token: sessionResult[1].session_code,
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
