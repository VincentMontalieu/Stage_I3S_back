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
        console.log("Rename...");
        return filename + Date.now();
    },
    onFileUploadStart: function () {
        console.log("Upload is starting...");
    },
    onFileUploadComplete: function () {
        console.log("File uploaded");
    }
});

var process = require('../modules/run');

var startRecog = function (callback) {
    process.myRun();
    if (callback && typeof(callback) === "function") {
        callback(req, res, next);
    }
}

var recogIsDone = function (req, res, next) {
   res.json({
            status: 'success',
            data: ["Robinia pseudoacacia", "Quercus pubescens", "Castanea sativa", "Salix fragilis"]
        });
}

/**
 * Upload d'une image
 */
router.post('/upload', uploads.single('image'), function (req, res, next) {
    console.log("Front-end is calling");
    console.log(req.body.organ);
    startRecog(recogIsDone(req, res, next));
});

module.exports = router;