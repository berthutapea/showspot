const { Model } = require('../core/Model');

class MentorModel extends Model {
  constructor() {
    super('mentors');
    this.setup();
  }

  setup() {
    console.log('Hello dari MentorModel');
  }
}

module.exports = MentorModel ;
