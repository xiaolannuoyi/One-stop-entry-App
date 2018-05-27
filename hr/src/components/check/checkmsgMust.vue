<template>
  <div>
      <!-- 基本信息 -->
      <group title="基本信息" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input title="身份ID" v-model="preBaseInfo.idCard"  :required="true" text-align="right" :max="18">
          <div slot="label"><span class="req">*</span>身份ID</div>
      </x-input>
      <x-input title="移动电话" v-model="preBaseInfo.tel" :required="true"  text-align="right">
          <div slot="label"><span class="req">*</span>移动电话</div>
      </x-input> 
      <x-input title="电子邮件" v-model="preBaseInfo.email" :required="true"  text-align="right">
          <div slot="label"><span class="req">*</span>电子邮件</div>
      </x-input>     
      <popup-picker title="性别" v-model="preBaseInfo.sex" :data="preSelector.sex" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>性别</div>
      </popup-picker>
      <datetime v-model="preBaseInfo.birthDay">
          <div slot="title"><span class="req">*</span>生日</div>
      </datetime>
      <popup-picker title="民族" v-model="preBaseInfo.nation" :data="preSelector.nation" :columns="4" show-name>
          <div slot="title"><span class="req">*</span>民族</div>
      </popup-picker>
      <popup-picker title="国籍" v-model="preBaseInfo.location" :data="preSelector.location" :columns="4" show-name>
          <div slot="title"><span class="req">*</span>国籍</div>          
      </popup-picker>

      <x-address title="籍贯" v-model="preBaseInfo.oriPlace" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">籍贯</span>
            </span>
        </template>
      </x-address>
      <popup-picker title="政治面貌" v-model="preBaseInfo.plocitical" :data="preSelector.plocitical" :columns="4" show-name>
          <div slot="title"><span class="req">*</span>政治面貌</div>                    
      </popup-picker>
      <popup-picker title="婚姻状况" v-model="preBaseInfo.marital" :data="preSelector.marital" :columns="4" show-name>
          <div slot="title"><span class="req">*</span>婚姻状况</div>                    
      </popup-picker>
      <popup-picker title="最高学历" v-model="preBaseInfo.eduHighest" :data="preSelector.eduHighest" :columns="4" show-name>
          <div slot="title"><span class="req">*</span>最高学历</div>                    
      </popup-picker>
 
      <datetime  title="毕业日期" v-model="preBaseInfo.graduDate" >
          <div slot="title"><span class="req">*</span>毕业日期</div>          
      </datetime>
      <datetime  title="工作日期" v-model="preBaseInfo.workDate" >
          <div slot="title"><span class="req">*</span>工作日期</div>          
      </datetime>
      <popup-picker title="背景调查" v-model="preBaseInfo.bgSurvey" :data="preSelector.bgSurvey" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>背景调查</div>                    
      </popup-picker>
      <!-- <selector title="背景调查" v-model="preBaseInfo.bgSurvey" :options="preSelector.bgSurvey" direction="rtl" :required="true"></selector> -->
      <x-address title="现住址" v-model="preBaseInfo.nowAdress" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">现住址</span>
            </span>
        </template> 
      </x-address>
      <popup-picker title="身体状况" v-model="preBaseInfo.bodyState" :data="preSelector.bodyState" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>身体状况</div>                    
      </popup-picker>
      <popup-picker title="既往病史" v-model="preBaseInfo.medical" :data="preSelector.medical" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>既往病史</div>                    
      </popup-picker>
      <popup-picker title="重大疾病以及遗传病" v-model="preBaseInfo.hered" :data="preSelector.hered" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>重大疾病以及遗传病</div>                    
      </popup-picker>

      <popup-picker title="户口性质" v-model="preBaseInfo.hkType" :data="preSelector.hkType" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>户口性质</div>          
      </popup-picker>      
      <x-address title="户口所在地" v-model="preBaseInfo.hkAdress" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">户口所在地</span>
            </span>
        </template>                   
      </x-address>
      <popup-picker title="是否缴纳过社保" v-model="preBaseInfo.secuRi" :data="preSelector.secuRi" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>是否缴纳过社保</div>                    
      </popup-picker>
      <popup-picker title="缴纳社保地区" v-model="preBaseInfo.secuArea" :data="preSelector.secuArea" :columns="2" show-name>
          <div slot="title"><span class="req">*</span>缴纳社保地区</div>                    
      </popup-picker>

      <x-input title="紧急联系人" v-model="preBaseInfo.urgentPeo" :required="true" text-align="right">
      </x-input>
      <x-input title="紧急联系方式" v-model="preBaseInfo.urgentTel" :required="true" text-align="right">
      </x-input>
    </group>
    <!-- 银行卡信息 -->
    <group title="银行卡信息--" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input title="账户名" v-model="ZSbankcard.sPfaccount" type="text"  :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>账户名</div>
      </x-input>
      <x-input title="身份证号码" v-model="ZSbankcard.sPfid" type="number" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>身份证号码</div>          
      </x-input>
      <x-input title="卡号" v-model="ZSbankcard.sPfcardNum" type="number" :min="16" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>卡号</div>          
      </x-input>
      <x-input title="开户行名称" v-model="ZSbankcard.sPfopenban" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户行名称</div>          
      </x-input>
      <x-input title="开户城市" v-model="ZSbankcard.sPfopCity" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户城市</div>          
      </x-input>
    </group>
    <!-- 图片信息 -->
    <group title="银行卡信息--招商银行" label-width="5.5em" label-margin-right="2em" label-align="justify">
      <x-input title="账户名" v-model="ZSbankcard.sPfaccount" type="text"  :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>账户名</div>
      </x-input>
      <x-input title="身份证号码" v-model="ZSbankcard.sPfid" type="number" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>身份证号码</div>          
      </x-input>
      <x-input title="卡号" v-model="ZSbankcard.sPfcardNum" type="number" :min="16" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>卡号</div>          
      </x-input>
      <x-input title="开户行名称" v-model="ZSbankcard.sPfopenban" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户行名称</div>          
      </x-input>
      <x-input title="开户城市" v-model="ZSbankcard.sPfopCity" type="text" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>开户城市</div>          
      </x-input>
    </group>
    <!-- 图片信息 -->
    <group title="身份证电子文件">
        <cell title="正面"></cell>
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.IDface">
        </div>
        <cell title="反面"></cell>
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.IDback">
        </div>
    </group>
    <group title="一寸照上传">
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.oneph">
        </div>
    </group>
    
    <group title="学生证" v-if="this.img.StudentID !=='uploads/student-card.png' ">
        <cell title="学生证"></cell>
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.StudentID" >
        </div>
    </group>
    <group title="学历证书上传" v-else>
        <cell title="毕业证"></cell>
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.Diploma">
        </div>
        <cell title="学位证"></cell>
        <div class="uploadBox">
            <img width="100%" :src="this.baseURL +this.img.degree">
        </div>
    </group>
  </div>
