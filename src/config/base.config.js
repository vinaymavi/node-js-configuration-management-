const base_config = {
  message: "Server started with base configuration",
  base_path: "https://baseapi.com/",
  end_points: {
    user: "/user",
    auth: "/auth",
    token_refresh: "/token-refresh"
  }
};
module.exports = base_config;
