const express = require('express');
const router = express.Router();
const FileController = require('../controllers/FileController');

router.get('/:id', FileController.DownloadFileAsync);
router.post('/upload', FileController.UploadFileAsync);

module.exports = router;
