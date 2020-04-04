const Address = require("../models/Address");
const User = require("../models/User");
module.exports = {
  async index(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: { association: "addresses" },
    });

    if (!user) {
      res.status(400).json({ error: "User not found" });
    }

    // const address = await Address.findAll({ where: { userId } });
    return res.json(user.addresses);
  },
  async store(req, res) {
    const { userId } = req.params;
    const { zipcode, street, number } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).json({ error: "User not found" });
    }

    const address = await Address.create({ zipcode, street, number, userId });

    return res.json(address);
  },
};
