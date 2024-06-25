const multer = require('multer');

class FileUploadHandler {
  constructor() {
    this.storage = multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, './assets/images')
      },
      filename: function (req, file, callback) {
        callback(null, file.originalname)
      }
    });

    this.upload = multer({ storage: this.storage });
  }

  getMulterInstance() {
    return this.upload;
  }
}

module.exports = { FileUploadHandler };