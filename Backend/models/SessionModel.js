const { Model } = require('../core/Model');
const { HashingService } = require('../services/HashingService');

class SessionModel extends Model {
  constructor() {
    super('sessions');
    this.userId = 'user_id';
    this.sessionCode = 'session_code';
    this.accessCode = 'access_code';
    this.expiredAt = 'expired_at';
  }

  async createSession(datas) {
    const now = new Date();
    const expired_at = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const hashingService = new HashingService();
    const hashedSessionCode = await hashingService.generateHash(datas.user_id);
    const sessionData = {
      [this.userId]: datas.user_id,
      [this.sessionCode]: hashedSessionCode,
      [this.accessCode]: datas.access_code,
      [this.expiredAt]: expired_at
    };
    // param: ([data: column => value], [default: 0 or Empty] || [strict mode: 1])
    const result = await this.insertOne(sessionData, 1)
    return [result, sessionData];
  }

  async checkSession(token) {
    const date = new Date();
    const param = {
      [this.sessionCode]: token,
    };
    const sessionData = await this.findOne(param);
    const isExpired = sessionData.length == 0 ? false : sessionData[0].expired_at;
    if (isExpired < date) {
      await this.deleteSession(token)
    }
    return sessionData;
  }

  async deleteSession(token) {
    const param = {
      [this.sessionCode]: token,
    };
    await this.delete(param)
    return 1;
  }
}

module.exports = {SessionModel};
