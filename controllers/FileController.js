const fs = require('fs');

/** Models */
const File = require('../models/File');

/** Middlewares */
const uploadFile = require("../middlewares/upload");

module.exports = {

  UploadFileAsync: async (req, res) => {
    try {
      await uploadFile(req, res);
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }

      const newPath = `public/images/uploads/${req.file.originalname}`
      fs.rename(req.file.path, newPath, () => { }); // REVIEW: 檢查有沒有成功

      const file = new File({
        filename: req.file.originalname,
        path: newPath,
      });

      file.save(err => {
        if (err) {
          throw err;
        }
        return file;
      });

      res.status(200).send({
        message: "Uploaded the file successfully: " + req.file.originalname,
      });
    } catch (err) {
      res.status(500).send({
        message: `Could not upload the file: ${err}`,
      });
    }
  },

  DownloadFileAsync: async (req, res) => {
    try {
      const file = await File.findOne({ filename: req.query.filename });
      console.log(`file: ${file}`);
      if (!file || !file.path) {
        throw new Error()
      }
      const fileStream = fs.readFileSync(file.path, 'binary');

      // res.set('Content-Type', 'image/png')
      res.setHeader('Content-Length', fileStream.length);
      res.write(fileStream, 'binary');
      res.end();

    } catch (error) {
      res.status(404).send()
    }
  }
};
