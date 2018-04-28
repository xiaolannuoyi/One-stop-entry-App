<template>
  <div>
    <group title="身份证电子文件上传">
        <cell title="正面"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img src="../../../../static/images/ID-face-card.png" alt="正面">
        </div>
        <cell title="反面"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img src="../../../../static/images/ID-back-card.png" alt="反面">
        </div>
         <x-button  type="primary" @click.native="comfirm">提交</x-button>
    </group>

    <div v-transfer-dom>
        <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    </div>
    
  </div>
   
</template>

<script>
import {cameraTakePicture} from '../../../../static/models/plugin'
import {Group, Cell,XButton, Actionsheet,TransferDomDirective as TransferDom} from 'vux';
export default {
    components: {
        Group,
        Cell,
        Actionsheet,
        XButton
    },
    directives: {
        TransferDom
    },
    data(){
        return{
            show:false,
            menus: {
                menu1: "拍照",
                menu2: "图库"
            },
            img:'',
        }
    },
    methods:{
        uploadimg(){
            this.show= true;
            this.img = event.target;
            console.log(event.target)
        },
        click (key) {
          key == 'menu1'
              ?  cameraTakePicture(Camera.PictureSourceType.CAMERA,true,this.img)
              : cameraTakePicture(Camera.PictureSourceType.PHOTOLIBRARY,false,this.img) 
            
        },
        comfirm(){
            
        }

    }
}
</script>

<style>
.uploadBox{
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
}
</style>
