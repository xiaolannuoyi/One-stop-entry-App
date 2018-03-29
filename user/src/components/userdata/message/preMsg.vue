<template>
  <div>
     <!-- header -->
    <x-header :left-options="{showBack: false}">填写</x-header>
    <!-- content -->
    <div style="width: 95%;margin: 0 auto;">
      <step v-model="step2" background-color='#fbf9fe' gutter="20px">
        <step-item title="'done"></step-item>
        <step-item title="'processing"></step-item>
        <step-item title="'end"></step-item>
      </step>




      <div class="btn_wrap">
        <x-button type="primary" @click.native="nextStep">下一步</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Step, StepItem, XButton, XHr } from "vux";
export default {
  components: {
    Step,
    StepItem,
    XButton,
    XHr
  },
  data() {
    return {
      step1: 1,
      step2: 0
    };
  },
  methods: {
    nextStep() {
      this.step2++;
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