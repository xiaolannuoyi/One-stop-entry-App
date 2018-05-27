<template>
  <div>
    <x-header :left-options="{showBack: false}">公司</x-header>
    <group>
        <cell title="公司简介" link="https://mp.weixin.qq.com/s/W46fnxzHn__9Cs5h6baHmg"></cell>
        <cell title="员工福利" link="/home/company/EmployeeWelfare"></cell>
        <cell title="规章制度" link="/home/company/RulesRegulations"></cell>
        <cell title="周边环境" link="/home/company/position"></cell>
        
    </group>
  </div>
</template>

<script>
import { XButton,XHeader,Group,Cell } from 'vux'
export default {
  components: {
    XButton,XHeader,Group,Cell
  }
}
</script>
<style>

</style>
