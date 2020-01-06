const Theme = require('../models/Theme');

module.exports = {
  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { school_id } = req.params;
    const {
      title, motivacional,
    } = req.body;

    const theme = await Theme.create({
      title, motivacional, school_id,
    });

    return res.json(theme);
  },
};
