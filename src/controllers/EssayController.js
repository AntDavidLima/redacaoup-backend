const Essay = require('../models/Essay');

module.exports = {
  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { student_id, theme_id } = req.params;
    const {
      text, note,
    } = req.body;

    const essay = await Essay.create({
      text, note, writer_id: student_id, theme_id,
    });

    return res.json(essay);
  },
};
