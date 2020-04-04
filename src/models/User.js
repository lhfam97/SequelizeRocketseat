const { Model, DataTypes } = require("sequelize");

class user extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.address, {
      foreignKey: "userId",
      as: "addresses",
    });
    this.belongsToMany(models.tech, {
      foreignKey: "userId",
      through: "userTechs",
      as: "techs",
    });
  }
}

module.exports = user;
