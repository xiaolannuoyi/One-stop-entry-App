const fs = require('fs');

let count = 0;
let paths = [
  './user/src',
  './hr/src',
  './server/controllers',
  './server/lib',
  './server/module',
  './server/routes',
];
for (let i = 0; i < paths.length; i++) {
  let filePath = paths[i];
  fileDisplay(filePath);
}

fs.appendFileSync('./line-log.txt', new Date().toLocaleString() + '统计：' + count + '行\n');

function fileDisplay(filePath) {
  let files = fs.readdirSync(filePath);
  files.forEach(function(filename) {
    let filedir = filePath + '/' + filename;
    let stats = fs.statSync(filedir);
    if (stats.isFile()) {
      if (/(\.js|\.vue|\.json)$/.test(filedir)) {
        let fileLine = fs
          .readFileSync(filedir)
          .toString()
          .split('\n').length;
        count += fileLine;
        console.log(filedir + '：共' + fileLine + '行');
        console.log('当前累计' + count + '行');
      }
    } else {
      fileDisplay(filedir);
    }
  });
}
