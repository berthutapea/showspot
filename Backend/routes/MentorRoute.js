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
      '/mentors/profile/:id',
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.getMyProfileMentor.bind(this.controller)
    );

    // update my profile
    this.router.put(
      '/mentors/profile/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.updateMyProfilementor.bind(this.controller)
    );

    // change my password
    this.router.patch(
      '/mentors/password/:id/change',
      upload.none(),
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.changePasswordMentor.bind(this.controller)
    );

    /* === Project Entity === */
    // get data projects by mentor
    this.router.get(
      '/mentors/projects',
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.getDataStudents.bind(this.controller)
    );

    // get data projects by project_id by mentor
    this.router.get(
      '/mentors/projects/id/:id',
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.getDataProjectsById.bind(this.controller)
    );

    //get data projects by name by mentor
    this.router.get(
      '/mentors/projects/name/:name',
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.getDataStudentByName.bind(this.controller)
    );

    // valuation project by mentor
    this.router.put(
      '/mentors/projects/:id/valuation',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.valuationProject.bind(this.controller)
    );

    // update valuation project by mentor
    this.router.put(
      '/mentors/projects/:id/update/valuation',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      authMiddleware,
      authUser,
      mentorOnly,
      this.controller.updateValuationProject.bind(this.controller)
    );
  }
}

module.exports = MentorRoute;
