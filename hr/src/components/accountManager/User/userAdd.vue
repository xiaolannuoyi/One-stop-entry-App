<template>
  <div style="margin-top:44px;">
    <group> 
      <x-input title="姓名"  ref="Name" v-model="userData.Name" :required="true" text-align="right"></x-input>
      <x-input title="手机号码" ref="Tel" v-model="userData.Tel" keyboard="number" is-type="china-mobile" :max="11" :required="true" text-align="right"></x-input>
      <popup-picker title="地点" :data="list.addresslist" v-model="userData.Address" :columns="2" value-text-align="right" show-name></popup-picker>
      <popup-picker title="部门" :data="list.Departmentlist" v-model="userData.Department"  :columns="2" value-text-align="right" show-name></popup-picker>
      <calendar title="入职时间" ref="EntryTime" v-model="userData.EntryTime" 
      :start-date="startDate"
      :end-date="endDate"
      :show-last-month="showLastMonth=false"
      :show-next-month="showNextMonth=false"
      :return-six-rows="return6Rows=false"
      :disable-past="disablePast=false"
      :disable-weekend="disableWeekend=true"></calendar>
    </group>
    <group>
      <x-button type="primary" :disabled="canGo || btndisable" @click.native="userRegist">提交</x-button>
    </group>
    
  </div>
</template>

<script>
  import { Group, XInput,PopupPicker,XSwitch,XButton,Calendar } from 'vux'
  import ServiceManager from '@/services/services-manager';
  import compass from 'static/compass.js';
  import {mapState} from 'vuex'
  export default {
    components: {
      Group, XInput,PopupPicker,XSwitch,XButton,Calendar
    },
    data () {
      return {
        userData: {
          Name: "",//姓名
          Tel: "",//电话
          Password: "",//密码，默认为电话后六位
          Address: [],//工作地区
          Department:[],//部门
          EntryTime:"",//入职时间
        },
        // addresslist: [["北京","上海"]],
        // Departmentlist:[["java","php"]],
        list:compass,
        btndisable: true,
        startDate:"",
        endDate:"",

      }
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
      ...mapState(['HrInfo']),
    },
    methods:{
      userRegist(){
        this.$vux.loading.show({
                text: 'Loading'
            })
        this.userData.Password = this.userData.Tel.slice(5);
        this.userData.Address.toString();
        ServiceManager.userRegist(this.userData).then(data => {
          console.log(data)
          this.$vux.loading.hide()          
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '注册成功',
              type: 'success'
            });
            this.$router.replace('/user');
          }else{
            this.$vux.toast.show({
              text: '注册失败',
              type: 'warn'
            });
          }
        });
      },
      setToday () {
        let now = new Date()
        let cmonth = now.getMonth() + 1
        let day = now.getDate()
        if (cmonth < 10) cmonth = '0' + cmonth
        if (day < 10) day = '0' + day
        this.startDate = now.getFullYear() + '-' + cmonth + '-' + day
        this.endDate = now.getFullYear()+1 + '-' + cmonth + '-' + day
        console.log(this.startDate)
        console.log(this.endDate)
      },
    },
    mounted(){
      this.setToday();
      this.userData.Address.push(this.HrInfo.Address);
      console.log(this.userData.Address)
    },
}
  
</script>