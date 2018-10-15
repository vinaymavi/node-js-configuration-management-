
const env = process.env.ENV || "DEV";

switch (env) {
  case "DEV":
    module.exports = require("./development.config");
    break;
  default:
    module.exports = require("./production.config");
}
