const mongoose = require('mongoose');

const FileStoreSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  profileImage: { data: Buffer, contentType: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('FileStorage', FileStoreSchema);