</template>

<script>
import {  Cell,PopupPicker,Group,Selector,XInput,XAddress,Datetime,XButton, ChinaAddressV4Data } from 'vux'
import preSelectorlist from 'static/preSelector.js'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
    components: {
         Cell,PopupPicker,Group,Selector,XInput,XAddress,Datetime,XButton, ChinaAddressV4Data
    },
    computed:{
        ...mapState(['usercheckData']),
        ...mapGetters(['baseURL']),
        userid(){
            return this.$route.params.id;
        }
    },
    mounted() {
        // 调用请求数据的方法
        console.log('must id',this.userid);
        console.log('this.usercheckData',this.usercheckData)
        this.getdata()
        
    },
    data () {
        return {
            preBaseInfo:[],
            ZSbankcard:[],
            address:ChinaAddressV4Data,
            preSelector:preSelectorlist,
            img:[]
        }
    },
    methods:{
        getdata(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            ServiceManager.findusercheckMsg(this.userid).then(data => {
                console.log(data)
                this.$vux.loading.hide()                
                if(data.data.code == 200){
                    let result = data.data.result;
                    this.$store.commit('setusercheckData',{userid:this.userid,userdata:result})
                    console.log('result',result);
                    console.log('this.usercheckData.id',this.usercheckData[this.userid]);
                    //this.preBaseInfo = this.usercheckData[this.userid][1];
                    this.changeAndmerory(this.usercheckData[this.userid][1])
                    this.ZSbankcard = this.usercheckData[this.userid][2];
                    this.img= this.usercheckData[this.userid][7];

                }else{

                }
            })
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
                predata.tel =  returnData.tel;
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
            this.preBaseInfo=predata;
        },
    }
}
</script>

<style>

</style>
