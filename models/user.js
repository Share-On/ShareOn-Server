const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(20), 
          allowNull: false 
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        areaCode: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        address: {
          type: Sequelize.STRING(20),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    User.hasMany(db.transaction)
  }
}

module.exports = User;

