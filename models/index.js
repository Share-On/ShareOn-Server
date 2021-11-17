const Sequelize = require("sequelize");
const config = require("../config/config");
const transaction = require("./transaction");
const User = require("./User");
const db = {};

const sequelize = new Sequelize(
  config.test.database,
  config.test.username,
  config.test.password,
  config.test
);

db.sequelize = sequelize;


db.User = User;
db.transaction = transaction;


User.init(sequelize);
transaction.init(sequelize);


User.associate(db);
transaction.associate(db);


module.exports = db;