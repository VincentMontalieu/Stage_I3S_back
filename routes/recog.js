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
});

var fs = require('fs');

var process = require('../modules/run');

var startRecog = function (organ, image, callback) {
    process.myRun(organ, image, callback);
};

var recogIsDone = function (req, res, next) {
    var obj = JSON.parse(fs.readFileSync('logs/' + req.file.filename + '.json', 'utf8'));
    console.log(obj);
    res.json(obj);
};

/**
 * Upload d'une image
 */
router.post('/upload', uploads.single('image'), function (req, res, next) {
    console.log("Front-end is calling");
    startRecog(req.body.organ, req.file.filename, function () {
        recogIsDone(req, res, next);
    });
});

module.exports = router;