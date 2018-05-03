<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <blur :blur-amount=40 :url="avatar">
      <p class="center"><img :src="avatar" @click="actionsShow = true"></p>
    </blur>

    <group>
      <cell title="姓名" :value="UserInfo.Name"></cell>
      <cell title="电话" :value="UserInfo.Tel"></cell>
      <cell title="地区" :value="UserInfo.Address"></cell>
      <cell title="部门" :value="UserInfo.Department"></cell>
      <cell title="入职时间" :value="UserInfo.EntryTime"></cell>
    </group>
    <!-- confirm -->
    <div v-transfer-dom>
      <confirm v-model="show"
      title="Offer"
      cancel-text="我在想想"
      confirm-text="接受"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <p style="text-align:center;">您的offer已到达，你是否接受？</p>
      </confirm>
    </div>

    <actionsheet v-model="actionsShow"
                 :menus="menu"
                 @on-click-menu="handleSelectAction"
                 show-cancel>
                 </actionsheet>
  </div>
</template>

<script>
import {Group,Cell,XHeader,CellBox,Confirm,XButton,Blur,Actionsheet,TransferDomDirective as TransferDom} from "vux";
import ServiceManager from "@/services/services-manager";
import store from "@/store/store.js";
import { mapState ,mapGetters} from 'vuex';
export default {
  store,
  components: {
    Group,Cell,XHeader, Confirm, CellBox,XButton,Blur,Actionsheet
  },
  directives: {
    TransferDom
  },
  mounted() {
    if(this.$store.state.offerStateFlag && ( this.UserInfo.offerState == 0 || this.UserInfo.offerState == 2) ){
      this.show = true;
    }else{
      this.show = false;        
    }
    
  },
  data() {
    return {
      show:"",
      actionsShow: false,
      menu: {
        // menu1: '拍照',
        menu2: '选择图片'
      },
    };
  },
  computed: {
    avatar(){
      return this.baseURL + this.UserInfo.avatar;
    },
    ...mapState(['UserInfo']),
    ...mapGetters(['baseURL'])
  },
  methods: {
    //拒绝
    onCancel() {
      this.UserInfo.offerState = 2;
      ServiceManager.UserOfferState(this.UserInfo._id,this.UserInfo.offerState).then(data => {
        console.log(data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.state.offerStateFlag = false;//offer弹窗
          this.$store.commit('setUserInfo',data.data.result);//存store
          this.$router.replace("/home");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "warn"
          });
        }
      });
    },
    //接受
    onConfirm() {
      this.UserInfo.offerState = 1;
      ServiceManager.UserOfferState(this.UserInfo._id,this.UserInfo.offerState).then(data => {
        console.log(data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.state.offerStateFlag = false;//offer弹窗    
          this.$store.commit('setUserInfo',data.data.result);//存store
          this.$router.replace("/home");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "warn"
          });                  
        }
      });
    },
    //图片
    handleSelectAction (key) {
      let self = this;
      navigator.camera.getPicture(
        data => {
          self.$vux.loading.show({
            text: '上传中'
          })
          var ft = new FileTransfer();
          ft.upload(
            data,
            // 'http://192.168.88.255:3000/upload/uploadFace',
            this.baseURL + 'upload/uploadFace',
            r => {
              console.log("成功",r.response)
              alert("成功",r.response)
              self.$vux.loading.hide();
              this.$store.commit('setUserInfo',JSON.parse(r.response).result);
              self.$vux.toast.show({
                text: '更换头像成功',
                type: 'success'
              });
            },
            error => {
              // alert("失败",)
              self.$vux.loading.hide();
              self.$vux.toast.show({
                text: '更换头像失败',
                type: 'warn'
              });
            },
            {
              params: {
                id: self.UserInfo._id
              }
            }
          );
        },
        error => {
          alert("失败原因",error)
        },
        {
          quality: 20,
          sourceType:
            key == 'menu1'
              ? Camera.PictureSourceType.CAMERA
              : Camera.PictureSourceType.SAVEDPHOTOALBUM,
          correctOrientation: true
        })
    },
    // cameraTakePicture(sourcePhoto,edit,userid) {
    //     navigator.camera.getPicture(onSuccess, onFail, { 
    //         quality: 50,// 	数值型，用从0到100%的百分比来控制图像的质量，100表示不经过压缩
    //         sourceType : sourcePhoto,//数值型，指明图像来源。可能值有Camera.PictureSourceType.CAMERA(默认值)，或者Camera.PictureSourceType.PHOTOLIBRARY、Camera.PictureSourceType.SAVEDPHOTOALBUM。选项的行为会根据应用运行的平台不同而不同，像有些平台没有photo libraries或photo albums。
    //         allowEdit : edit,//布尔值，照片在返回Cordova应用之前用户是否可以编辑，但并不是所有移动平台都支持。
    //         encodingType : Camera.EncodingType.JPEG,//数值型，指明图像输出格式。Camera.EncodingType.JPEG让API返回JPEG图像。
    //         targetWdith : 100,//数值型，用来设定获得的图像的高度。
    //         targetHeight : 100,
    //         popoverOptions : CameraPopoverOptions,
    //         saveToPhotoAlbum : false,//布尔值，指示API在拍照后把图像保存到设备照片相册中。
    //     });
    
    //     function onSuccess(imageData) {
    //       alert(imageData);
    //       var ft = new FileTransfer();
    //       ft.upload(
    //         imageData,
    //         'http://192.168.88.255:3000/upload/uploadFace',
    //         r => {
    //           alert(r.response)
    //         },
    //         error => {
    //           alert(error.code)
    //         },
    //         {
    //           params: {
    //             id: userid
    //           }
    //         }
    //       );
    //     }
    
    //     function onFail(message) {
    //       alert('Failed because: ' + message);
    //     }
    // }
  
  }
};
</script>
<style scoped>
.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>


