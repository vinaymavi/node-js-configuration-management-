const base_config = require("./base.config");

const prod_config = {
  message: "Server started with prod configuration",
  base_path: "https://prodapi.com/"
};

const updated_config = Object.assign(base_config,prod_config);
module.exports = updated_config;
