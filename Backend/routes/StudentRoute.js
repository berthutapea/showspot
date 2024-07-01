const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();
const { FileUploadHandler } = require('../handler/FileUploadHandler');

class StudentRoute extends Route {
  initializeRoute() {
    this.fileUploadHandler = new FileUploadHandler();

    /* === Student Entity === */
    // Dashboard Admin
    this.router.get(
      '/students/dashboard',
      // authMiddleware,
      // authUser,
      this.controller.dashboardStudent.bind(this.controller)
    );

    // get my profile student
    this.router.get(
      '/students/profile/:id',
      // authMiddleware,
      // authUser,
      this.controller.getMyProfileStudent.bind(this.controller)
    );

    // update my profile
    this.router.put(
      '/students/profile/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      // authMiddleware,
      // authUser,
      this.controller.updateMyProfileStudent.bind(this.controller)
    );

    // change my password
    this.router.patch(
      '/students/password/:id/change',
      upload.none(),
      // authMiddleware,
      // authUser,
      this.controller.changePasswordStudent.bind(this.controller)
    );

    // get data student by id
    this.router.get(
      '/students/id/:id',
      this.controller.getDataStudentById.bind(this.controller)
    );

    /* === Project Entity === */
    this.router.post(
      '/students/projects/add',
      this.fileUploadHandler.getMulterInstance().single('application_image'),
      this.controller.addProjectStudent.bind(this.controller)
    );

    this.router.get(
      '/students/projects/sop-project',
      // authMiddleware,
      // authUser,
      this.controller.getSopProject.bind(this.controller)
    );
  }
}

module.exports = StudentRoute;
