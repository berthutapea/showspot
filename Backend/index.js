const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { AdminController } = require('./controllers/AdminController');
const { AdminRoute } = require('./routes/AdminRoute');
const adminController = new AdminController();
new AdminRoute(router, adminController);

const { UserController } = require('./controllers/UserController');
const { UserRoute } = require('./routes/UserRoute');
const userController = new UserController();
new UserRoute(router, userController);

app.use('/api', router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
