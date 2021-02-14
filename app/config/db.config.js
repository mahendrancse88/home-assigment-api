module.exports = {
  HOST: "35.198.206.239",
  USER: "root",
  PASSWORD: "Mahe@@88",
  DB: "homeassignment",
  dialect: "mysql",
  socketPath:"/cloudsql/home-assignment-api:asia-southeast1:home-assignment-api",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
