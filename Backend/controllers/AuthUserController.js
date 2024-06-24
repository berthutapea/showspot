const ResponseHandler = require('../handler/ResponseHandler');
const {AuthUserModel} = require('../models/AuthUserModel');

class AuthUserController {
  constructor() {
    this.authUserModel = 'AuthUserModel';
    this.models = ['AdminModel', 'MentorModel', 'StudentModel'];
    this.responseHandler = new ResponseHandler();
  }

  /*=== Session Entity ===*/
  async loginUser(req, res) {
    try {
      const userData = {
        username : req.body.username,
        password : req.body.password
      }

      let getSessionUser = await new AuthUserModel(this.models).checkIsUser(userData);

      if (!getSessionUser.token) {
        this.responseHandler.badRequest(res);
      } else {
        this.responseHandler.success(res, 'Login Success', getSessionUser);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }
}

module.exports = AuthUserController;
