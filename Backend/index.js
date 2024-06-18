const express = require('express');
require('dotenv').config();
const configServer = require('./config/configuration');
const configAPI = require('./config/configuration');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: configAPI.api.key,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const AdminController = require('./controllers/AdminController');
const AdminRoute = require('./routes/AdminRoute');
const adminController = new AdminController();
new AdminRoute(router, adminController);

const StudentController = require('./controllers/StudentController');
const UserRoute = require('./routes/StudentRoute');
const studentController = new StudentController();
new UserRoute(router, studentController);

app.use('/api', router);

app.listen(configServer.server.PORT, () => {
  console.log(`Server is running on port : ${configServer.server.PORT}`);
});
