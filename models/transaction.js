module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "transaction",
      {
        transactionId: {
          type: DataTypes.STRING(20), 
          allowNull: false 
        },
        value: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        addType: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        date: {
            type: DataTypes.DATE,
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
  };