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
                if(back.IDback !=='uploads/ID-back-card.png') {
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

    //bank
    uploadBankCard(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.bank !=='uploads/pf-bank-card.png') {
                    fs.unlinkSync(`public/${back.bank}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            bank: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/bank_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            bank: savePath,//姓名
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

    //毕业证
    uploadDiploma(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.Diploma !=='uploads/diploma-card.png') {
                    fs.unlinkSync(`public/${back.Diploma}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            Diploma: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/Diploma_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            Diploma: savePath,//姓名
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

    //学位证
    uploaddegree(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.degree !=='uploads/certificate-card.png') {
                    fs.unlinkSync(`public/${back.degree}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            degree: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/degree_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            degree: savePath,//姓名
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

    //学生证
    uploadStudentID(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.StudentID !=='uploads/student-card.png') {
                    fs.unlinkSync(`public/${back.StudentID}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            StudentID: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/StudentID_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            StudentID: savePath,//姓名
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

    
    //一寸照
    uploadoneph(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.oneph !=='uploads/one-inch-photo.png') {
                    fs.unlinkSync(`public/${back.oneph}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            oneph: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/oneph_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            oneph: savePath,//姓名
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

    
    //离职证明
    uploadQuit(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.Quit !=='uploads/leave-prove-img.png') {
                    fs.unlinkSync(`public/${back.Quit}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            Quit: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/Quit_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            Quit: savePath,//姓名
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

    
    //户口本主页
    uploadResidenceHomepage(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.ResidenceHomepage !=='uploads/household-register-card.png') {
                    fs.unlinkSync(`public/${back.ResidenceHomepage}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            ResidenceHomepage: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/ResidenceHomepage_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            ResidenceHomepage: savePath,//姓名
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
    //户口本个人
    uploadResidenceOwnpage(data) {
        
        return new Promise((resolve, reject) => {
            let file = data.files.file; // 获取上传文件
            let userId = data.fields.id;
            ImgModel.findOne({user:userId}).then(back => {
                if(back.ResidenceOwnpage !=='uploads/household-register-card.png') {
                    fs.unlinkSync(`public/${back.ResidenceOwnpage}`);
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            ResidenceOwnpage: '',
                        }
                    }).catch( () =>{
                        reject('fail');
                        return false;
                    })
                }
                    let reader = fs.createReadStream(file.path); // 创建可读流
                    let ext = file.name.split('.').pop(); // 获取上传文件扩展名
                    fse.ensureDirSync('public/uploads/' + userId);
                    let savePath = `uploads/${userId}/ResidenceOwnpage_${+new Date()}.${ext}`
                    let upStream = fs.createWriteStream(`public/${savePath}`); // 创建可写流
                    reader.pipe(upStream); // 可读流通过管道写入可写流
                    console.log(savePath);
                    
                    ImgModel.findOneAndUpdate({user:userId}, {
                        $set: {
                            ResidenceOwnpage: savePath,//姓名
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
