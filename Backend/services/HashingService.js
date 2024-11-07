const argon2 = require('argon2');

class HashingService {
  async generateHash(data) {
    try {
        const hash = await argon2.hash(data, {
          type: argon2.argon2id,
          memoryCost: 2 ** 16,
          timeCost: 3,
          parallelism: 1
      });
      return hash;
    } catch (error) {
      console.error('Error generating hash:', error);
      throw error;
    }
  }

  async compareHash(data, hash) {
    try {
      console.log(await argon2.verify(hash, data));
      const result = await argon2.verify(hash, data);
      return result;
    } catch (error) {
      console.error('Error comparing hash:', error);
      throw error;
    }
  }
}

const instance = new HashingService();
// instance.generateHash('rineke');
// instance.compareHash('admin', '$argon2id$v=19$m=65536,t=3,p=4$w3gJEmQxpalgsCRebRW4QA$argon2id$v=19$m=65536,t=3,p=4$1ryi2ny+Ss7nL7c9eLLuuw$YPr74kGg/a8c0PDMp2LfaYCg1ySGlEpvZPqkqYxSvDE');
module.exports = { HashingService };
