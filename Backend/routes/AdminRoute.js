const multer = require('multer');
const upload = multer();

const { Route } = require('../core/Route');
const authMiddleware = require('../middlewares/authMiddleware');
const authUser = require('../middlewares/authUser');
const { FileUploadHandler } = require('../handler/FileUploadHandler');

class AdminRoute extends Route {
  initializeRoute(){
    this.fileUploadHandler = new FileUploadHandler();

    /* === Admin Entity === */

    // Dashboard Admin (Disable Auth)
    this.router.get(
      '/admin/dashboard',
      authMiddleware,
      authUser,
      this.controller.dashboardAdmin.bind(this.controller)
    );

    // get my profile admin
    this.router.get(
      '/admin/profile/:id',
      authMiddleware,
      authUser,
      this.controller.getMyProfileAdmin.bind(this.controller)
    );

    // update my profile
    this.router.put(
      '/admin/profile/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      this.controller.updateMyProfileAdmin.bind(this.controller)
    );

    // change my password
    this.router.patch(
      '/admin/password/:id/change',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.changePasswordAdmin.bind(this.controller)
    );

    /* === Mentor Entity === */
    // get data mentors by admin
    this.router.get(
      '/admin/mentors',
      authMiddleware,
      authUser,
      this.controller.getDataMentors.bind(this.controller)
    );

    // // get data mentor by id by admin
    this.router.get(
      '/admin/mentors/id/:id',
      authMiddleware,
      authUser,
      this.controller.getDataMentorById.bind(this.controller)
    );

    // // get data mentor by name by admin
    this.router.get(
      '/admin/mentors/name/:name',
      authMiddleware,
      authUser,
      this.controller.getDataMentorByName.bind(this.controller)
    );

    // create data mentor by admin
    this.router.post(
      '/admin/mentors/create',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      this.controller.createDataMentor.bind(this.controller)
    );

    // update data mentor by admin
    this.router.put(
      '/admin/mentors/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      this.controller.updateDataMentor.bind(this.controller)
    );

    // change password mentor by admin
    this.router.patch(
      '/admin/mentors/:id/password',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.changePasswordMentor.bind(this.controller)
    );

    // delete data mentor by admin
    this.router.delete(
      '/admin/mentors/:id/delete',
      authMiddleware,
      authUser,
      this.controller.deleteDataMentor.bind(this.controller)
    );

    /* === Student Entity === */
    // get data students by admin
    this.router.get(
      '/admin/students',
      authMiddleware,
      authUser,
      this.controller.getDataStudents.bind(this.controller)
    );

    // get data student by id by admin
    this.router.get(
      '/admin/students/id/:id',
      authMiddleware,
      authUser,
      this.controller.getDataStudentById.bind(this.controller)
    );

    // get data student by name by admin
    this.router.get(
      '/admin/students/name/:name',
      authMiddleware,
      authUser,
      this.controller.getDataStudentByName.bind(this.controller)
    );

    // create student by admin
    this.router.post(
      '/admin/students/create',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      this.controller.createDataStudent.bind(this.controller)
    );

    // update data student by admin
    this.router.put(
      '/admin/students/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      this.controller.updateDataStudent.bind(this.controller)
    );

    // update password student by admin
    this.router.patch(
      '/admin/students/:id/password',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.changePasswordStudent.bind(this.controller)
    );

    // delete data student by admin
    this.router.delete(
      '/admin/students/:id/delete',
      authMiddleware,
      authUser,
      this.controller.deleteDataStudent.bind(this.controller)
    );

    /* === Project Entity === */
    // Add SOP Project
    this.router.put(
      '/admin/projects/sop-project/add',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.addSopProject.bind(this.controller)
    );

    // Get SOP Project
    this.router.get(
      '/admin/projects/sop-project',
      authMiddleware,
      authUser,
      this.controller.getSopProject.bind(this.controller)
    );

    // Update SOP Project
    this.router.put(
      '/admin/projects/sop-project/update',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.updateSopProject.bind(this.controller)
    );

    // Delete SOP Project
    this.router.delete(
      '/admin/projects/sop-project/delete',
      authMiddleware,
      authUser,
      this.controller.deleteSopProject.bind(this.controller)
    );

    // ShowCase Project List
    this.router.get(
      '/admin/projects/showcase-projects/:statusproject/:page',
      authMiddleware,
      authUser,
      this.controller.getShowProjects.bind(this.controller)
    );

    // Get Project By ID
    this.router.get(
      '/admin/projects/showcase-projects/id/:id/detail',
      authMiddleware,
      authUser,
      this.controller.findShowProjectById.bind(this.controller)
    );

    // Get Project By Name
    this.router.get(
      '/admin/projects/showcase-projects/:name',
      authMiddleware,
      authUser,
      this.controller.findShowProjectByGroupName.bind(this.controller)
    );

    // Delete Project By Admin
    this.router.delete(
      '/admin/projects/showcase-projects/:id/delete',
      authMiddleware,
      authUser,
      this.controller.deleteProjectByAdmin.bind(this.controller)
    );

    // valuation project by mentor
    this.router.put(
      '/admin/projects/showcase-projects/:id/valuation',
      upload.none(),
      authMiddleware,
      authUser,
      this.controller.valuationProjectByAdmin.bind(this.controller)
    );
  }
}

module.exports = AdminRoute;
