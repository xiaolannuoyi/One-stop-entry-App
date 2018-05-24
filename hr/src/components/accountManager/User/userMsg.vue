<template>
  <div>
    <!-- header -->
    <x-header @on-click-back="back">用户信息</x-header>
    <!-- content -->
    <group >
      <x-input title="姓名" :disabled="disabled" ref="Name" v-model="userData.Name" :required="true" text-align="right"></x-input>
      <x-input title="手机号码" :disabled="disabled" ref="Tel" v-model="userData.Tel" keyboard="number" is-type="china-mobile" :max="11" :required="true" text-align="right"></x-input>
      <popup-picker title="地点" :disabled="disabled" :data="list.addresslist" v-model="userData.Address" :columns="2" value-text-align="right" show-name></popup-picker>
      <popup-picker title="部门" :disabled="disabled" :data="list.Departmentlist" v-model="userData.Department"  :columns="2" value-text-align="right" show-name></popup-picker>
      <calendar title="入职时间" :readonly="disabled" ref="EntryTime" v-model="userData.EntryTime" 
      :start-date="startDate"
      :end-date="endDate"
      :show-last-month="showLastMonth=false"
      :show-next-month="showNextMonth=false"
      :return-six-rows="return6Rows=false"
      :disable-past="disablePast=false"
      :disable-weekend="disableWeekend=true"></calendar>
    </group>
    <group>
      <x-button type="warn" @click.native="ResetPasswordShow = true">重置密码</x-button>
    </group>
    <flexbox>
        <flexbox-item>
          <x-button type="warn" @click.native="del">删除</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" @click.native="edit" v-if="editNum==1">编辑</x-button>
          <x-button type="primary" @click.native="Submit" :disabled="canGo || btndisable" v-else>提交</x-button>
        </flexbox-item>
    </flexbox>

    <div v-transfer-dom>
      <confirm v-model="show" title="确认删除" @on-confirm="onConfirm">
        <p style="text-align:center;">删除用户所有信息，删除不可恢复</p>
      </confirm>
    </div>

       <confirm v-model="ResetPasswordShow"
      title="重置密码"
      @on-cancel="ResetPasswordShow = false"
      @on-confirm="ConfirmResetPassword">
        <p style="text-align:center;">密码重置为手机号后六位，确定重置密码么。</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XHeader, CellBox, XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,Confirm,Calendar,TransferDomDirective as TransferDom} from 'vux'
import ServiceManager from '@/services/services-manager';
import compass from 'static/compass.js';

export default {
  components: {
    Group,Cell, XHeader,CellBox,XInput,PopupPicker,XSwitch,XButton,Flexbox, FlexboxItem,Confirm,Calendar
  },
  directives: {
    TransferDom
  },
  data () {
      return {
        ResetPasswordShow:false,
        userData: {
          Name: "",//姓名
          Tel: "",//电话
          Password: "",//密码，默认为电话后六位
          Address: [],//工作地区
          Department:[],//部门
          EntryTime:"",//入职时间
        },
        list:compass,
        btndisable: true,
        startDate:"",
        endDate:"",
        disabled:true,
        editNum:1,
        show:false,
        btndisable:true,
      }
    },
    mounted(){
      this.getData()
    },
    computed:{
      canGo() {
        if(this.userData.Name !='' && this.userData.Tel !="" && this.userData.EntryTime !=''&&
          this.$refs.Name.valid && this.$refs.Tel.valid){
            this.btndisable=false;
        }else{
            this.btndisable=true;
        }
      },
    },
    methods:{
        back(){
          this.$router.replace("/user");
        },
        getData(){
          console.log("router",this.$route.params)
          this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.findUserOne(this.$route.params.id).then(data => {
          console.log("data",data)
          this.$vux.loading.hide()          
          if(data.data.code == 200){
              let result = data.data.result;
              this.userData.Name = result.Name;
              this.userData.Tel = result.Tel.toString();
              this.userData.Address.push(result.Address);
              this.userData.Department.push(result.Department);
              this.userData.EntryTime = result.EntryTime;
              console.log("result",result);
              console.log("this.userdata",this.userData);
            }
          })
        },
        del(){
          this.show=true;
        },
        onConfirm(){
          this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.UserDel(this.$route.params.id).then(data => {
            console.log("del",data);
          this.$vux.loading.hide()                      
            if (data.data.code == 200) {
              this.$vux.toast.show({
                text: '删除成功',
                type: 'success'
              });
              this.$router.replace('/user');
            } else {
              this.$vux.toast.show({
                text: '删除失败，请重试',
                type: 'success'
              });
            }
          });
        },
        edit(){
          this.disabled = false;
          this.editNum++;
          console.log("this.edit",this.editNum);
        },
        Submit(){
          this.editNum =1
          this.disabled = true;
          console.log("this.edit",this.editNum);
          this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.UserEdit(this.$route.params.id,this.userData).then(data => {
            console.log("edit",data);
          this.$vux.loading.hide()                      
            if (data.data.code == 200) {
              this.$vux.toast.show({
                text: '编辑成功',
                type: 'success'
              });
              this.$router.replace('/user');
            } else {
              this.$vux.toast.show({
                text: '编辑失败，请重试',
                type: 'success'
              });
            }

          });
        },
        ConfirmResetPassword(){
          let password = this.userData.Tel.slice(5);
          console.log(password);
          this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.hrResetPassword(this.$route.params.id,password).then(data => {
            console.log(data)
            this.$vux.loading.hide()                      
            if (data.data.code == 200) {
              this.$vux.toast.show({
                text: '重置密码成功',
                type: 'success'
              });
            } else {
              this.$vux.toast.show({
                text: '重置密码失败，请重试',
                type: 'success'
              });
            }
          });
        }


    }
}
</script>
<style>

</style>


