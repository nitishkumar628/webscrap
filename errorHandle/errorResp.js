const NOT_FOUND = {
  code: 404,
  message: "required info/resource not found",
};

const NOT_AUTHORIZED = {
  code: 401,
  message: "you are not authorized for this request",
};

const MISSING_PARAMETERS = {
  code: 400,
  message: "following required parameters are missing >> ",
};

const NOT_FOUND_FN = (res) => {
  return res.status(NOT_FOUND.code).send({ message: NOT_FOUND.message });
};

module.exports = {
  NOT_FOUND,
  NOT_AUTHORIZED,
  MISSING_PARAMETERS,
  NOT_FOUND_FN,
};
