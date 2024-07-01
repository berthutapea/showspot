const config = require('../config/configuration');
module.exports = function(req, res, next) {
  // Production Config
  if (req.rawHeaders[15] == config.api.key) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  }

  // Development Config
  // if (req.rawHeaders[1] == config.api.key) {
  //   next();
  // } else {
  //   res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  // }
};