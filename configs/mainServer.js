const dotenv = require("dotenv").config();

// console.log("dot === ", dotenv);
//remove this below check if you want mandatory passing variables from env or CLI
if (dotenv.error) {
  dotenv.parsed = {};
}
const config = dotenv.parsed;

const allConfig = {
  PORT: config.PORT || 5000,
};

module.exports = allConfig;
