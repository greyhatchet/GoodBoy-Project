var fs = require('fs');
var path = require('path');

var filename = 'image001.jpg';
var src = path.join(_dirname, filename);
var destDir = path.join(_dirname, 'destfolder');

fs.access(destDir, (err)) => {
    if(err)
        fs.mkdirSync(destDir);
    
    copyFile(src, path.join(destDir, filename));
    
});

function copyFile(src, dest) {
    
    let readStream = fs.createReadStream(src);
    
    readStream.once('error', (err) => {
        console.log(err);
    });
    
    readStream.once('end', () => {
    console.log('done copying');
    });
    
    readStream.pipe(fs.createWriteStream(dest));
}