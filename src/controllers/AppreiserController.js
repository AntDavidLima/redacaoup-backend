const Essay = require('../models/Essay');
const Student = require('../models/Student');
const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const { student_id, essay_id } = req.params;
    const { note, score } = req.body;

    const student = await Student.findByPk(student_id);
    if (!student) return res.status(406).json({ error: 'This student does not exists' });

    const [wasUpdate] = await Essay.update({
      note, score, appreiser_id: student_id,
    }, {
      where: { id: essay_id },
    });

    if (wasUpdate === 0) return res.status(500).json({ error: 'Could not appreise this essay!' });

    const essay = await Essay.findByPk(essay_id);
    return res.json(essay);
  },

  async index(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);
    if (!student) return res.status(406).json({ error: 'This student does not exists' });

    const { school_id } = student;

    const school = await School.findByPk(school_id, {
      include: { association: 'essays', where: { appreiser_id: null } },
    });
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    return res.json(school.essays);
  },
};
