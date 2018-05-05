const fs = require('fs');
const fse = require('fs-extra')
let dbHelper = require('../../lib/dbHelper');
let UserModel = dbHelper.getModel('user');
let ImgModel = dbHelper.getModel('image');

class ImgOpt {
    //上传头像
    uploadFace(data) {
        console.log("11111111111");
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findByIdAndUpdate(userId).then(back => {
                if(back.avatar !=='uploads/pic.png') {
                    fs.unlinkSync(`public/${back.avatar}`);
                    ImgModel.findByIdAndUpdate(userId,{
                        $set: {
                            avatar: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/avatar_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findByIdAndUpdate(userId, {
                        $set: {
                            IDface: savePath,//姓名
                        }
                    }).then(() => {
                        ImgModel.findById(userId).then(User => {
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

    //查找图片路径
    findImg(data) {
        return new Promise((resolve, reject) => {
            console.log("id",data.id);
            
          ImgModel.findOne({user:data.id})
            .then(img => {
                if(img == null){
                    console.log("0000000000")
                    ImgModel.create({user:data.id}).then( newimg =>{
                        console.log("查找图片信息",newimg);
                        resolve(newimg);
                    }).catch( ()=>{
                        console.log("失败");
                        reject();
                    })
                }else{
                    console.log("1111111")
                    console.log("查找图片信息",img);
                    resolve(img);
                }
                
            })
            .catch(() => {
                console.log("0000000000")
                    ImgModel.create({user:data.id}).then( newimg =>{
                        console.log("查找图片信息",newimg);
                        resolve(newimg);
                    }).catch( ()=>{
                        console.log("失败");
                        reject();
                    })
                reject();
            });
        });
    }


    //ID正面
    uploadIDface(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.IDface !=='uploads/ID-face-card.png') {
                    fs.unlinkSync(`public/${back.IDface}`);
                    console.log('dddd')
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            IDface: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/IDface_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            IDface: savePath,//姓名
                        }
                    }).then(newdata => {
                        ImgModel.findOne({user:userId}).then(User => {
                            resolve(User);
                        });
                    }).catch(() => {
                        reject('fail');
                    });
            }).catch(() => {
                reject('fail');
            });
           
        });
    }

    //ID反面
    uploadIDback(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.IDback !=='uploads/ID-face-card.png') {
                    fs.unlinkSync(`public/${back.IDback}`);
                    console.log('dddd')
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            IDback: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/IDback_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            IDback: savePath,//姓名
                        }
                    }).then(newdata => {
                        ImgModel.findOne({user:userId}).then(User => {
                            resolve(User);
                        });
                    }).catch(() => {
                        reject('fail');
                    });
            }).catch(() => {
                reject('fail');
            });
           
        });
    }

}
module.exports = new ImgOpt;
