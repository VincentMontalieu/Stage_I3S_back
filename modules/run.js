var exec = require('child_process').exec;
//var cmd = "../../code/src/testing.out ../../data/training/leaf/ 1 3000";

var program = "./testing_single_file.out";
var data = "../../data/training/";
var cluster = "3000";
var c = "1";
var myImage;
var log = "../../web/back-plants-recog/logs/log.json";

var myRun = function (organ, image, callback) {
    data += organ;
    data += "/";
    myImage = image;
    var process = exec(cmd, callback);
    process.stdout.on('data', function (data) {
        console.log(data);
    });
};

exports.myRun = myRun;