const fs = require('fs');
const fse = require('fs-extra')
let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');

class ImgOpt {
    uploadFace(data) {
        console.log("11111111111");
        
        return new Promise((resolve, reject) => {
            const file = data.files.file; // 获取上传文件
            const userId = data.fields.id;
            const reader = fs.createReadStream(file.path); // 创建可读流
            const ext = file.name.split('.').pop(); // 获取上传文件扩展名
            fse.ensureDirSync('public/uploads/' + userId);
            const upStream = fs.createWriteStream(`public/uploads/${userId}/avatar.jpg`); // 创建可写流
            reader.pipe(upStream); // 可读流通过管道写入可写流
            console.log('uploads/'+ userId+'/avatar.jpg');
            
            UserModel.findByIdAndUpdate(userId, {
                $set: {
                    avatar: 'uploads/'+ userId+'/avatar.jpg',//姓名
                }
            }).then(() => {
                UserModel.findById(userId).then(User => {
                    console.log('===========');
                    
                    resolve(User);
                });
            }).catch(() => {
                reject('fail');
            });
            //resolve(file);
        });
    }
}
module.exports = new ImgOpt;
