const { Model } = require('../core/Model');

class ClassTypeModel extends Model {
  constructor() {
    super('class_type');
    this.class_type_id = 'class_type_id';
    this.class_type_name = 'class_type_name';
  }

  async findClassTypeById(classTypeId) {
    const params = {
      [this.class_type_id]: classTypeId
    };
    const classTypeData = await this.findOne('where', params);
    return classTypeData.class_type_name;
  }
}

module.exports = ClassTypeModel;
