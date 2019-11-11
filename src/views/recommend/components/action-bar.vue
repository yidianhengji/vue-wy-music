<template>
  <div class="action-bar">
    <ul class="action-bar-list">
      <li class="action-bar-item" v-for="(item,index) in barArr" :key="index">
        <div>
          <i :class="item.icon"></i>
        </div>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barArr: [
        { name: "每日推荐", icon: "icon iconfont iconrili" },
        { name: "歌单", icon: "icon iconfont icongedan" },
        { name: "排行榜", icon: "icon iconfont iconpaihangbang" },
        { name: "电台", icon: "icon iconfont iconzhibo1" },
        { name: "直播", icon: "icon iconfont iconzhibo" }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.action-bar {
  margin: 20px 0 30px;
  padding: 0 15px;

  .action-bar-list {
    display: flex;

    .action-bar-item {
      flex: 1;
      text-align: center;

      div {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        flex-center();
        border-radius: 50%;
        gradient(#e96c70, #ff2210);

        i {
          color: #ffffff;
          font-size: 24px;
        }
      }

      p {
        margin-top: 10px;
        color: #3c3c3c;
        font-size: 13px;
      }
    }
  }
}
</style>