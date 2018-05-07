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
      <selector title="性别" v-model="preBaseInfo.sex" :options="preSelector.sex" direction="rtl" :required="true"></selector>
      <datetime v-model="preBaseInfo.birthDay">
          <div slot="title"><span class="req">*</span>生日</div>
      </datetime>
      <selector title="民族" v-model="preBaseInfo.nation" :options="preSelector.nation" direction="rtl" :required="true"></selector>
      <selector title="国籍" v-model="preBaseInfo.location" :options="preSelector.location" direction="rtl" :required="true"></selector>
      <x-address title="籍贯" v-model="preBaseInfo.oriPlace" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">籍贯</span>
            </span>
        </template>
      </x-address>
      <selector title="政治面貌" v-model="preBaseInfo.plocitical" :options="preSelector.plocitical" direction="rtl" :required="true"></selector>
      <selector title="婚姻状况" v-model="preBaseInfo.marital" :options="preSelector.marital" direction="rtl" :required="true"></selector>
      <selector title="最高学历" v-model="preBaseInfo.eduHighest" :options="preSelector.eduHighest" direction="rtl" :required="true"></selector>
      <datetime  title="毕业日期" v-model="preBaseInfo.graduDate" >
          <div slot="title"><span class="req">*</span>毕业日期</div>          
      </datetime>
      <datetime  title="工作日期" v-model="preBaseInfo.workDate" >
          <div slot="title"><span class="req">*</span>工作日期</div>          
      </datetime>
      <selector title="背景调查" v-model="preBaseInfo.bgSurvey" :options="preSelector.bgSurvey" direction="rtl" :required="true"></selector>
      <x-address title="现住址" v-model="preBaseInfo.nowAdress" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">现住址</span>
            </span>
        </template> 
      </x-address>

      <selector title="身体状况" v-model="preBaseInfo.bodyState" :options="preSelector.bodyState" direction="rtl" :required="true"></selector>
      <selector title="既往病史" v-model="preBaseInfo.medical" :options="preSelector.medical" direction="rtl" :required="true"></selector>
      <selector title="重大疾病以及遗传病" v-model="preBaseInfo.hered" :options="preSelector.hered" direction="rtl" :required="true"></selector>

      <selector title="户口性质" v-model="preBaseInfo.hkType" :options="preSelector.hkType" direction="rtl" :required="true"></selector>
      <x-address title="户口所在地" v-model="preBaseInfo.hkAdress" :list="address"  :required="true">
          <template slot="title" slot-scope="props">
            <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
            <span class="req" style="vertical-align:middle;">*</span>
            <span style="vertical-align:middle;">户口所在地</span>
            </span>
        </template>                   
      </x-address>


      <selector title="是否缴纳过社保" v-model="preBaseInfo.secuRi" :options="preSelector.secuRi" direction="rtl" :required="true"></selector>
      <selector title="缴纳社保地区" v-model="preBaseInfo.secuArea" :options="preSelector.secuArea" direction="rtl" :required="true"></selector>
    
      <x-input title="紧急联系人" v-model="preBaseInfo.urgentPeo" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>紧急联系人</div>          
      </x-input>
      <x-input title="紧急联系方式" v-model="preBaseInfo.urgentTel" is-type="china-mobile" :max="11" :required="true" text-align="right">
          <div slot="label"><span class="req">*</span>紧急联系方式</div>          
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
import { Group,Selector,XInput,XAddress,Datetime,XButton, ChinaAddressV4Data } from 'vux'
import { mapState } from 'vuex';

