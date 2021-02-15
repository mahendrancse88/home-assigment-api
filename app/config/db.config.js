module.exports = {
  HOST: "us-cdbr-east-03.cleardb.com",
  USER: "ba128a36dace8d",
  PASSWORD: "8942c422",
  DB: "heroku_b544ecbea11f279",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
