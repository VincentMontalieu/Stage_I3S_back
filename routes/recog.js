/**
 * @author Vincent Montalieu
 * @brief Routes for recog.
 */

// Requirements
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

/**
 * Test de communication
 */
router.post('/upload', upload.single('image'), function (req, res, next) {
	console.log("Front-end is calling !");
    console.log(req.body.organ);
    res.end();
    //res.json({status: 'success', data: 'Fichier chargé.'});
});

module.exports = router;