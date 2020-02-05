const moment = require('moment');

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
    const start = moment(operation.createdAt).format('YYYY-MM-DD 00:00:01')
    let searchParams = {};
    searchParams['createdAt'] = { $gte: start };
    searchParams['employee'] = operation.employee
    const operations = await Operation.find(searchParams).sort({createdAt: 'desc'});

    return res.json(operations);
  }
}