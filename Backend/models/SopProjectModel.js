const { Model } = require('../core/Model');

class SopProjectModel extends Model {
  constructor() {
    super('sop_project');
    this.sopProjectId = 'sop_project_id';
    this.sopProjectContent = 'sop_project_content';
  }

   async updateData(id, datas) {
    const param = {
      [this.sopProjectId]: id,
    };
    if (datas.sop_project_content === null || datas.sop_project_content === 0 || datas.sop_project_content === '' || datas.sop_project_content === undefined) {
        return 0;
    } else {
      const data = {
        [this.sopProjectContent] : datas.sop_project_content,
      }
      return await this.update(param, data);
    }
    return false;
  }

  async deleteData(id, data) {
    const param = {
      [this.sopProjectId]: id,
    };
      const datas = {
        [this.sopProjectContent] : data,
      }
     await this.update(param, datas);
     return 1;
  }
}

module.exports = SopProjectModel;
