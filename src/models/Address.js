const { Model, DataTypes } = require("sequelize");

class address extends Model {
  static init(sequelize) {
    super.init(
      {
        zipcode: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.user, {
      foreignKey: "userId",
      as: "user",
    });
  }
}

module.exports = address;
