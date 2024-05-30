class Route {
  constructor(router, controller) {
    this.router = router;
    this.controller = controller;
    this.initializeRoute();
  }

  initializeRoute() {
    throw new Error('initializeRoute method must be implemented in subclasses');
  }
}

module.exports = { Route };
