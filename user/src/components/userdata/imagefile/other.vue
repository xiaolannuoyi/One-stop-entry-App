<template>
  <div>
    <group title="户口簿上传">
        <cell title="主页"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="ID1" id="one">
        </div>
        <cell title="个人"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="ID2" id="two">
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
        ID1(){
            console.log("id1",this.baseURL + this.image.ResidenceHomepage)
            return this.baseURL + this.image.ResidenceHomepage;
        },
        ID2(){
            console.log("id2",this.baseURL + this.image.ResidenceOwnpage)
            return this.baseURL + this.image.ResidenceOwnpage;
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
            let url1 = this.baseURL + 'upload/uploadResidenceHomepage'
            let url2 = this.baseURL + 'upload/uploadResidenceOwnpage'
            let one = document.getElementById('one').src;
            let two = document.getElementById('two').src;

            if(one !== this.ID1 && two !== this.ID2){
                this.updateImage(one,url1,this.image.user);
                this.updateImage(two,url2,this.image.user);
            }else if(one !== this.ID1){
                this.updateImage(one,url1,this.image.user);
            }else if(two !== this.ID2){
                this.updateImage(two,url2,this.image.user);
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
