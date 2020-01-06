const Student = require('../models/Student');

module.exports = {
  async store(req, res) {
    // eslint-disable-next-line camelcase
    const { school_id } = req.params;
    const {
      name, email, password, avatar,
    } = req.body;

    const student = await Student.create({
      name, email, password, avatar, school_id,
    });

    return res.json(student);
  },
};
