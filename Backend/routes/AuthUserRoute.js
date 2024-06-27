const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();

class AuthUserRoute extends Route {
  initializeRoute() {
    /* === Auth User Entity === */
    // login user
    this.router.post(
      '/login',
      upload.none(),
      this.controller.loginUser.bind(this.controller)
    );

    // logout user
    this.router.delete(
      '/logout',
      this.controller.logoutUser.bind(this.controller)
    );
  }
}

module.exports = AuthUserRoute;
