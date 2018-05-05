function cameraTakePicture(sourcePhoto,edit,image,file) {
    navigator.camera.getPicture(onSuccess, onFail, { 
        quality: 50,// 	数值型，用从0到100%的百分比来控制图像的质量，100表示不经过压缩
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType : sourcePhoto,//数值型，指明图像来源。可能值有Camera.PictureSourceType.CAMERA(默认值)，或者Camera.PictureSourceType.PHOTOLIBRARY、Camera.PictureSourceType.SAVEDPHOTOALBUM。选项的行为会根据应用运行的平台不同而不同，像有些平台没有photo libraries或photo albums。
        allowEdit : edit,//布尔值，照片在返回Cordova应用之前用户是否可以编辑，但并不是所有移动平台都支持。
        encodingType : Camera.EncodingType.JPEG,//数值型，指明图像输出格式。Camera.EncodingType.JPEG让API返回JPEG图像。
        targetWdith : 100,//数值型，用来设定获得的图像的高度。
        targetHeight : 100,
        popoverOptions : CameraPopoverOptions,
        saveToPhotoAlbum : false,//布尔值，指示API在拍照后把图像保存到设备照片相册中。
    });
 
    function onSuccess(imageData) {
       image.src = "data:image/jpeg;base64," + imageData;
       if(image.id == "one"){
           return  file.one = imageData
       }else{
            return file.two = imageData
       }
    }
 
    function onFail(message) {
       alert('Failed because: ' + message);
    }
 }

 
 export{cameraTakePicture}