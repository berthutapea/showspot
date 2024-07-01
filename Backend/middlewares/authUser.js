const { SessionModel } = require('../models/SessionModel');



module.exports = async function(req, res, next) {
  // Production config
  const sessionToken  = req.rawHeaders[19];
  // Development config
  // const sessionToken  = req.rawHeaders[3];
  const instanceSessionModel = new SessionModel();
  const result = await instanceSessionModel.checkSession(sessionToken);
  if (result) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  }
};