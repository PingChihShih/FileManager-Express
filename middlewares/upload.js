const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("uploaded_file");

const uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;