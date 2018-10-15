const base_config = require("./base.config");

const development_config = {
  message: "Server started with development configuration",
  base_path: "https://developmentapi.com/"
};

const updated_config = Object.assign(base_config,development_config);
module.exports = updated_config;
