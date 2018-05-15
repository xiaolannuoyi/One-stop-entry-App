<template>
  <div class="hmoe">
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <group style="margin-top:44px;">
        <cell title="HR账号管理" link="/hr"></cell>
        <cell title="入职者账号管理" link="/user"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XHeader, CellBox } from 'vux'
export default {
  components: {
    Group,
    Cell,
    XHeader,
    CellBox,
    
  },
  data(){
      return{
      }
  }
}
</script>
<style>
</style>


