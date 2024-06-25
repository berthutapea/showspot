const express = require('express');
const path = require('path');

class LoadImageHandler {
  constructor(app) {
    this.app = app;
    this.initializeRoutes();
  }

  initializeRoutes() {
    const imagesPath = path.resolve(__dirname, '../assets/images');
    this.app.use('/api/images', express.static(imagesPath));
  }
}

module.exports = { LoadImageHandler };
