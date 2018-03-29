<template>
    <div>
          <template v-for="item in userinfo" >	
			 <!-- 基本输入框类信息列表 -->
			 	<div v-if="item.editType === 'basicInput'" class="userinfo-item" >
			 		<x-input :disabled=item.infodisabled v-model="item.value" :placeholder="'请输入' + item.label"   text-align="right" :is-type="item.infoistype" @on-change="changeSelect" ref="labelValue">
			 			<div slot="label">{{item.label}}<span class="required" v-if="item.isReq">*</span></div>
					</x-input>
			 	</div>		
          </template>
    </div>
</template>

<script>
import BasicInfo from "../../../../static/models/BasicInfo"
export default {
    data(){
        return{
            userinfo:BasicInfo
        }
    }
};
</script>

<style>

</style>
