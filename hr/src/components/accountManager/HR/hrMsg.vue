<template>
  <div>
    <!-- header -->
    <x-header @on-click-back="back">用户信息</x-header>
    <!-- content -->
    <group style="margin-top:44px; ">
      <x-input title="工号"
               :disabled="disabled"
               ref="Account"
               v-model="hrData.Account"
               type="number"
               :required="true"
               text-align="right"></x-input>
      <x-input title="姓名"
               :disabled="disabled"
               ref="Name"
               v-model="hrData.Name"
               :required="true"
               text-align="right"></x-input>
      <x-input title="手机号码"
               :disabled="disabled"
               ref="Tel"
               v-model="hrData.Tel"
               keyboard="number"
               is-type="china-mobile"
               :max="11"
               :required="true"
               text-align="right"></x-input>
      <popup-picker title="负责区域"
                    :disabled="disabled"
                    :data="list.addresslist"
                    v-model="hrData.Address"
                    :columns="2" value-text-align="right" show-name></popup-picker>
      <x-switch title="管理员权限"
                :disabled="disabled"
                :value-map="['0', '1']"
                v-model="hrData.IsAdmin"></x-switch>
    </group>
    <group>
      <x-button type="warn"
                @click.native="ResetPasswordShow = true">重置密码</x-button>
    </group>
    <flexbox>
      <flexbox-item>
        <x-button type="warn"
                  @click.native="del">删除</x-button>
      </flexbox-item>
      <flexbox-item>
        <x-button type="primary"
                  @click.native="edit"
                  v-if="editNum==1">编辑</x-button>
        <x-button type="primary"
                  @click.native="Submit"
                  :disabled="canGo || btndisable"
                  v-else>提交</x-button>
      </flexbox-item>
    </flexbox>

    <div v-transfer-dom>
      <confirm v-model="show"
               title="确认删除"
               @on-confirm="onConfirm">
        <p style="text-align:center;">删除不可恢复</p>
      </confirm>
    </div>

    <div v-transfer-dom>
      <confirm v-model="ResetPasswordShow"
               title="重置密码"
               @on-cancel="ResetPasswordShow = false"
               @on-confirm="ConfirmResetPassword">
        <p style="text-align:center;">密码重置为手机号后六位，确定重置密码么。</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XHeader,
  CellBox,
  XInput,
  PopupPicker,
  XSwitch,
  XButton,
  Flexbox,
  FlexboxItem,
  Confirm,
  TransferDomDirective as TransferDom
} from 'vux';
import ServiceManager from '@/services/services-manager';
import compass from 'static/compass.js';

export default {
  components: {
    Group,
    Cell,
    XHeader,
    CellBox,
    XInput,
    PopupPicker,
    XSwitch,
    XButton,
    Flexbox,
    FlexboxItem,
    Confirm
  },
  directives: {
    TransferDom
  },
  data() {
    return {
      disabled: true,
      ResetPasswordShow: false,
      hrData: {
        Account: '', //工号
        Name: '', //姓名
        Tel: '', //电话
        Address: [], //负责地区
        IsAdmin: '' //是否为管理者 0 :false; 1: true
      },
      list:compass,
      editNum: 1,
      show: false,
      btndisable: true
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    canGo() {
      if (
        this.hrData.Account != '' &&
        this.hrData.Name != '' &&
        this.hrData.Tel != '' &&
        this.$refs.Account.valid &&
        this.$refs.Name.valid &&
        this.$refs.Tel.valid
      ) {
        this.btndisable = false;
      } else {
        this.btndisable = true;
      }
    }
  },
  methods: {
    back() {
      this.$router.replace('/hr');
    },
    getData() {
      console.log('router', this.$route.params);
      this.$vux.loading.show({
          text: 'Loading'
      })
      ServiceManager.findHrOne(this.$route.params.id).then(data => {
        console.log('data', data);
          this.$vux.loading.hide()        
        if (data.data.code == 200) {
          let result = data.data.result;
          this.hrData.Account = result.Account;
          this.hrData.Name = result.Name;
          this.hrData.Tel = result.Tel.toString();
          this.hrData.Address.push(result.Address);
          this.hrData.IsAdmin = result.IsAdmin.toString();
          console.log('result', result);
          console.log('this.hrdata', this.hrData);
        }
      });
    },
    del() {
      this.show = true;
    },
    onConfirm() {
      this.$vux.loading.show({
          text: 'Loading'
      })
      ServiceManager.hrDel(this.$route.params.id).then(data => {
        console.log('del', data);
          this.$vux.loading.hide()        
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: '删除成功',
            type: 'success'
          });
          this.$router.replace('/hr');
        } else {
          this.$vux.toast.show({
            text: '删除失败，请重试',
            type: 'success'
          });
        }
      });
    },
    edit() {
      this.disabled = false;
      this.editNum++;
      console.log('this.edit', this.editNum);
    },
    Submit() {
      this.editNum = 1;
      this.disabled = true;
      console.log('this.edit', this.editNum);
      this.$vux.loading.show({
          text: 'Loading'
      })
      ServiceManager.hrEdit(this.$route.params.id, this.hrData).then(data => {
          this.$vux.loading.hide()        
        console.log('edit', data);
        if (data.data.code == 200) {
          this.$vux.toast.show({
            text: '编辑成功',
            type: 'success'
          });
          this.$router.replace('/hr');
        } else {
          this.$vux.toast.show({
            text: '编辑失败，请重试',
            type: 'success'
          });
        }
      });
    },
    ConfirmResetPassword() {
      let password = this.hrData.Account;
      this.$vux.loading.show({
          text: 'Loading'
      })
      ServiceManager.hrResetPassword(this.$route.params.id, password).then(
        data => {
          console.log(data);
          this.$vux.loading.hide()          
          if (data.data.code == 200) {
            this.$vux.toast.show({
              text: '重置密码成功',
              type: 'success'
            });
          } else {
            this.$vux.toast.show({
              text: '重置密码失败，请重试',
              type: 'success'
            });
          }
        }
      );
    }
  }
};
</script>
<style>

</style>


