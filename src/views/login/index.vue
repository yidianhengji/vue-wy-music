<template>
  <div class="login">
    <div class="login-logo">
      <i class="icon pfont pyinleyanzou"></i>
    </div>
    <div class="login-bottom">
      <a class="login-bottom-btn" href="javascript:;" @click="loginSubmisBtn">手机号登录</a>
      <div class="login-agreement-text">
        <label>
          <input type="checkbox" v-model="agreement" />
          <span>同意《用户协议》《隐私政策》《儿童隐私政策》</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agreement: false
    };
  },
  methods: {
    loginSubmisBtn() {
      this.$router.push({ path: "/mobileLogin" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.login
  position relative
  width 100%
  height 100%
  background #B71C1C
  color #ffffff
  overflow hidden
  .login-logo
    position absolute
    left 50%
    top 80px
    width 54px
    height 54px
    display flex
    justify-content center
    align-items center
    background #D32F2F
    border-radius 50%
    margin-left -27px
    i
      font-size 24px
      font-weight 600
  .login-bottom
    position absolute
    left 40px
    right 40px
    bottom 30px
    .login-bottom-btn
      display block
      height 30px
      line-height 30px
      border-radius 15px
      color #D32F2F
      background #ffffff
      font-size 14px
      text-align center
      margin-bottom 20px
      &:active
        background #eeeeee
    .login-agreement-text
      font-size 10px
      label
        display flex
        align-items center
      input
        margin 0px
</style>
