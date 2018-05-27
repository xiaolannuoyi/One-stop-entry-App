<template>
  <div class="hmoe">
    <!-- header -->
    <x-header :left-options="{showBack: false}">主页</x-header>
    <!-- content -->
    <group style="margin-top:44px;">
        <cell v-if="HrInfo.IsAdmin==1" title="HR账号管理" link="/hr"></cell>
        <cell title="入职者账号管理" link="/user"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XHeader, CellBox } from 'vux'
import {mapState} from 'vuex'
export default {
  components: {
    Group,
    Cell,
    XHeader,
    CellBox,
    
  },
  computed:{
    ...mapState(['HrInfo']),
  },
  mounted(){
    console.log(this.HrInfo)
  },
  data(){
      return{
      }
  }
}
</script>
<style>
</style>


