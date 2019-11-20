<template>
  <div class="large-player">
    <g-button>默认按钮</g-button>
    <g-button type="primary">主要按钮</g-button>
    <g-button type="success">成功按钮</g-button>
    <g-button type="info">信息按钮</g-button>
    <g-button type="warning">警告按钮</g-button>
    <g-button type="danger">危险按钮</g-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.large-player {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1000;

  .g-button+.g-button {
    margin-left: 10px;
  }
}
</style>