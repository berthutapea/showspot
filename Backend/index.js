const express = require('express');
const cors = require('cors');
require('dotenv').config();
const config = require('./config/configuration');
const session = require('express-session');
const bodyParser = require('body-parser');
const { LoadImageHandler } = require('./handler/LoadImageHandler');

const app = express();
const router = express.Router();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: config.api.key,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use('/api', router);

const AuthUserController = require('./controllers/AuthUserController');
const AuthUserRoute = require('./routes/AuthUserRoute');
const authUserController = new AuthUserController();
new AuthUserRoute(router, authUserController);

const AdminController = require('./controllers/AdminController');
const AdminRoute = require('./routes/AdminRoute');
const adminController = new AdminController();
new AdminRoute(router, adminController);

const MentorController = require('./controllers/MentorController');
const MentorRoute = require('./routes/MentorRoute');
const mentorController = new MentorController();
new MentorRoute(router, mentorController);

const StudentController = require('./controllers/StudentController');
const UserRoute = require('./routes/StudentRoute');
const studentController = new StudentController();
new UserRoute(router, studentController);

const GeneralController = require('./controllers/GeneralController');
const GeneralRoute = require('./routes/GeneralRoute');
const generalController = new GeneralController();
new GeneralRoute(router, generalController);

new LoadImageHandler(app);

app.listen(config.server.PORT, () => {
  console.log(`Server is running on port : ${process.env.BASE_URL}`);
});
