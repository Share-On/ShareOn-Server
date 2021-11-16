const Sequelize = require("sequelize");

class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        transactionId: {
          type: Sequelize.STRING(20), 
          allowNull: false 
        },
        value: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        addType: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Transaction",
        tableName: "transaction",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    Transaction.belongsTo(db.User)
  }
}

module.exports = Transaction;
