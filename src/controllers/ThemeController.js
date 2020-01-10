const Theme = require('../models/Theme');
const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const { school_id } = req.params;
    const {
      title, motivacional,
    } = req.body;

    const school = await School.findByPk(school_id);
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    const theme = await Theme.create({
      title, motivacional, school_id,
    });

    return res.json(theme);
  },

  async index(req, res) {
    const { school_id } = req.params;

    const school = await School.findByPk(school_id, {
      include: { association: 'themes' },
    });
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    return res.json(school.themes);
  },

  async show(req, res) {
    const { theme_id } = req.params;

    const theme = await Theme.findByPk(theme_id);
    if (!theme) return res.status(406).json({ error: 'Theme not found!' });

    return res.json(theme);
  },

  async destroy(req, res) {
    const { theme_id } = req.params;

    const theme = await Theme.findByPk(theme_id);

    if (!theme) return res.status(406).json({ error: 'Theme not found!' });

    await Theme.destroy({ where: { id: theme_id } });

    return res.send();
  },

  async update(req, res) {
    const { theme_id } = req.params;
    const {
      title, motivacional,
    } = req.body;

    const [wasUpdate] = await Theme.update({
      title, motivacional,
    }, {
      where: { id: theme_id },
    });

    if (wasUpdate === 0) return res.status(500).json({ error: 'Could not update this theme!' });

    const theme = await Theme.findByPk(theme_id);
    return res.json(theme);
  },
};
