const Essay = require('../models/Essay');
const Student = require('../models/Student');
const Theme = require('../models/Theme');
const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const { student_id, theme_id } = req.params;
    const {
      text,
    } = req.body;

    const student = await Student.findByPk(student_id);
    if (!student) return res.status(406).json({ error: 'This student does not exists' });

    const { school_id } = student;

    const school = await School.findByPk(school_id);
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    const theme = await Theme.findByPk(theme_id);
    if (!theme) return res.status(406).json({ error: 'This theme does not exists' });

    const essay = await Essay.create({
      text, writer_id: student_id, theme_id, school_id,
    });

    return res.json(essay);
  },

  async index(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);
    if (!student) return res.status(406).json({ error: 'This student does not exists' });

    const { school_id } = student;

    const school = await School.findByPk(school_id, {
      include: { association: 'essays' },
    });
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    return res.json(school.essays);
  },

  async show(req, res) {
    const { essay_id } = req.params;

    const essay = await Essay.findByPk(essay_id);
    if (!essay) return res.status(406).json({ error: 'Essay not found!' });

    return res.json(essay);
  },
};
