const fs = require('fs');
const fse = require('fs-extra')
let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');

class ImgOpt {
    uploadFace(data) {
        console.log("11111111111");
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            UserModel.findByIdAndUpdate(userId).then(back => {
                if(back.avatar) {
                    fs.unlinkSync(`public/${back.avatar}`);
                    UserModel.findByIdAndUpdate(userId,{
                        $set: {
                            avatar: '',
                        }
                    }).catch( () =>{

                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/avatar_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    UserModel.findByIdAndUpdate(userId, {
                        $set: {
                            avatar: savePath,//姓名
                        }
                    }).then(() => {
                        UserModel.findById(userId).then(User => {
                            console.log('===========',User);
                            
                            resolve(User);
                        });
                    }).catch(() => {
                        reject('fail');
                    });
            }).catch(() => {
                reject('fail');
            });
           
            //resolve(file);
        });
    }
}
module.exports = new ImgOpt;
