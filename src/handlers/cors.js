const { CORS_HEADERS } = require("../constants/cors.const");

exports.corsHandler = async (event) => {
  const response = {
    statusCode: 200,
    headers: CORS_HEADERS,
  };
};
