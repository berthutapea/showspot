const config = require('../config/configuration');
module.exports = function(req, res, next) {
  if (req.rawHeaders[1] == config.api.key) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: You do not have access to this resource.' });
  }
};