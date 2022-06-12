const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, nex) => {
  let customError = {
    msg: err.message || `Something Went Wrong try again`,
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
