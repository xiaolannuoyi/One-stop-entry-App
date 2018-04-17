<template>
  <div>
     <!-- header -->
    <x-header :left-options="{showBack: false}">填写</x-header>
    <!-- content -->
    <div>
      <step v-model="step" background-color='#fbf9fe' gutter="20px">
        <step-item v-for="item in stepName" :key="item.id" :title="item.title" @click.native="nextStep(item.path)"></step-item>
      </step>
      <router-view></router-view>      
      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">下一步</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader,Step, StepItem, XButton } from "vux";
export default {
  components: {
    XHeader,
    Step,
    StepItem,
    XButton
  },
  data() {
    return {
      step: 0,
      stepName:[
        {
          title:"基本信息",
          path:"preBaseInfo"
        },
        {
          title:"工作经历",
          path:"preWorkInfo"
        },
        {
          title:"基本信息",
          path:"preBaseInfo"
        },
        {
          title:"基本信息",
          path:"preBaseInfo"
        },
        {
          title:"基本信息",
          path:"preBaseInfo"
        },
        {
          title:"基本信息",
          path:"preBaseInfo"
        },
      ]
    };
  },
  methods: {
    nextStep(path) {
      let router = "/userdata/message/step/"+path;
      this.$router.replace(router);
    }
  }
};
</script>

<style lang="less">
.btn_wrap {
  padding: 0 1rem;
  margin-top: 2rem;
}
</style>