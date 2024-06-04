const argon2 = require('argon2');

class HashingService {
  async generateHash(data) {
    try {
      const hash = await argon2.hash(data);
      return hash;
    } catch (error) {
      console.error('Error generating hash:', error);
      throw error;
    }
  }

  async compareHash(data, hash) {
    try {
      const result = await argon2.verify(hash, data);
      return result;
    } catch (error) {
      console.error('Error comparing hash:', error);
      throw error;
    }
  }
}

module.exports = { HashingService };
