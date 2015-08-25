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

/**
 * Upload d'une image
 */
router.post('/upload', uploads.single('image'), function (req, res, next) {
    console.log("Front-end is calling");
    console.log(req.body.organ);
    setTimeout(function () {
        res.json({
            status: 'success',
            data: ["Robinia pseudoacacia", "Quercus pubescens", "Castanea sativa", "Salix fragilis"]
        });
    }, 1000);
});

module.exports = router;