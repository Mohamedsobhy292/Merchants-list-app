const config = {
  development: {
    database: {
      url: "mongodb://localhost/merchants"
    }
  },
  production: {
    // mongodb connection settings
    database: {
      host: "127.0.0.1",
      port: "27017",
      db: "site",
      url: ""
    }
  }
};
module.exports = config;
