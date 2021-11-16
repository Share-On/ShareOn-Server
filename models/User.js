module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "user",
      {
        userId: {
          type: DataTypes.STRING(20), 
          allowNull: false 
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        areaCode: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        address: {
            type: DataTypes.STRING(20),
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
  };