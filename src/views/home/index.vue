<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div class="header-icon-list">
          <i class="icon iconfont iconliebiao"></i>
        </div>
        <ul class="header-nav">
          <li>我的</li>
          <li class="active">发现</li>
          <li>云村</li>
          <li>视频</li>
        </ul>
        <div class="header-icon-search">
          <i class="icon iconfont iconsousuo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  }
};
</script>

<style lang="stylus" scoped>
.header {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 48em;
  background: #ffffff;
  display: flex;
  align-items: center;

  .header-content {
    position: relative;
    width: 100%;
    height: 100%;

    .header-icon-list {
      position: absolute;
      left: 0px;
      top: 0px;
    }

    .header-nav {
      padding: 0 48em;
    }
  }
}
</style>
