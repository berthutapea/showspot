const { Route } = require('../core/Route');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require('multer');
const upload = multer();

class AdminRoute extends Route {
  initializeRoute(){
    /* === Mentor Entity === */
    // get data mentors by admin
    this.router.get(
      '/admin/mentors',
      authMiddleware,
      this.controller.getDataMentors.bind(this.controller)
    );

    // // get data mentor by id by admin
    this.router.get(
      '/admin/mentors/id/:id',
      this.controller.getDataMentorById.bind(this.controller)
    );

    // // get data mentor by name by admin
    // this.router.get(
    //   '/admin/mentors/name/:id',
    //   this.controller.getDataMentorByName.bind(this.controller)
    // );

    // create data mentor by admin
    this.router.post(
      '/admin/mentors/create',
      upload.none(),
      authMiddleware,
      this.controller.createDataMentor.bind(this.controller)
    );

    // update data mentor by admin
    this.router.put(
      '/admin/mentors/:id/update',
      upload.none(),
      authMiddleware,
      this.controller.updateDataMentor.bind(this.controller)
    );

    // change password mentor by admin
    this.router.patch(
      '/admin/mentors/:id/password',
      upload.none(),
      this.controller.changePasswordMentor.bind(this.controller)
    );

    // delete data mentor by admin
    this.router.delete(
      '/admin/mentors/:id/delete',
      this.controller.deleteDataMentor.bind(this.controller)
    );

    /* === Student Entity === */
    // get data students by admin
    this.router.get(
      '/admin/students',
      authMiddleware,
      this.controller.getDataStudents.bind(this.controller)
    );

    // get data student by id by admin
    this.router.get(
      '/admin/students/id/:id',
      authMiddleware,
      this.controller.getDataStudentById.bind(this.controller)
    );

    //get data student by name by admin
    this.router.get(
      '/admin/students/name/:name',
      authMiddleware,
      this.controller.getDataStudentByName.bind(this.controller)
    );

    // create student by admin
    this.router.post(
      '/admin/students/create',
      upload.none(),
      authMiddleware,
      this.controller.createDataStudent.bind(this.controller)
    );

    // update data student by admin
    this.router.put(
      '/admin/students/:id/update',
      upload.none(),
      authMiddleware,
      this.controller.updateDataStudent.bind(this.controller)
    );

    // update password student by admin
    this.router.patch(
      '/admin/students/:id/password',
      upload.none(),
      authMiddleware,
      this.controller.changePasswordStudent.bind(this.controller)
    );

    // delete data student by admin
    this.router.delete(
      '/admin/students/:id/delete',
      this.controller.deleteDataStudent.bind(this.controller)
    );
  }
}

module.exports = AdminRoute;
