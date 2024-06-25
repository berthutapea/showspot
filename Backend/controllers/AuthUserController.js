const ResponseHandler = require('../handler/ResponseHandler');
const { SessionModel } = require('../models/SessionModel');
const {AuthUserModel} = require('../models/AuthUserModel');
const authUser = require('../middlewares/authUser');

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
        this.responseHandler.badRequest(res, 'Invalid Username &');
      } else {
        this.responseHandler.success(res, 'Login Success', getSessionUser);
      }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }

   async logoutUser(req, res) {
    try {
        const sessionToken  = req.rawHeaders[3];
        const instanceSessionModel = new SessionModel();
        const result = await instanceSessionModel.checkSession(sessionToken);
        if (result.length > 0) {
          if(await instanceSessionModel.deleteSession(sessionToken)) {
            this.responseHandler.success(res, 'Logout Success');
          }
        } else {
          this.responseHandler.badRequest(res, 'Failure');
        }
    } catch (error) {
      this.responseHandler.serverError(res, error);
    }
  }
}

module.exports = AuthUserController;
