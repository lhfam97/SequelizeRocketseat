const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    //Encontrar todos os usuários com e-mail que termina com @gmail.com
    //Desses usuários eu quero encontrar todos que moram no Cep 49000239
    //Desses usuário quero buscar as tecnologias que começam com React

    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com",
        },
      },
      include: [
        { association: "addresses", where: { zipcode: "49000239" } }, //enderecos
        { association: "techs", where: { name: { [Op.iLike]: "react%" } } }, //techs
      ],
    });
    return res.json(users);
  },
};
