const { SessionModel } = require('../models/SessionModel');

module.exports = async function getUser (req, res, next) {
  const sessionToken  = req.rawHeaders[3];
  const instanceSessionModel = new SessionModel();
  const sessionData = await instanceSessionModel.checkSession(sessionToken);
  let accessCode;
  if (Object.keys(sessionData).length > 0) {
    if (sessionData.access_code == 1) {
      accessCode = 1;
      next();
    } else if (sessionData.access_code == 2) {
      accessCode = 2;
      next();
    } else if (sessionData.access_code == 3) {
      accessCode = 3;
      next();
    }
    return accessCode;
  } else {
    res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  }
};