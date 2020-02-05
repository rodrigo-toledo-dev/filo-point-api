const mongoose = require('mongoose');

const OperationSchema = new mongoose.Schema({
  operation: {
    type: String,
    required: true
  },
  employee: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Operation', OperationSchema);