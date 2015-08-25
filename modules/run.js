var exec = require('child_process').exec;
var cmd; // La commande à exécuter avec les arguments

exec(cmd, function (error, stdout, stderr) {
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
    if (error !== null) {
        console.log('exec error:', error);
    }
});

exports.exec = exec;