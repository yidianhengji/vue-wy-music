<template>
  <div class="mobile-login">
    <div class="header">
      <a href="javascript:0;"><i class="icon pfont pfanhui1"></i></a>
      <h1>手机号登录</h1>
    </div>
    <div class="content">
      <p class="tip">未注册手机号登录后将自动创建账号</p>
      <div class="input-box">
        <input type="text" placeholder="请输入手机号" v-model="phone" />
        <span>+86</span>
      </div>
      <div class="input-box">
        <input type="text" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="btn">
        <a href="javascript:0;">下一步</a>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.mobile-login
  .header
    position relative
    h1
      height 40px
      line-height 40px
      text-align left
      padding 0 40px
      color #333
      font-size 16px
    a
      position absolute
      left 0px
      top 0px
      width 40px
      height 40px
      display flex
      justify-content center
      align-items center
      color #333
      font-size 16px
  .content
    padding 30px 15px
    .tip
      font-size 12px
      color #999
      margin-bottom 20px
    .input-box
      position relative
      span
        position absolute
        left 0px
        top 0px
        width 40px
        height 30px
        color #666
        font-size 14px
        display flex
        align-items center
      input
        width 100%
        border none
        border-bottom 1px solid #ccc
        outline none
        padding 0 15px 0 40px
        height 30px
        line-height 30px
        font-size 14px
        color #333
        box-sizing border-box
        &::-webkit-input-placeholder
          color #666
          font-size 14px
        &::-moz-input-placeholder
          color #666
          font-size 14px
        &::-ms-input-placeholder
          color #666
          font-size 14px
    .btn
      a
        display block
        height 30px
        line-height 30px
        border-radius 15px
        color #ffffff
        background #B71C1C
        font-size 14px
        text-align center
        margin-top 20px
        &:active
          background #B71C1C
</style>
