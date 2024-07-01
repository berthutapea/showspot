const multer = require('multer');
const upload = multer();

const { Route } = require('../core/Route');
const authMiddleware = require('../middlewares/authMiddleware');
const authUser = require('../middlewares/authUser');
const { FileUploadHandler } = require('../handler/FileUploadHandler');

class MentorRoute extends Route {
  initializeRoute(){
    this.fileUploadHandler = new FileUploadHandler();

    /* === Mentor Entity === */
    // Mentor Dashboard
    this.router.get(
      '/mentors/dashboard',
      // authMiddleware,
      // authUser,

      this.controller.dashboardMentor.bind(this.controller)
    );

    // get my profile
    this.router.get(
      '/mentors/profile/:id',
      // authMiddleware,
      // authUser,

      this.controller.getMyProfileMentor.bind(this.controller)
    );

    // update my profile
    this.router.put(
      '/mentors/profile/:id/update',
      this.fileUploadHandler.getMulterInstance().single('profile_image'),
      // authMiddleware,
      // authUser,
      this.controller.updateMyProfileMentor.bind(this.controller)
    );

    // change my password
    this.router.patch(
      '/mentors/password/:id/change',
      upload.none(),
      // authMiddleware,
      // authUser,
      this.controller.changePasswordMentor.bind(this.controller)
    );

    /* === Project Entity === */
    // get data projects by mentor
    this.router.get(
      '/mentors/projects/sop-project',
      // authMiddleware,
      // authUser,
      this.controller.getSopProject.bind(this.controller)
    );

    // get data projects by project_id by mentor
    this.router.get(
      '/mentors/projects/showcase-projects/id/:id/detail',
      // authMiddleware,
      // authUser,
      this.controller.findShowProjectById.bind(this.controller)
    );

    // get data projects by project_id by mentor
    this.router.get(
      '/mentors/projects/showcase-projects/:statusproject/:page',
      // authMiddleware,
      // authUser,
      this.controller.getShowProjects.bind(this.controller)
    );

    //get data projects by Group Name by mentor
    this.router.get(
      '/mentors/projects/showcase-projects/:groupname',
      // authMiddleware,
      // authUser,
      this.controller.findShowProjectByGroupName.bind(this.controller)
    );

    // valuation project by mentor
    this.router.put(
      '/mentors/projects/showcase-projects/:id/valuation',
      upload.none(),
      // authMiddleware,
      // authUser,
      this.controller.valuationProject.bind(this.controller)
    );

    // update valuation project by mentor
    // this.router.put(
    //   '/mentors/projects/:id/update/valuation',
    //   this.fileUploadHandler.getMulterInstance().single('profile_image'),
    //   authMiddleware,
    //   authUser,
    //   this.controller.updateValuationProject.bind(this.controller)
    // );
  }
}

module.exports = MentorRoute;
