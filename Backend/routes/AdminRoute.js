const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();

class AdminRoute extends Route {
  initializeRoute() {
    /* === Mentor Entity === */
    // get data mentors from admin
    this.router.get(
      '/admin/mentors',
      this.controller.getDataMentors.bind(this.controller)
    );

    // // get data mentor by id from admin
    // this.router.get(
    //   '/admin/mentors/id/:id',
    //   this.controller.getDataMentorById.bind(this.controller)
    // );

    // // get data mentor by name from admin
    // this.router.get(
    //   '/admin/mentors/name/:id',
    //   this.controller.getDataMentorByName.bind(this.controller)
    // );

    // // create data mentor from admin
    // this.router.post(
    //   '/admin/mentors/create',
    //   upload.none(),
    //   this.controller.createDataMentor.bind(this.controller)
    // );

    // // update data mentor from admin
    // this.router.put(
    //   '/admin/mentors/:id/update',
    //   upload.none(),
    //   this.controller.updateDataMentor.bind(this.controller)
    // );

    // // update password mentor from admin
    // this.router.patch(
    //   '/admin/mentors/:id/password',
    //   this.controller.changePasswordMentor.bind(this.controller)
    // );

    // // delete data mentro from admin
    // this.router.delete(
    //   '/admin/mentors/:id',
    //   this.controller.deleteDataMentor.bind(this.controller)
    // );

    /* === User Entity === */
    // get data users from admin
    this.router.get(
      '/admin/users',
      this.controller.getDataUsers.bind(this.controller)
    );

    // get data user by id from admin
    this.router.get(
      '/admin/users/id/:id',
      this.controller.getDataUserById.bind(this.controller)
    );

    //get data user by name from admin
    this.router.get(
      '/admin/users/name/:name',
      this.controller.getDataUserByName.bind(this.controller)
    );

    // create user from admin
    this.router.post(
      '/admin/users/create',
      upload.none(),
      this.controller.createDataUser.bind(this.controller)
    );

    // update data user from admin
    this.router.put(
      '/admin/users/:id/update',
      upload.none(),
      this.controller.updateDataUser.bind(this.controller)
    );

    // update password user from admin
    this.router.patch(
      '/admin/users/:id/password',
      upload.none(),
      this.controller.changePasswordUser.bind(this.controller)
    );

    // delete data user from admin
    this.router.delete(
      '/admin/users/:id/delete',
      this.controller.deleteDataUser.bind(this.controller)
    );
  }
}

module.exports = { AdminRoute };
