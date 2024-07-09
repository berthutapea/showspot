const { Route } = require('../core/Route');

class GeneralRoute extends Route {
  initializeRoute(){
    this.router.get(
      '/home/showcaseprojects',
      this.controller.homePageGetShowCaseProjects.bind(this.controller)
    );
    this.router.get(
      '/home/showcaseprojects/:id',
      this.controller.homePageGetShowCaseProjectsByFilterProjectId.bind(this.controller)
    );
    this.router.get(
      '/home/showcaseprojects/:id/project',
      this.controller.homePageGetShowCaseProjectByProjectId.bind(this.controller)
    );
  }
}

module.exports = GeneralRoute;