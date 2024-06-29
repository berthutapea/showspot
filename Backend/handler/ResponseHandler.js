class ResponseHandler {
  async success(res, message, codeAccess, data = 0,) {
    const statusCode = 200;
    const response = {
      code: statusCode,
      status: 'success',
      message: message,
      access: codeAccess,
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
      access: codeAccess,
      message: message,
    };
    return res.status(statusCode).json(response);
  }

  badRequest(res, codeAccess = '?') {
    const message = 'Bad Request';
    const statusCode = 400;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  unauthorized(res, codeAccess = '?') {
    const message = 'Unauthorized';
    const statusCode = 401;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  forbidden(res, codeAccess = '?') {
    const message = 'Fobidden';
    const statusCode = 403;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  notFound(res, codeAccess = '?') {
    const message = 'Not Found';
    const statusCode = 404;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  timeout(res, codeAccess = '?') {
    const message = 'Request Timeout';
    const statusCode = 408;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  conflict(res, codeAccess = '?') {
    const message = 'Request Conflict';
    const statusCode = 409;
    const response = {
      code: statusCode,
      status: 'error',
      access: codeAccess,
      error: message,
    };
    return res.status(statusCode).json(response);
  }

  serverError(res, error, codeAccess = '?') {
    const statusCode = 500;
    const message = 'Internal Server Error';
    const response = {
      code: statusCode,
      status: 'error',
      message: message,
      access: codeAccess,
      error: error,
    };
    return res.status(statusCode).json(response);
  }
}

module.exports = ResponseHandler;
