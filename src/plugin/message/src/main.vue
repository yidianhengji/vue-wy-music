<template>
  <div class="alert bounceInUp animated" ref="el-message">
    <slot>
      <span>{{message}}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      timer: null,
      duration: 3000,
      message: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.alert {
  position: fixed;
  bottom: 10px;
  transform: translate(0%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  box-sizing: border-box;

  span {
    background: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    font-size: 14px;
    padding: 4px 10px;
    border-radius: 6px;
    display: block;
    line-height: 16px;
  }
}
</style>
