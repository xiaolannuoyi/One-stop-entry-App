<template>
  <div>
    <!-- 工作经历 -->
    <group title="工作经历" v-if="workArray.length >0" v-for="item in workArray" :key="item.id">
        <x-input title="工作单位" v-model="item.company" text-align="right">
            <div slot="label"><span class="req">*</span>工作单位</div>
        </x-input>
        <datetime  v-model="item.Startdate">
            <div slot="title"><span class="req">*</span>开始日期</div>
        </datetime>
        <datetime  v-model="item.Enddate">
            <div slot="title"><span class="req">*</span>结束日期</div>
        </datetime>
        <x-input title="工作岗位" v-model="item.post" text-align="right">
            <div slot="label"><span class="req">*</span>工作岗位</div>
        </x-input> 
        <x-input title="证明人" v-model="item.Provider" text-align="right"></x-input>  
        <x-input title="证明人岗位" v-model="item.Proname" text-align="right"></x-input>  
        <x-input title="证明人联系方式" v-model="item.Prophone" :max="11" text-align="right"></x-input>        
    </group>
    <!-- 荣誉证书 -->
    <group title="荣誉证书" v-if="qualifyArray.length >0" v-for="item in qualifyArray" :key="item.id">
        <datetime  title="获得年月" v-model="item.Getdate">
            <div slot="title"><span class="req">*</span>获得年月</div>
        </datetime>
        <x-input title="证书名称" v-model="item.Name" text-align="right">
            <div slot="label"><span class="req">*</span>证书名称</div>
        </x-input>
    </group>
    <!-- 家庭成员 -->
    <group title="家庭成员" v-if="homeArray.length >0" v-for="item in homeArray" :key="item.id">
        <x-input title="姓名" v-model="item.name" text-align="right">
            <div slot="label"><span class="req">*</span>姓名</div>
        </x-input>
        <x-input title="与本人关系" v-model="item.Relation" text-align="right">
            <div slot="label"><span class="req">*</span>与本人关系</div>
        </x-input>  
        <x-input title="工作单位" v-model="item.Company" text-align="right">
            <div slot="label"><span class="req">*</span>工作单位</div>
        </x-input>
        <x-input title="联系方式" v-model="item.Contact " :max="11" text-align="right">
            <div slot="label"><span class="req">*</span>联系方式</div>
        </x-input>
    </group>
    <!-- 教育背景 -->
    <group title="教育背景" v-if="edubgArray.length >0" v-for="item in edubgArray" :key="item.id">
        <datetime  title="起始年月" v-model="item.Startdate">
            <div slot="title"><span class="req">*</span>起始年月</div>
        </datetime>
        <datetime  title="截止年月" v-model="item.Enddate">
            <div slot="title"><span class="req">*</span>截止年月</div>
        </datetime>
        <x-input title="学校" v-model="item.Schoolname" text-align="right">
            <div slot="label"><span class="req">*</span>学校</div>
        </x-input>  
        <x-input title="院系" v-model="item.College" text-align="right">
            <div slot="label"><span class="req">*</span>院系</div>
        </x-input>  
        <x-input title="专业" v-model="item.Major" text-align="right">
            <div slot="label"><span class="req">*</span>专业</div></x-input>  
        <x-input title="学历" v-model="item.Education" text-align="right">
            <div slot="label"><span class="req">*</span>学历</div>
        </x-input> 
    </group>
    <group title="银行卡上传" v-if="this.img.bank !== 'uploads/pf-bank-card.png' ">
        <div class="uploadBox" >
            <img width="100%" :src=" this.baseURL + this.img.bank">
        </div>
    </group>
    <group title="离职证明上传" v-if="this.img.Quit !== 'uploads/leave-prove-img.png' ">
        <div class="uploadBox" >
            <img width="100%" :src=" this.baseURL + this.img.Quit">
        </div>
    </group>
    <group title="户口簿上传" v-if="this.img.ResidenceHomepage !== 'uploads/household-register-card.png' || this.img.ResidenceOwnpage !== 'uploads/household-register-card.png'">
      <div v-if="this.img.ResidenceHomepage !== 'uploads/household-register-card.png' ">
        <cell title="主页"></cell>
        <div class="uploadBox"  >
            <img width="100%" :src=" this.baseURL + this.img.ResidenceHomepage">
        </div>
      </div>
      <div v-if="this.img.ResidenceOwnpage !== 'uploads/household-register-card.png' ">
        <cell title="个人"></cell>
        <div class="uploadBox"  >
            <img width="100%" :src=" this.baseURL + this.img.ResidenceOwnpage">
        </div>
      </div>
        
    </group>
  </div>
</template>

<script>
import {  Cell,Group,XInput,XAddress,Datetime,XButton } from 'vux'
import preSelectorlist from 'static/preSelector.js'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
    components: {
         Cell,Group,XInput,XAddress,Datetime,XButton
    },
    computed:{
        ...mapState(['usercheckData']),
        ...mapGetters(['baseURL']),
        userid(){
            return this.$route.params.id.slice(1);
        }
    },
    mounted() {
        // 调用请求数据的方法
        console.log('must id',this.userid);
        console.log('this.usercheckData',this.usercheckData[this.userid])
        this.workArray = this.usercheckData[this.userid][3];
        this.qualifyArray = this.usercheckData[this.userid][6];
        this.homeArray = this.usercheckData[this.userid][4];
        this.edubgArray = this.usercheckData[this.userid][5];
        this.img= this.usercheckData[this.userid][7];
    },
    data () {
        return {
            workArray:[],
            qualifyArray:[],
            homeArray:[],
            edubgArray:[],
            img:[]
        }
    },
    methods:{
       
        
    }
}
</script>

<style>

</style>
