<template>
  <div>
    <panel header="全部" :list="list" type="1"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'
import ServiceManager from '@/services/services-manager';

export default {
    name:"hrSee",
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
            //     {
            //     src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            //     title: '标题一',
            //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            //     url: '/component/cell'
            //     }, {
            //     src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            //     title: '标题二',
            //     desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
            //     url: {
            //     path: '/component/radio',
            //     replace: false
            //     },
            //     meta: {
            //     source: '来源信息',
            //     date: '时间',
            //     other: '其他信息'
            //     }
            // }
            ],
        }
    },
    methods:{
        getData(){
            this.$vux.loading.show({
                text: 'Loading'
            })
          ServiceManager.findHr().then(data => {
          console.log(data)
          this.$vux.loading.hide()          
          if(data.data.code == 200){
              let result = data.data.result;
              result.forEach(item => {
                  this.list.push({
                      'src': 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                      'title': item.Name,
                      'desc': "工号"+item.Account,
                      'url': '/hr/hrMsg/'+item._id
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
