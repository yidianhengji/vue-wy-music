<template>
  <div class="header">
    <div class="header-content">
      <div class="header-icon-list">
        <i class="icon iconfont iconliebiao"></i>
      </div>
      <ul class="header-nav">
        <li
          v-for="(item,index) in headerNav"
          :key="index"
          class="header-nav-item"
          :class="defalutActiveCurrent===index ? 'active' : ''"
          @click="headerNavItem(index, item.path)"
        >{{item.name}}</li>
      </ul>
      <div class="header-icon-search">
        <i class="icon iconfont iconsousuo"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defalutActiveCurrent: 1,
      headerNav: [
        { name: "我的", path: "/user" },
        { name: "发现", path: "/recommend" },
        { name: "云村", path: "/cloud" },
        { name: "视频", path: "/video" }
      ]
    };
  },
  methods: {
    headerNavItem(index, path) {
      this.defalutActiveCurrent = index;
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 48px;
  background: #ffffff;
  display: flex;
  align-items: center;
  z-index: 999;

  .header-content {
    position: relative;
    width: 100%;
    height: 100%;

    .header-icon-list, .header-icon-search {
      position: absolute;
      top: 0px;
      width: 40px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: #2e2e2e;
        font-size: 24px;
      }
    }

    .header-icon-list {
      left: 0px;
    }

    .header-icon-search {
      right: 0px;
    }

    .header-nav {
      padding: 0 48px;
      height: 100%;
      color: #898989;
      box-sizing: border-box;
      flex-center();

      .header-nav-item {
        color: #898989;
        width: 48px;
        font-size: 14px;
        text-align: center;
        height: 100%;
        flex-center();
        margin: 0 10px;

        &.active {
          font-size: 16px;
          color: #3d3d3d;
          font-weight: bold;
          transition: all 0.5s;
        }

        &:active {
          active-click();
        }
      }
    }
  }
}
</style>