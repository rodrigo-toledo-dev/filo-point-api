const moment = require('moment');

const mongoose = require('mongoose');
const Operation = mongoose.model('Operation');


module.exports = {
  
  async index(req, res) {
    const operations = await Operation.find();

    return res.json(operations);
  },

  async show(req, res) {
    const operations = await Operation.find({ employee: req.body['employee'] }).sort({ createdAt: 'desc' });;

    return res.json(operations);
  },

  async create(req, res) {
    await Operation.create(req.body);
    const operations = await Operation.find({ employee: req.body['employee'] }).sort({createdAt: 'desc'});

    return res.json(operations);
  }
}
