var exec = require('child_process').exec;
var cmd = "../../code/src/testing.out ../../data/training/leaf/ 1 3000";

var myRun = function(callback) {
    var process = exec(cmd, callback);
    process.stdout.on('data', function(data) {
        console.log(data);
    });
};

exports.myRun = myRun;