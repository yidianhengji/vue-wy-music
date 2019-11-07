<template>
  <div class="home">
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
            @click="headerNavItem(index)"
          >{{item}}</li>
        </ul>
        <div class="header-icon-search">
          <i class="icon iconfont iconsousuo"></i>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="carousel">
        <Swipe height="180px" v-model="initialIndex" autoplay>
          <SwipeItem v-for="(item,index) in imgArr" :key="index" :name="index">
            <img style="width: 100%; height:100%;" :src="item.url" />
          </SwipeItem>
        </Swipe>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defalutActiveCurrent: 1,
      headerNav: ["我的", "发现", "云村", "视频"],
      initialIndex: 0,
      imgArr: [
        {
          url:
            "http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/v9HRHiUWjx43IfF5t6VpHw==/109951164470689529.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/A9HPyPW-JWplFLZm2x2cBA==/109951164471348282.jpg?imageView&quality=89"
        },
        {
          url:
            "http://p1.music.126.net/ZiCk9R2hHmbqT1-__7i7jQ==/109951164471046101.jpg?imageView&quality=89"
        }
      ],
      barArr: [
        { name: "每日推荐", icon: "icon iconfont iconrili" },
        { name: "歌单", icon: "icon iconfont icongedan" },
        { name: "排行榜", icon: "icon iconfont iconpaihangbang" },
        { name: "电台", icon: "icon iconfont iconzhibo1" },
        { name: "直播", icon: "icon iconfont iconzhibo" }
      ]
    };
  },
  computed: {},
  methods: {
    headerNavItem(index) {
      this.defalutActiveCurrent = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.home {
  width: 100%;
  height: 100%;

  .header {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 48px;
    background: #ffffff;
    display: flex;
    align-items: center;

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

  .main {
    padding-top: 48px;

    .carousel {
      padding: 0 15px;
    }

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
  }
}
</style>
