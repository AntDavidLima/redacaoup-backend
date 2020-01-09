const Student = require('../models/Student');
const School = require('../models/School');

module.exports = {
  async store(req, res) {
    const { school_id } = req.params;
    const {
      name, email, password, avatar,
    } = req.body;

    const school = await School.findByPk(school_id);

    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    const student = await Student.create({
      name, email, password, avatar, school_id,
    });

    return res.json(student);
  },

  async index(req, res) {
    const { school_id } = req.params;

    const school = await School.findByPk(school_id, {
      include: { association: 'students' },
    });
    if (!school) return res.status(406).json({ error: 'This school does not exists' });

    return res.json(school.students);
  },

  async show(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);
    if (!student) return res.status(406).json({ error: 'Student not found!' });

    return res.json(student);
  },

  async destroy(req, res) {
    const { student_id } = req.params;

    const student = await Student.findByPk(student_id);

    if (!student) return res.status(406).json({ error: 'Student not found!' });

    await Student.destroy({ where: { id: student_id } });

    return res.send();
  },

  async update(req, res) {
    const { student_id } = req.params;
    const {
      name, email, password, avatar,
    } = req.body;

    const [wasUpdate] = await Student.update({
      name, email, password, avatar,
    }, {
      where: { id: student_id },
    });

    if (wasUpdate === 0) return res.status(500).json({ error: 'Could not update this student!' });

    const student = await Student.findByPk(student_id);
    return res.json(student);
  },
};
