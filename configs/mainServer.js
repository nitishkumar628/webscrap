const dotenv = require("dotenv").config();

console.log("dot === ", dotenv)
const config = dotenv.parsed;

const allConfig = {
  PORT: config.PORT || 5000,
};

module.exports = allConfig;
