const express = require('express');
require('dotenv').config();
const config = require('./config/configuration');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.api.key,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/api', router);
// app.use(require('./middlewares/authUser'));

const AuthUserController = require('./controllers/AuthUserController');
const AuthUserRoute = require('./routes/AuthUserRoute');
const authUserController = new AuthUserController();
new AuthUserRoute(router, authUserController);

const AdminController = require('./controllers/AdminController');
const AdminRoute = require('./routes/AdminRoute');
const adminController = new AdminController();
new AdminRoute(router, adminController);

const StudentController = require('./controllers/StudentController');
const UserRoute = require('./routes/StudentRoute');
const studentController = new StudentController();
new UserRoute(router, studentController);

app.listen(config.server.PORT, () => {
  console.log(`Server is running on port : ${config.server.PORT}`);
});
