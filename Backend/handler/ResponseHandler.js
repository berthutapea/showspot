class ResponseHandler {
  success(res, message, data = 0) {
    const statusCode = 200;
    const response = {
      code: statusCode,
      status: 'success',
      message: message,
      data: data,
    };
    return res.status(statusCode).json(response);
  }

  error(res) {
    const message = 'Something went wrong!';
    const statusCode = 400;
    const response = {
      code: statusCode,
      status: 'error',
      message: message,
    };
    return res.status(statusCode).json(response);
  }

  badRequest(res) {
    const message = 'Bad Request';
    const statusCode = 400;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  unauthorized(res) {
    const message = 'Unauthorized';
    const statusCode = 401;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  forbidden(res) {
    const message = 'Fobidden';
    const statusCode = 403;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  notFound(res) {
    const message = 'Not Found';
    const statusCode = 404;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  timeout(res) {
    const message = 'Request Timeout';
    const statusCode = 408;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  conflict(res) {
    const message = 'Request Conflict';
    const statusCode = 409;
    const response = {
      code: statusCode,
      status: 'error',
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  serverError(res, error) {
    const statusCode = 500;
    const message = 'Internal Server Error';
    const response = {
      code: statusCode,
      status: 'error',
      message: message,
      error: error,
    };
    return res.status(statusCode).json(response);
  }
}

module.exports = ResponseHandler;
