var exec = require('child_process').exec;

var myRun = function (organ, image, callback) {
    var program = "../../code/src/testing_single_file.out";
    var data = "../../data/training/";
    var cluster = "3000";
    var c = "1";
    var myImage = "uploads/";
    var log = "logs/";
    data += organ;
    data += "/";
    myImage += image;
    log += image;
    log += ".json";
    var cmd = program + " " + data + " " + cluster + " " + c + " " + myImage + " " + log;
    var process = exec(cmd, callback);
    process.stdout.on('data', function (data) {
        console.log(data);
    });
};

exports.myRun = myRun;