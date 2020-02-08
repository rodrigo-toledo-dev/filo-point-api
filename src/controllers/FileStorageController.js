const moment = require('moment');
const fileSystem = require('fs');

const mongoose = require('mongoose');
const FileStorage = mongoose.model('FileStorage');

module.exports = {
  async index(req, res) {
    const fileStorages = await FileStorage.find();

    return res.json(fileStorages);
  },

  async show(req, res) {
    const fileStorage = await FileStorage.find({
      filename: req.params.filename
    });

    return res.json(fileStorage);
  },

  
  async store(req, res) {
    let randomNumber = Math.floor(Math.random() * 100) + 1 ;
    let body = '';
    
    const fileName = `${randomNumber}.png`;
    profileFileImage = `~/tmp/files/${fileName}`;
    console.log(profileFileImage);

    
    req.on('data', function(data) {
      body += data;
    });

    req.on('end', function() {
      fileSystem.appendFile(profileFileImage, body, function() {
        res.end();
      });
    });


    // console.log(req.body);
    // const fileStorage = new FileStorage;
    // fileStorage.profileImage.data = fileSystem.readFileSync;
    // fileStorage.profileImage.contentType = 'image/png';
    // fileStorage.filename = fileName;

    // await fileStorage.save();
    
    // return res.json(fileStorage);
    return {hello: 'ola'};
  }
};
