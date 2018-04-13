<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
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
        <p style="text-align:center;">11111111111</p>
      </confirm>
    </div>

  </div>
</template>

<script>
import {Group,Cell,XHeader,CellBox,Confirm,XButton,TransferDomDirective as TransferDom} from "vux";
import ServiceManager from "@/services/services-manager";
import store from "@/store/store.js";
export default {
  store,
  components: {
    Group,Cell,XHeader, Confirm, CellBox,XButton
  },
  directives: {
    TransferDom
  },
  mounted() {
    if(this.$store.state.offerStateFlag && ( this.UserInfo.State == 0 || this.UserInfo.State == 2) ){
      this.show = true;
    }else{
      this.show = false;        
    }
    
  },
  data() {
    return {
      show:""
    };
  },
  computed: {
    UserInfo() {
      console.log(this.$store.state.UserInfo);
      
      return this.$store.state.UserInfo;
    },
  },
  methods: {
    onCancel() {
      this.UserInfo.State = 2;
      ServiceManager.UserOfferState(this.UserInfo._id,this.UserInfo.State).then(data => {
        console.log(data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.state.UserInfo = data.data.result; //返回数据存入store
          console.log("store", this.$store.state.UserInfo.State);
          this.$router.push("/home");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "success"
          });
        }
      });
    },
    onConfirm() {
      this.UserInfo.State = 1;
      ServiceManager.UserOfferState(this.UserInfo._id,this.UserInfo.State).then(data => {
        console.log(data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.state.UserInfo = data.data.result; //返回数据存入store
          console.log("store", this.$store.state.UserInfo);
          this.$router.push("/home");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "success"
          });
        }
      });
    }
  }
};
</script>
<style>

</style>


