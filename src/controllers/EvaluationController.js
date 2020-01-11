const Essay = require('../models/Essay');
const Student = require('../models/Student');

module.exports = {
  async store(req, res) {
    const { essay_id } = req.params;
    const { parcial_score } = req.body;

    const essay = await Essay.findByPk(essay_id);
    if (!essay) return res.status(406).json({ error: 'This essay does not exists' });

    const { appreiser_id } = essay;

    const current_score = await Student.findByPk(appreiser_id);

    const score = parcial_score + current_score.score;

    const [wasUpdate] = await Student.update({
      score,
    }, {
      where: { id: appreiser_id },
    });

    if (wasUpdate === 0) return res.status(500).json({ error: 'Could not evaluate this appreiser!' });

    const student = await Student.findByPk(appreiser_id);

    return res.json(student);
  },
};
