const { Model, DataTypes } = require("sequelize");

class tech extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "techs",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.user, {
      foreignKey: "techId",
      through: "userTechs",
      as: "users",
    });
  }
}

module.exports = tech;
