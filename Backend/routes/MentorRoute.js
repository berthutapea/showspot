const multer = require('multer');
const upload = multer();

const { Route } = require('../core/Route');
const authMiddleware = require('../middlewares/authMiddleware');
const authUser = require('../middlewares/authUser');
const mentorOnly = require('../middlewares/mentorOnly');
const { FileUploadHandler } = require('../handler/FileUploadHandler');

class MentorRoute extends Route {
  initializeRoute(){
    this.fileUploadHandler = new FileUploadHandler();

    /* === Mentor Entity === */
    // get my profile mentor
    this.router.get(
      '/mentor/profile/:id',
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.getMyProfileAdmin.bind(this.controller)
    );

    // update my profile
    this.router.put(
      '/admin/profile/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.updateMyProfileAdmin.bind(this.controller)
    );

    // change my password
    this.router.patch(
      '/admin/password/:id/change',
      upload.none(),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.changePasswordMentor.bind(this.controller)
    );

    /* === Mentor Entity === */
    // get data mentors by admin
    this.router.get(
      '/admin/mentors',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataMentors.bind(this.controller)
    );

    // // get data mentor by id by admin
    this.router.get(
      '/admin/mentors/id/:id',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataMentorById.bind(this.controller)
    );

    // // get data mentor by name by admin
    this.router.get(
      '/admin/mentors/name/:name',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataMentorByName.bind(this.controller)
    );

    // create data mentor by admin
    this.router.post(
      '/admin/mentors/create',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.createDataMentor.bind(this.controller)
    );

    // update data mentor by admin
    this.router.put(
      '/admin/mentors/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.updateDataMentor.bind(this.controller)
    );

    // change password mentor by admin
    this.router.patch(
      '/admin/mentors/:id/password',
      upload.none(),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.changePasswordMentor.bind(this.controller)
    );

    // delete data mentor by admin
    this.router.delete(
      '/admin/mentors/:id/delete',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.deleteDataMentor.bind(this.controller)
    );

    /* === Student Entity === */
    // get data students by admin
    this.router.get(
      '/admin/students',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataStudents.bind(this.controller)
    );

    // get data student by id by admin
    this.router.get(
      '/admin/students/id/:id',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataStudentById.bind(this.controller)
    );

    //get data student by name by admin
    this.router.get(
      '/admin/students/name/:name',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.getDataStudentByName.bind(this.controller)
    );

    // create student by admin
    this.router.post(
      '/admin/students/create',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.createDataStudent.bind(this.controller)
    );

    // update data student by admin
    this.router.put(
      '/admin/students/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.updateDataStudent.bind(this.controller)
    );

    // update password student by admin
    this.router.patch(
      '/admin/students/:id/password',
      upload.none(),
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.changePasswordStudent.bind(this.controller)
    );

    // delete data student by admin
    this.router.delete(
      '/admin/students/:id/delete',
      authMiddleware,
      authUser,
      adminOnly,
      this.controller.deleteDataStudent.bind(this.controller)
    );
  }
}

module.exports = AdminRoute;