export default {
    components: {
        Group,Selector,XInput,XAddress,Datetime,XButton
    },
    mounted(){
        this.getpreBaseInfo();
    },
    data(){
        return{
            address:ChinaAddressV4Data,
            // preBaseInfo:{
            //     email:'',
            //     urgentPeo:'',//紧急联系人
            //     secuArea:'',//缴纳社保地区

            //     tel:'',                
            //     idCard:'',//身份ID n
            //     sex:'', //性别 
            //     nation:'',//民族
            //     location:'', //国籍
            //     plocitical:'', //政治面貌
            //     marital:'',//婚姻状况
            //     eduHighest:'',//最高学历
            //     bgSurvey:'',//背景调查
            //     urgentTel:'',//紧急联系方式
            //     bodyState:'',//身体状况
            //     medical:'',//既往病史
            //     hered:'',//重大疾病以及遗传病
            //     hkType:'',//户口性质
            //     secuRi:'',//是否缴纳过社保 

            //     oriPlace:[], //籍贯                
            //     nowAdress:[],//现住址
            //     hkAdress:[],//户口所在地

            //     graduDate:'',//毕业日期
            //     workDate:'',//工作日期
            //     birthDay:'', //生日

            // },
            preSelector:preSelectorlist,
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
                    return 
                }else{
                    console.log("yes");
                    this.$store.commit('setpreBaseInfo',data.data.result);
                    console.log("store",this.preBaseInfo)
                }
                
            });
        },
        confirm(){
            // console.log(this.preBaseInfo);
            // console.log(this.UserInfo._id);
            // 类型转换
            // let predata ={}
            // predata.email=this.preBaseInfo.email ;
            // predata.urgentPeo=this.preBaseInfo.urgentPeo ;//紧急联系人
            // predata.secuArea=this.preBaseInfo.secuArea ;//缴纳社保地区

            // predata.tel = Number(this.preBaseInfo.tel) ;
            // predata.idCard = Number(this.preBaseInfo.idCard) ;//身份ID n
            // predata.sex = Number(this.preBaseInfo.sex) ; //性别 
            // predata.nation = Number(this.preBaseInfo.nation) ;//民族
            // predata.location = Number(this.preBaseInfo.location) ; //国籍
            // predata.plocitical = Number(this.preBaseInfo.plocitical) ; //政治面貌
            // predata.marital = Number(this.preBaseInfo.marital) ;//婚姻状况
            // predata.eduHighest = Number(this.preBaseInfo.eduHighest) ;//最高学历
            // predata.bgSurvey = Number(this.preBaseInfo.bgSurvey) ;//背景调查
            // predata.urgentTel = Number(this.preBaseInfo.urgentTel) ;//紧急联系方式
            // predata.bodyState = Number(this.preBaseInfo.bodyState) ;//身体状况
            // predata.medical = Number(this.preBaseInfo.medical) ;//既往病史
            // predata.hered = Number(this.preBaseInfo.hered) ;//重大疾病以及遗传病
            // predata.hkType = Number(this.preBaseInfo.hkType) ;//户口性质
            // predata.secuRi = Number(this.preBaseInfo.secuRi) ;//是否缴纳过社保 

            // predata.oriPlace = this.preBaseInfo.oriPlace ; //籍贯
            // predata.nowAdress = this.preBaseInfo.nowAdress ;//现住址
            // predata.hkAdress = this.preBaseInfo.hkAdress ;//户口所在地

            // predata.graduDate=new Date(this.preBaseInfo.graduDate).getTime() ;//毕业日期
            // predata.workDate=new Date(this.preBaseInfo.workDate).getTime() ;//工作日期
            // predata.birthDay=new Date(this.preBaseInfo.birthDay).getTime() ; //生日
            // console.log(predata);
            this.$vux.loading.show({
                text: 'Loading'
            })
             this.preBaseInfo.user = this.UserInfo._id;
             ServiceManager.submitPreBaseInfo(this.preBaseInfo).then(data => {
                console.log(data)
                this.$vux.loading.hide()
                if (data.data.code == 200) {
                    this.$vux.toast.show({
                    text: '提交个人信息成功',
                    type: 'success'
                    });
                    this.$store.commit('setpreBaseInfo',data.data.result);
                    console.log("store",this.preBaseInfo);
                    
                } else {
                    this.$vux.toast.show({
                    text: '提交个人信息失败，请重试',
                    type: 'warn'
                    });
                }
            });
        },
        edit(){
                this.$vux.loading.show({
                text: 'Loading'
                })
                ServiceManager.editPreBaseInfo(this.preBaseInfo).then(data => {
                    console.log(data)
                    this.editbtn = "编辑" 
                    flag = false;                   
                    this.$vux.loading.hide()
                    if (data.data.code == 200) {
                        this.$vux.toast.show({
                        text: '编辑个人信息成功',
                        type: 'success'
                        });
                        this.$store.commit('setpreBaseInfo',data.data.result);
                        console.log("store",this.preBaseInfo)
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
