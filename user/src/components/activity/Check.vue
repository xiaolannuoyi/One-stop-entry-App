<template>
  <div>
    <x-header :left-options="{showBack: false}">审核</x-header>
    <!-- <flow orientation="vertical" style="height:250px;" >
      <div  v-for="(item,index) in checkProgress" :key="index">
        <flow-state :state="index" :title="item.checkState" :is-done='(item.checkState==index)?ture:false'></flow-state>
        <flow-line v-show="(index !== checkProgress.length)?true:false " is-done :tip="item.checkText"></flow-line>

      </div>
    </flow> -->
    <div v-if="checkProgress.length==0" style="width:80%;margin:10px auto;">
      <mu-timeline>
        <mu-timeline-item >
          <span slot="time">未提交</span>
          <span slot="des">您尚未提交资料，请填写资料后并提交，点击按钮发送给HR进行审核</span>
        </mu-timeline-item>
      </mu-timeline>
    </div>
    <div style="width:80%;margin:10px auto;">
      <mu-timeline>
      <mu-timeline-item v-for="(item,index) in checkProgress" :key="index">
        <span slot="time">{{item.date}}</span>
        <span slot="des">{{item.checkState}} <br/>{{item.checkText}}</span>
        
      </mu-timeline-item>
    </mu-timeline>
    </div>
    

  </div>
</template>

<script>
import { XHeader,Flow, FlowState, FlowLine } from 'vux'
import ServiceManager from '@/services/services-manager';
import { mapState } from 'vuex';
export default {
  components: {
    XHeader,Flow, FlowState, FlowLine
  },
  mounted(){
    this.getdata()
  },
  computed:{
    ...mapState(['UserInfo','checkProgress']),
    
  },
  methods:{
    getdata(){
      this.$vux.loading.show({
                text: 'Loading'
            })
      ServiceManager.findcheckState(this.UserInfo._id).then(data => {
        console.log(data)
        this.$vux.loading.hide()
        // 1：提交（等待审核），2：hr审核中，3：审核有错误（修改后走1），4：审核结束（审核结果）
        let result = data.data.result;
        let arr = []
        for(let i = 0;i<result.length;i++){
          let state = result[i].checkState;
          let str ='';
          switch (state){
            case 1:
                str = '提交,等待审核';
                break;
             case 2:
                str = '审核有错误';
                break;
             case 3:
                str = '审核通过并结束';
                break;
          }
          let date = new Date(result[i].date);
          let time = date.toLocaleString();

          // let start = result[i].date.indexOf('T')
          // let end = result[i].date.indexOf('.')
          // let time = result[i].date.substring(0,start) + " " + result[i].date.substring(start+1,end);
          arr.push({
            checkState: str,
            checkText: result[i].checkText,
            date: time,
          })
        }
        this.$store.commit('setcheckProgress',arr);
      })
          
    },
  }
}
</script>

<style>

</style>
