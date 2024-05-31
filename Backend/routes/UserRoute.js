const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();

class UserRoute extends Route {
  initializeRoute() {

    // get data user by id
    this.router.get(
      '/users/id/:id',
      this.controller.getDataUserById.bind(this.controller)
    );

    //get data user by name
    this.router.get(
      '/users/name/:name',
      this.controller.getDataUserByName.bind(this.controller)
    );

    // update data user
    this.router.put(
      '/users/:id',
      upload.none(),
      this.controller.updateDataUser.bind(this.controller)
    );
  }
}

module.exports = { UserRoute };
