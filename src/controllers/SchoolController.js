const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const {
      name, state, city, email, password, avatar,
    } = req.body;

    const school = await School.create({
      name, state, city, email, password, avatar,
    });

    return res.json(school);
  },
};
