class Controller {
  constructor(model) {
    this.BaseModel = model;
  }

  async loadModel(model) {
    try {
      const ModelClass = require(`../models/${model}.js`);
      const instanceModel = new ModelClass();
      return instanceModel;
    } catch (error) {
      console.error('Error loading model:', error);
      throw error;
    }
  }
}

module.exports = { Controller };
