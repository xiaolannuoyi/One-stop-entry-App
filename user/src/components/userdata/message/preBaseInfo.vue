<template>
  <div>
    <group>
      <x-input title="身份ID" v-model="preBaseInfo.idCard"  :required="true" text-align="right" :max="18">
          <div slot="label"><span class="req">*</span>身份ID</div>
      </x-input>
      <x-input title="移动电话" v-model="preBaseInfo.tel" :required="true" is-type="china-mobile" :max="11" text-align="right">
          <div slot="label"><span class="req">*</span>移动电话</div>
      </x-input> 
      <x-input title="电子邮件" v-model="preBaseInfo.email" :required="true" is-type="email" text-align="right">
          <div slot="label"><span class="req">*</span>电子邮件</div>
      </x-input>     
      <!-- <selector title="性别" v-model="preBaseInfo.sex" :options="preSelector.sex" direction="rtl" :required="true"></selector> -->
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
          <!-- <div slot="label"><span class="req">*</span>紧急联系人</div>           -->
      </x-input>
      <x-input title="紧急联系方式" v-model="preBaseInfo.urgentTel" is-type="china-mobile" :max="11" :required="true" text-align="right">
          <!-- <div slot="label"><span class="req">*</span>紧急联系方式</div>           -->
      </x-input>
    </group>
    
      <div>
          <span class="reqwarn" >注意：带*为必填项，请填写完整并且正确的信息！</span>
      </div>
        <x-button  v-if="preBaseInfo.user == null" type="primary" @click.native="confirm">提交</x-button>
        <x-button  v-else type="primary" @click.native="edit">提交更改</x-button>
    
  </div>
</template>

<script>
import ServiceManager from '@/services/services-manager';
import preSelectorlist from 'static/models/preSelector.js'
import { PopupPicker,Group,Selector,XInput,XAddress,Datetime,XButton, ChinaAddressV4Data } from 'vux'
import { mapState } from 'vuex';

export default {
    components: {
        PopupPicker,Group,Selector,XInput,XAddress,Datetime,XButton
    },
    mounted(){
        this.getpreBaseInfo();
    },
    data(){
        return{
            address:ChinaAddressV4Data,
            preSelector:preSelectorlist,
            postData:{},//提交的数据
        }
    
    },
    computed: {
        // preBaseInfo() {
        //     return this.preBaseInfo;
        // },
        ...mapState(['preBaseInfo','UserInfo'])
    },
    methods:{
        getpreBaseInfo(){
            this.$vux.loading.show({
                text: 'Loading'
            })
            console.log("userid",this.UserInfo._id);
            
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
            
            this.$store.commit('setpreBaseInfo',predata);
            console.log("store",this.preBaseInfo)
        },
        //提交到数据库的数据
        primaryData(){
            // 类型转换
            this.postData = {};
            let predata ={};
            
            predata.tel = this.preBaseInfo.tel ;
            predata.idCard = this.preBaseInfo.idCard ;//身份ID n
            predata.email=this.preBaseInfo.email ;
            predata.urgentPeo=this.preBaseInfo.urgentPeo ;//紧急联系人
            predata.urgentTel = this.preBaseInfo.urgentTel ;//紧急联系方式

            predata.secuArea = (this.preBaseInfo.secuArea=='')? '': this.preBaseInfo.secuArea.join('');//缴纳社保地区
            predata.sex = (this.preBaseInfo.sex== '')? '': this.preBaseInfo.sex.join(''); //性别 
            predata.nation = (this.preBaseInfo.nation== '')? '':  this.preBaseInfo.nation.join('');//民族
            predata.location = (this.preBaseInfo.location== '')? '':  this.preBaseInfo.location.join(''); //国籍
            predata.plocitical = (this.preBaseInfo.plocitical== '')? '':  this.preBaseInfo.plocitical.join(''); //政治面貌
            predata.marital = (this.preBaseInfo.marital== '')? '':  this.preBaseInfo.marital.join('');//婚姻状况
            predata.eduHighest = (this.preBaseInfo.eduHighest== '')? '':  this.preBaseInfo.eduHighest.join('');//最高学历
            predata.bgSurvey = (this.preBaseInfo.bgSurvey== '')? '':  this.preBaseInfo.bgSurvey.join('');//背景调查
            predata.bodyState = (this.preBaseInfo.bodyState== '')? '':  this.preBaseInfo.bodyState.join('');//身体状况
            predata.medical = (this.preBaseInfo.medical== '')? '':  this.preBaseInfo.medical.join('');//既往病史
            predata.hered = (this.preBaseInfo.hered== '')? '':  this.preBaseInfo.hered.join('');//重大疾病以及遗传病
            predata.hkType = (this.preBaseInfo.hkType== '')? '':  this.preBaseInfo.hkType.join('');//户口性质
            predata.secuRi = (this.preBaseInfo.secuRi== '')? '':  this.preBaseInfo.secuRi.join('');//是否缴纳过社保 

            predata.oriPlace = this.preBaseInfo.oriPlace ; //籍贯
            predata.nowAdress = this.preBaseInfo.nowAdress ;//现住址
            predata.hkAdress = this.preBaseInfo.hkAdress ;//户口所在地

            predata.graduDate = this.preBaseInfo.graduDate;//毕业日期
            predata.workDate = this.preBaseInfo.workDate;//工作日期
            predata.birthDay = this.preBaseInfo.birthDay; //生日

            predata.user = this.preBaseInfo.user; //id
            predata._id=this.preBaseInfo._id;
            this.postData = predata;
        },
        confirm(){
            this.primaryData()
            console.log("confirm",this.postData)
            // console.log(predata);
            this.$vux.loading.show({
                text: 'Loading'
            })
             ServiceManager.submitPreBaseInfo(this.postData).then(data => {
                console.log(data)
                this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交个人信息成功',
                    type: 'success'
                    });
                    this.changeAndmerory(data.data.result)
                    
                } else {
                    this.$vux.toast.show({
                    text: '提交个人信息失败，请重试',
                    type: 'warn'
                    });
                }
            });
        },
        edit(){
                this.primaryData()
                console.log("edit",this.postData)
                this.$vux.loading.show({
                text: 'Loading'
                })
                ServiceManager.editPreBaseInfo(this.postData).then(data => {
                    console.log(data)
                    this.editbtn = "编辑" 
                    // flag = false;                   
                    this.$vux.loading.hide()
                    if (data.data.code == 200) {
                        this.$vux.toast.show({
                        text: '编辑个人信息成功',
                        type: 'success'
                        });
                        this.changeAndmerory(data.data.result)
                    } else {
                        this.$vux.toast.show({
                        text: '编辑个人信息失败，请重试',
                        type: 'warn'
                        });
                    }
                });
            
        }
    }
}
</script>

<style>

</style>
