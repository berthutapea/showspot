const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

const { UserController } = require('./controllers/UserController');
const { UserRoute } = require('./routes/UserRoute');

const userController = new UserController();
new UserRoute(router, userController);

app.use('/api', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
