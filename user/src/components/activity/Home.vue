<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <blur :blur-amount=40 :url="avatar">
      <p class="center"><img :src="avatar" @click="actionsShow = true"></p>
    </blur>

    <!-- <group>
      <cell title="姓名" :value="UserInfo.Name"></cell>
      <cell title="电话" :value="UserInfo.Tel"></cell>
      <cell title="地区" :value="UserInfo.Address"></cell>
      <cell title="部门" :value="UserInfo.Department"></cell>
      <cell title="入职时间" :value="UserInfo.EntryTime"></cell>
    </group> -->
    <group >
      <x-input title="姓名" :disabled="true" ref="Name" v-model="UserInfo.Name" :required="true" text-align="right"></x-input>
      <x-input title="手机号码" :disabled="true" ref="Tel" v-model="UserInfo.Tel" keyboard="number" is-type="china-mobile" :max="11" :required="true" text-align="right"></x-input>
      <popup-picker title="地点" :disabled="true" :data="list.addresslist" v-model="UserInfo.Address" :columns="2" value-text-align="right" show-name></popup-picker>
      <popup-picker title="部门" :disabled="true" :data="list.Departmentlist" v-model="UserInfo.Department"  :columns="2" value-text-align="right" show-name></popup-picker>
      <calendar title="入职时间" :readonly="true" ref="EntryTime" v-model="UserInfo.EntryTime" 
      :start-date="startDate"
      :end-date="endDate"
      :show-last-month="showLastMonth=false"
      :show-next-month="showNextMonth=false"
      :return-six-rows="return6Rows=false"
      :disable-past="disablePast=false"
      :disable-weekend="disableWeekend=true"></calendar>
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
import { Group, Cell, XHeader, CellBox, XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,Confirm,Blur,Actionsheet,Calendar,TransferDomDirective as TransferDom} from 'vux'
import ServiceManager from "@/services/services-manager";
import { mapState ,mapGetters} from 'vuex';
import compass from 'static/models/compass.js';
export default {
  components: {
    Group, Cell, XHeader, CellBox, XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,Confirm,Blur,Actionsheet,Calendar
  },
  directives: {
    TransferDom
  },
  mounted() {
    if(this.offerStateFlag && ( this.UserInfo.offerState == 0 || this.UserInfo.offerState == 2) ){
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
        menu1: '拍照',
        menu2: '选择图片'
      },
      list:compass,
    };
  },
  computed: {
    avatar(){
      return this.baseURL + this.UserInfo.avatar;
    },
    ...mapState(['UserInfo','offerStateFlag']),
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
          this.$store.commit('setofferStateFlag',false);//offer弹窗
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
          this.$store.commit('setofferStateFlag',false);//offer弹窗 
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
          console.log("imagedata",data)
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


