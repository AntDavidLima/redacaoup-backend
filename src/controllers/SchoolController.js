const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const {
      name, state, city, email, password, avatar,
    } = req.body;

    const [school, created] = await School.findOrCreate({
      where: { email },
      defaults: {
        name, state, city, email, password, avatar,
      },
    });

    if (!created) return res.status(409).json({ error: 'This account alredy exists' });

    return res.json(school);
  },

  async index(req, res) {
    const schools = await School.findAll();
    return res.json(schools);
  },

  async show(req, res) {
    const { school_id } = req.params;

    const school = await School.findByPk(school_id);

    if (school === null) return res.status(406).json({ error: 'School not found!' });

    return res.json(school);
  },

  async destroy(req, res) {
    const { school_id } = req.params;

    const school = await School.findByPk(school_id);

    if (school === null) return res.status(406).json({ error: 'School not found!' });

    await School.destroy({ where: { id: school_id } });

    return res.send();
  },

  async update(req, res) {
    const { school_id } = req.params;
    const {
      name, state, city, email, password, avatar,
    } = req.body;

    const [wasUpdate] = await School.update({
      name, state, city, email, password, avatar,
    }, {
      where: { id: school_id },
    });

    if (wasUpdate === 0) return res.status(500).json({ error: 'Could not update this school!' });

    const school = await School.findByPk(school_id);
    return res.json(school);
  },
};
