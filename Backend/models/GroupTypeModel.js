const { Model } = require('../core/Model');

class GroupTypeModel extends Model {
  constructor() {
    super('group_type');
    this.group_type_id = 'group_type_id';
    this.group_type_name = 'group_type_name';
  }

  async findGroupTypeById(groupTypeId) {
    const params = {
      [this.group_type_id]: groupTypeId
    };
    const groupTypeData = await this.findOne('where', params);
    return groupTypeData.group_type_name;
  }
}

module.exports = GroupTypeModel;
