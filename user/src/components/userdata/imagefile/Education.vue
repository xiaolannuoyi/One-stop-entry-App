<template>
  <div>
    <x-switch title="实习生上传学生证" :value-map="['0', '1']" v-model="showgroup"></x-switch>
    <group title="学历证书上传" v-if="showgroup == '0'">
        <cell title="毕业证"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="Diploma" id="one">
        </div>
        <cell title="学位证"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="degree" id="two">
        </div>
        <x-button  type="primary" @click.native="comfirm1">提交</x-button>
    </group>
    <group title="学生" v-else>
        <cell title="学生证"></cell>
        <div class="uploadBox" @click="uploadimg">
            <img width="100%" :src="StudentID" id="three">
        </div>
        <x-button  type="primary" @click.native="comfirm2">提交</x-button>
    </group>
    <div v-transfer-dom>
        <actionsheet v-model="show" :menus="menus" @on-click-menu="click" show-cancel></actionsheet>
    </div>
    
  </div>
   
</template>

<script>
import {XSwitch,Group, Cell,XButton, Actionsheet,TransferDomDirective as TransferDom} from 'vux';
import { mapState ,mapGetters} from 'vuex';
import ServiceManager from "@/services/services-manager";
export default {
    components: {
        XSwitch,
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
            showgroup: '0',
            show:false,
            menus: {
                menu1: "拍照",
                menu2: "图库"
            },
            img:'',
        }
    },
    computed: {
        Diploma(){
            console.log("Diploma",this.baseURL + this.image.Diploma)
            return this.baseURL + this.image.Diploma;
        },
        degree(){
            console.log("degree",this.baseURL + this.image.degree)
            return this.baseURL + this.image.degree;
        },
        StudentID(){
            console.log("StudentID",this.baseURL + this.image.StudentID)
            return this.baseURL + this.image.StudentID;
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
        comfirm1(){
            let url1 = this.baseURL + 'upload/uploadDiploma'
            let url2 = this.baseURL + 'upload/uploaddegree'
            let one = document.getElementById('one').src;
            let two = document.getElementById('two').src;

            if(one !== this.Diploma && two !== this.degree){
                this.updateImage(one,url1,this.image.user);
                this.updateImage(two,url2,this.image.user);
            }else if(one !== this.Diploma){
                this.updateImage(one,url1,this.image.user);              
            }else if(two !== this.degree){
                this.updateImage(two,url2,this.image.user);
            }else{
              this.$vux.toast.show({
                    text: '图片已存在',
                    type: 'warn'
                });
            }
        },
        comfirm2(){
            let url3 = this.baseURL + 'upload/uploadStudentID'
            let three = document.getElementById('three').src;
            if(three !== this.StudentID){
              this.updateImage(three,url3,this.image.user);
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
