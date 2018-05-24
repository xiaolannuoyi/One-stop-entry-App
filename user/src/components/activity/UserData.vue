<template>
  <div>
    <!-- header -->
    <x-header :left-options="{showBack: false}">填写</x-header>
    <!-- content -->
    <group>
        <cell title="修改密码" link="/userdata/message/changePassword"></cell>
        <cell title="个人信息" link="/userdata/message/step"></cell>
        <cell title="资料上传" link="/userdata/imagefile/fileStep/IDCard"></cell>
    </group>
    <group title="当所有必填信息都填写完毕后，方可点击此按钮" style="margin-top:20px;">
        <x-button type="primary" style="margin-top:0;" :disabled="disable" @click.native="confirmCherk">发送给HR进行审核</x-button>
    </group>
   </div> 
</template>

<script>
import ServiceManager from "@/services/services-manager";
import { XButton,XHeader,Group,Cell } from 'vux'
import { mapState ,mapGetters} from 'vuex';
export default {
  components: {
    XHeader,Group,Cell,XButton
  },
  data(){
      return{
      }
  },
  mounted(){
    this.getimg();
    this.getpreBaseInfo();
    this.getbankcard()
  },
  computed: {
    ...mapState(['image','UserInfo','preBaseInfo','bankcard']),
    disable(){
      console.log("11111111111111",this.preBaseInfo)
      let result = false;
      for(let key in this.preBaseInfo){
          if(key === 'urgentPeo' || key === 'urgentTel' || key === 'user' || key === '_id'){
            console.log("2222222")
            continue
          }
          if(this.preBaseInfo[key] === '' || this.preBaseInfo[key].length === 0){
            console.log("true")
               result = true;

          }
          
      }
      for(let key in this.bankcard){
          if(this.bankcard[key] === ''){
              result = true;
          }
      }
      if(this.image.IDface==='uploads/ID-face-card.png'){
          result = true;
      }
      if(this.image.IDback==='uploads/ID-back-card.png'){
          result = true;
      }
      if(this.image.oneph==='uploads/one-inch-photo.png'){
          result = true;
      }
      if(!((this.image.Diploma!=='uploads/ID-face-card.png' && this.image.degree!=='uploads/certificate-card.png') || this.image.StudentID!=='uploads/student-card.png')){
          result = true;
      }
    console.log(result + "---------------------")
      return result;
    }
  },
  methods:{
    getpreBaseInfo(){
            console.log("userid",this.UserInfo._id);
            this.$vux.loading.show({
                text: 'Loading'
            })
             ServiceManager.findPreBaseInfo(this.UserInfo._id).then(data => {
                this.$vux.loading.hide()
                if(data.data.result ==null){
                    console.log("null");
                    this.changeAndmerory(data.data.result)
                }else{
                    console.log("yes");
                    // 类型转换
                    console.log("data.data.result",data.data.result)
                    this.changeAndmerory(data.data.result)
                }
                
            });
        },
        //数据库返回数据进行类型转换，并存入store
        changeAndmerory(returnData){
                let predata ={
                    email:'',
                    urgentPeo:'',//紧急联系人
                    urgentTel:'',//紧急联系方式
                    tel:'',                
                    idCard:'',//身份ID n

                    secuArea:[],//缴纳社保地区
                    sex:[], //性别 
                    nation:[],//民族
                    location:[], //国籍
                    plocitical:[], //政治面貌
                    marital:[],//婚姻状况
                    eduHighest:[],//最高学历
                    bgSurvey:[],//背景调查
                    bodyState:[],//身体状况
                    medical:[],//既往病史
                    hered:[],//重大疾病以及遗传病
                    hkType:[],//户口性质
                    secuRi:[],//是否缴纳过社保 

                    oriPlace:[], //籍贯                
                    nowAdress:[],//现住址
                    hkAdress:[],//户口所在地

                    graduDate:'',//毕业日期
                    workDate:'',//工作日期
                    birthDay:'', //生日
                }
            if(returnData !== null ){
                predata.tel =  returnData.tel.toString();
                predata.idCard = returnData.idCard ;//身份ID n
                predata.email=returnData.email ;
                predata.urgentPeo=returnData.urgentPeo ;//紧急联系人
                predata.urgentTel = returnData.urgentTel ;//紧急联系方式

                predata.secuArea.push(returnData.secuArea ==null?'': returnData.secuArea.toString());//缴纳社保地区
                predata.sex.push( returnData.sex ==null?'': returnData.sex.toString()); //性别 
                predata.nation.push( returnData.nation ==null?'':  returnData.nation.toString());//民族
                predata.location.push( returnData.location ==null?'':  returnData.location.toString()); //国籍
                predata.plocitical.push( returnData.plocitical ==null?'':  returnData.plocitical.toString()); //政治面貌
                predata.marital.push( returnData.marital ==null?'':  returnData.marital.toString());//婚姻状况
                predata.eduHighest.push( returnData.eduHighest ==null?'':  returnData.eduHighest.toString());//最高学历
                predata.bgSurvey.push( returnData.bgSurvey ==null?'':  returnData.bgSurvey.toString());//背景调查
                predata.bodyState.push( returnData.bodyState ==null?'':  returnData.bodyState.toString());//身体状况
                predata.medical.push( returnData.medical ==null?'':  returnData.medical.toString());//既往病史
                predata.hered.push( returnData.hered ==null?'':  returnData.hered.toString());//重大疾病以及遗传病
                predata.hkType.push( returnData.hkType ==null?'':  returnData.hkType.toString());//户口性质
                predata.secuRi.push( returnData.secuRi ==null?'':  returnData.secuRi.toString());//是否缴纳过社保 

                predata.oriPlace = returnData.oriPlace ; //籍贯
                predata.nowAdress = returnData.nowAdress ;//现住址
                predata.hkAdress = returnData.hkAdress ;//户口所在地

                predata.graduDate = returnData.graduDate;//毕业日期
                predata.workDate = returnData.workDate;//工作日期
                predata.birthDay = returnData.birthDay; //生日

                predata._id = returnData._id; //生日
                predata.user = returnData.user; //userid

            }
            
            this.$store.commit('setpreBaseInfo',predata);
            console.log("preBaseInfo",this.preBaseInfo)
        },
    getimg(){
        this.$vux.loading.show({
                text: 'Loading'
            })
      ServiceManager.findImg(this.UserInfo._id).then( data =>{
          this.$vux.loading.hide()          
        console.log("image",data);
        this.$store.commit('setImage',data.data.result);
        console.log("store",this.image)
      })
    },
    getbankcard(){
        this.$vux.loading.show({
                text: 'Loading'
            })
             ServiceManager.findbankcard(this.UserInfo._id).then(data => {
          this.$vux.loading.hide()                 
                this.$vux.loading.hide()                 
                if(data.data.result ==null){
                    console.log("null");
                    let newbankcard={
                        sPfaccount:'',//账户名
                        sPfid:'',//身份证号码
                        sPfcardNum:'',//卡号
                        sPfopenban:'',//开户行名称
                        sPfopCity:''//开户城市
                    }
                    this.$store.commit('setbankcard',newbankcard);//返回数据存入store
                    console.log("bankcard",this.bankcard)
                }else{
                    console.log("yes");
                    this.$store.commit('setbankcard',data.data.result);//返回数据存入store
                    console.log("bankcard",this.bankcard)
                }
                
            });
        },
    confirmCherk(){
        this.$vux.loading.show({
                text: 'Loading'
            })
       ServiceManager.confirmCherk(this.UserInfo._id).then(data => {
        console.log(data);
          this.$vux.loading.hide()        
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: "提交成功",
            type: "success"
          });
          this.$store.commit('setofferStateFlag',false);//offer弹窗
          this.$store.commit('setcheckProgress',data.data.result);//存store
          this.$router.replace("/home/check");
        } else {
          this.$vux.toast.show({
            text: "提交失败，请重试",
            type: "warn"
          });
        }
      });
    }
  }
}
</script>
<style>

</style>
