<template>
  <div style="margin-top:44px;">
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import ServiceManager from '@/services/services-manager';
import {mapState,mapGetters} from 'vuex'
export default {
    name:"userSee",
    components: {
        Panel
    },
    mounted() {
        // 调用请求数据的方法
        this.getData()
    },
    data () {
        return {
            list: [
            ],
        }
    },
    computed:{
        ...mapState(['HrInfo']),
        ...mapGetters(['baseURL']),
    },
    methods:{
        getData(){
            this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.findUser({Address:this.HrInfo.Address}).then(data => {
          console.log(data)
          this.$vux.loading.hide()                    
          if(data.data.code == 200){
              let result = data.data.result;
              result.forEach(item => {
                  this.list.push({
                      'src': this.baseURL + item.avatar,
                      'title': item.Name,
                      'desc': "电话号码:"+item.Tel,
                      'url': '/user/userMsg/'+item._id
                  })
              })
              console.log("list",this.list);
            }
          })
        }
    }
}
</script>

<style>

</style>
