const { Route } = require("../core/Route");
const multer = require('multer');
const upload = multer();

class UserRoute extends Route {
  initializeRoute() {
    this.router.get('/users', this.controller.getDataUsers.bind(this.controller));
    this.router.post('/users/create', upload.none(), this.controller.createDataUser.bind(this.controller));
  }
}

module.exports = { UserRoute }