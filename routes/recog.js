/**
 * @author Vincent Montalieu
 * @brief Routes for recog.
 */

/**
 * Requirements
 */
var express = require('express');
var router = express.Router();
var multer = require('multer');

var uploads = multer({
    dest: 'uploads/',
    rename: function (fieldname, filename) {
        console.log("Renaming...");
        return filename + Date.now();
    },
    onFileUploadStart: function () {
        console.log("Upload is starting...");
    },
    onFileUploadComplete: function () {
        console.log("File uploaded");
    }
});

var fs = require('fs');

var process = require('../modules/run');

var startRecog = function (callback) {
    process.myRun(callback);
};

var recogIsDone = function (req, res, next) {
    var obj = JSON.parse(fs.readFileSync('logs/log.json', 'utf8'));
    res.json(obj);
};

/**
 * Upload d'une image
 */
router.post('/upload', uploads.single('image'), function (req, res, next) {
    console.log("Front-end is calling");
    console.log(req.body.organ);
    startRecog(function () {
        recogIsDone(req, res, next);
    });
});

module.exports = router;