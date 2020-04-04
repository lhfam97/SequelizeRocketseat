const Tech = require("../models/Tech");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
      include: { association: "techs", through: { attributes: [] } },
    });
    return res.json(user.techs);
  },
  async store(req, res) {
    const { userId } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    const [tech] = await Tech.findOrCreate({
      where: { name },
    });
    await user.addTech(tech);

    return res.json(tech);
  },
  async delete(req, res) {
    const { userId } = req.params;
    const { name } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).json({ error: "User not found" });
    }
    const tech = await Tech.findOne({
      where: { name },
    });
    await user.removeTech(tech);
    return res.json();
  },
};
