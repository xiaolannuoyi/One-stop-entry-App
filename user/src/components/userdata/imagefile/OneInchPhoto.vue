<template>
  <div>
    <group title="一寸照上传">
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="onephoto" id="one">
        </div>
         <x-button  type="primary" @click.native="comfirm">提交</x-button>
    </group>

    <div v-transfer-dom> 
        <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    </div>
  </div>
   
</template>

<script>
import {Group, Cell,XButton, Actionsheet,TransferDomDirective as TransferDom} from 'vux';
import { mapState ,mapGetters} from 'vuex';
import ServiceManager from "@/services/services-manager";
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
    computed: {
        onephoto(){
            console.log("onephoto",this.baseURL + this.image.oneph)
            return this.baseURL + this.image.oneph;
        },
        ...mapState(['image']),
        ...mapGetters(['baseURL'])
    },
    methods:{
        uploadimg(){
            this.show= true;
            this.img = event.target;
            console.log("输出",event.target)
        },
        click (key){
            navigator.camera.getPicture(
                data => {
                    console.log("imagedata---------",data)
                    this.img.src = data;
                },
                error => {
                    alert("失败原因",error)
                },
                {
                quality: 20,
                sourceType:
                    key == 'menu1'
                    ? Camera.PictureSourceType.CAMERA
                    : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                correctOrientation: true
            })
        },
        comfirm(){
            let url1 = this.baseURL + 'upload/uploadoneph'
            let one = document.getElementById('one').src;
            if(one !== this.onephoto){
              this.updateImage(one,url1,this.image.user);
            }else{
              this.$vux.toast.show({
                    text: '图片已存在',
                    type: 'warn'
                });
            }
            
        },
        updateImage(imagedata,url,userid){
            let self = this;
            self.$vux.loading.show({
            text: '上传中'
            })
            var ft = new FileTransfer();
            ft.upload(
                imagedata,
            url,
            r => {
                console.log("成功",r.response)
                self.$vux.loading.hide();
                this.$store.commit('setImage',JSON.parse(r.response).result);
                console.log("store",this.image)
                self.$vux.toast.show({
                    text: '上传成功',
                    type: 'success'
                });
            },
            error => {
                self.$vux.loading.hide();
                self.$vux.toast.show({
                    text: '上传失败',
                    type: 'warn'
                });
            },
            {
                params: {
                id: userid
                }
            }
            );
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
