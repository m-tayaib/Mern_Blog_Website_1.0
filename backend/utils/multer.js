const crypto = require('crypto');
const multer = require('multer');
const path = require('path');

// Define the storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/'); // Define the destination folder
  },
  filename: function (req, file, cb) {
    const fn = crypto.randomBytes(10).toString('hex') + path.extname(file.originalname); // Generate a unique filename
    cb(null, fn);
  }
});

// Create an instance of multer with the defined storage
const upload = multer({ storage: storage });

module.exports = upload;
