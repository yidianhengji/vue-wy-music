<template>
  <div class="mobile-login">
    <div class="header">
      <a href="javascript:;" @click="back">
        <i class="icon iconfont iconfanhui1"></i>
      </a>
      <h1>手机号登录</h1>
    </div>
    <div class="content">
      <div class="input-box">
        <input type="text" placeholder="请输入手机号" v-model="phone" />
      </div>
      <div class="input-box">
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="btn">
        <a href="javascript:0;" @click="submiBtn">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@/api";
export default {
  data() {
    return {
      phone: "",
      password: "",
      data: {}
    };
  },
  methods: {
    submiBtn: async function() {
      let values = {
        phone: this.phone,
        password: this.password
      };
      const req = await reqLogin(values);
      if (req.data.code == 200) {
        this.$router.push({ path: "/" });
      }
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.mobile-login {
  .header {
    position: relative;

    h1 {
      height: 40px;
      line-height: 40px;
      text-align: left;
      padding: 0 40px;
      color: #333;
      font-size: 16px;
    }

    a {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      font-size: 16px;

      &:active {
        active-click();
      }

      i {
        font-size: 22px;
      }
    }
  }

  .content {
    padding: 30px 15px;

    .input-box {
      position: relative;
      margin-bottom: 30px;

      span {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 40px;
        height: 30px;
        color: #666;
        font-size: 14px;
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        color: #333;
        box-sizing: border-box;

        &::-webkit-input-placeholder {
          color: #666;
          font-size: 14px;
        }

        &::-moz-input-placeholder {
          color: #666;
          font-size: 14px;
        }

        &::-ms-input-placeholder {
          color: #666;
          font-size: 14px;
        }
      }
    }

    .btn {
      a {
        display: block;
        height: 38px;
        line-height: 38px;
        border-radius: 19px;
        color: #ffffff;
        background: $login-btn-background;
        font-size: 14px;
        text-align: center;
        margin-top: 20px;

        &:active {
          background: $login-btn-background;
        }
      }
    }
  }
}
</style>
