<template>
  <div class="login">
    <!-- slideOutDown animated -->
    <div class="login-logo">
      <i class="icon iconfont iconyinleyanzou"></i>
    </div>
    <div class="login-bottom">
      <a class="login-bottom-btn" href="javascript:;" @click="loginSubmisBtn">手机号登录</a>
      <div class="login-agreement-text">
        <label @click="toggleOption">
          <i class="icon iconfont" :class="option ? 'iconkongjianyixuan' : 'iconkongjianweixuan'"></i>
          <span>&nbsp;&nbsp;同意《用户协议》《隐私政策》《儿童隐私政策》</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: false
    };
  },
  methods: {
    loginSubmisBtn() {
      if (this.option) {
        this.$router.push({ path: "/mobileLogin" });
      } else {
        this.$message({
          message: "请先勾选同意《用户协议》《隐私政策》《儿童隐私政策》",
          duration: 2000
        });
      }
    },
    toggleOption() {
      this.option = !this.option;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: $login-background;
  color: #ffffff;
  overflow: hidden;

  .login-logo {
    position: absolute;
    left: 50%;
    top: 80px;
    width: 54px;
    height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $login-logo-background;
    border-radius: 50%;
    margin-left: -27px;

    i {
      font-size: 46px;
      font-weight: 600;
    }
  }

  .login-bottom {
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 30px;

    .login-bottom-btn {
      display: block;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      color: #D32F2F;
      background: #ffffff;
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;

      &:active {
        background: $click-active-background;
        transition: all 0.5s;
      }
    }

    .login-agreement-text {
      font-size: 10px;
      color: #d3d1d1;
      text-align: center;
      justify-content: center;

      label {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      i {
        color: #d3d1d1;
      }
    }
  }
}
</style>
