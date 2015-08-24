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
 * Lancement du moteur de recherche de l'image
 */
var launchRecog = function (path, organ) {
	setTimeout()
};

/**
 * Upload d'une image
 */
router.post('/upload', uploads.single('image'), function (req, res, next) {
    console.log("Front-end is calling");
    console.log(req.body.organ);
    res.json({status: 'success', data: 'Terminé'});
    launchRecog("lol", "mdr");x
});

module.exports = router;