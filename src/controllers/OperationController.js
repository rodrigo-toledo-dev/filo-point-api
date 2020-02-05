const mongoose = require('mongoose');

const Operation = mongoose.model('Operation');
module.exports = {
  
  async index(req, res) {
    const operations = await Operation.find();

    return res.json(operations);
  },

  async show(req, res) {
    const operations = await Operation.find({ employee: req.params.employee });

    return res.json(operations);
  },

  async store(req, res) {
    console.log(req.body);
    const operation = await Operation.create(req.body);
    const operations = await Operation.find({ employee: operation.employee });

    return res.json(operations);
  }
}