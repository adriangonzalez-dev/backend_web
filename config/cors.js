const whiteList = [process.env.URL_FRONTEND];
const configCors = {
    origin(origin, cb) {
      if (whiteList.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error('Error de cors'));
      }
    },
  };

  module.exports = {
    configCors
  }