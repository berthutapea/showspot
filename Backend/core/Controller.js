class Controller {
  constructor(model) {
    const ModelClass = require(`../models/${model}`);
    this.model = new ModelClass();
  }
}

module.exports = { Controller };
