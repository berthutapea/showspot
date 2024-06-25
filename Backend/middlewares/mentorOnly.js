const { SessionModel } = require('../models/SessionModel');

module.exports = async function(req, res, next) {
  const sessionToken  = req.rawHeaders[3];
  const instanceSessionModel = new SessionModel();
  const sessionData = await instanceSessionModel.checkSession(sessionToken);
  if (sessionData.length > 0) {
    if (sessionData[0].access_code == 2) {
      next();
    }
  } else {
    res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  }
};