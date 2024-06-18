const { Route } = require('../core/Route');
const multer = require('multer');
const upload = multer();

class StudentRoute extends Route {
  initializeRoute() {
    /* === Student Entity === */
    // get data student by id
    this.router.get(
      '/students/id/:id',
      this.controller.getDataStudentById.bind(this.controller)
    );

    //get data student by name
    this.router.get(
      '/students/name/:name',
      this.controller.getDataStudentByName.bind(this.controller)
    );

    // update data student
    this.router.put(
      '/students/:id',
      upload.none(),
      this.controller.updateDataStudent.bind(this.controller)
    );

    /* === Project Entity === */
    this.router.post(
      '/students/project/add',
      upload.none(),
      this.controller.addProject.bind(this.controller)
    );
  }
}

module.exports = StudentRoute;
