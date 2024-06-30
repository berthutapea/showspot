const ResponseHandler = require('../handler/ResponseHandler');
const { SessionModel } = require('../models/SessionModel');
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

      let getSessionUser = await new AuthUserModel().checkIsUser(userData);

      const sessionToken  = getSessionUser.session_token;

      const instanceSessionModel = new SessionModel();
      const sessionData = await instanceSessionModel.checkSession(sessionToken);

      if (Object.keys(getSessionUser).length > 0) {
        this.responseHandler.success(res, 'Login Success', sessionData.access_code, {
          user_id: sessionData.user_id,
          session_code: sessionData.session_code,
        });
      } else {
        this.responseHandler.badRequest(res, 'Invalid Username & Password');
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
        if (Object.keys(result).length > 0) {
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
