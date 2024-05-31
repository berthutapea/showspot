const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();

class UserRoute extends Route {
  initializeRoute() {
    // get data users
    this.router.get(
      '/users',
      this.controller.getDataUsers.bind(this.controller)
    );

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

    // create user
    this.router.post(
      '/users/create',
      upload.none(),
      this.controller.createDataUser.bind(this.controller)
    );

    // update data user
    this.router.put(
      '/users/:id',
      upload.none(),
      this.controller.updateDataUser.bind(this.controller)
    );

    // delete data user
    this.router.delete(
      '/users/:id',
      this.controller.deleteDataUser.bind(this.controller)
    );
  }
}

module.exports = { UserRoute };
