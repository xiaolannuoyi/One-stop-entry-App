<template>
  <div>
     <!-- header -->
    <x-header :left-options="{showBack: true}">上传</x-header>
    <!-- content -->
    <div>
      <!-- <step v-model="step" background-color='#fbf9fe' gutter="20px">
        <step-item v-for="item in stepName" :key="item.id" :title="item.title" @click.native="nextStep(item.num,item.path)"></step-item>
      </step> -->
      <tab :scroll-threshold="5">
        <tab-item  v-for="(item,index) in stepName" :key="item.id" :selected="select===index" @click.native="nextStep(index,item.path)">{{item.title}}</tab-item>
      </tab>
      <router-view></router-view>    
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
          title:"身份证",
          path:"IDCard",
        },
        {
          title:"一寸照",
          path:"OneInchPhoto",
        },
        {
          title:"学历认证",
          path:"Education",
        },
        {
          title:"离职证明",
          path:"leaveWork",
        },
        {
          title:"银行卡",
          path:"bankCard",
        },
        {
          title:"其他",
          path:"other",
        },
      ]
    };
  },
  methods: {
    nextStep(index,path) {
      this.select = index;
      let router = "/userdata/imagefile/fileStep/"+path;
      this.$router.replace(router);
    }
  }
};
</script>
