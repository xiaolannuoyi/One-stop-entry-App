<template>
  <div>
     <!-- header -->
    <x-header :left-options="{showBack: true}">填写</x-header>
    <!-- content -->
    <div>
      <!-- <step v-model="step" background-color='#fbf9fe' gutter="20px">
        <step-item v-for="item in stepName" :key="item.id" :title="item.title" @click.native="nextStep(item.num,item.path)"></step-item>
      </step> -->
      <tab :scroll-threshold="5">
        <tab-item  v-for="(item,index) in stepName" :key="item.id" :selected="select===index" @click.native="nextStep(index,item.path)">{{item.title}}</tab-item>
      </tab>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { XHeader,Step, StepItem, XButton ,Tab, TabItem} from "vux";
export default {
  components: {
    XHeader,
    Step,
    StepItem,
    XButton,
    Tab, TabItem
  },
  data() {
    return {
      step: 0,
      select:0,
      stepName:[
        {
          title:"基本信息",
          path:"preBaseInfo",
        },
        {
          title:"工资卡",
          path:"bankCards",
        },
        {
          title:"工作经历",
          path:"preWorkInfo",
        },
        {
          title:"家庭信息",
          path:"homeInfo",
        },
        {
          title:"荣誉证书",
          path:"qualifyInfo",
        },
        {
          title:"教育背景",
          path:"eduBgInfo",
        },
      ]
    };
  },
  methods: {
    nextStep(index,path) {
      this.select = index;
      let router = "/userdata/message/step/"+path;
      this.$router.replace(router);
    }
  }
};
</script>
