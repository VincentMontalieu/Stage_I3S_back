var exec = require('child_process').exec;
var cmd = "../../code/src/testing.out ../../data/training/leaf/ 1 3000";

var myRun = function() {
    var process = exec(cmd);
    process.stdout.on('data', function(data) {
        console.log(data);
    });
};

exports.myRun = myRun;