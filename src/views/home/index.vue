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
      <div class="recommend">
        <div class="recommend-title">
          <h3>推荐歌单</h3>
          <span>歌单广场</span>
        </div>
        <ul class="recommend-list">
          <li v-for="(item,index) in 6" :key="index">
            <div class="bg">
              <span>
                <i class="icon iconfont iconbofangsanjiaoxing"></i>6.3万
              </span>
              <img
                src="https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg"
                alt
              />
            </div>
            <p class="details">慢生活· 初冬是适合思念的日子。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="small-player">
      <div class="left">
        <div class="player-bg">
          <img
            class="rotation"
            src="https://p1.music.126.net/Y6Pxw7CWa4vnsEYNm8jWww==/109951164446788933.jpg"
            alt
          />
        </div>
        <div class="player-info">
          <h4>世间美好与你换换相扣</h4>
          <h5>横滑可以切换上下首哦</h5>
        </div>
      </div>
      <div class="right">
        <span class="player">
          <i class="icon iconfont iconzanting"></i>
        </span>
        <span class="list">
          <i class="icon iconfont iconliebiao"></i>
        </span>
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

    .recommend {
      border-top: 1px solid #e3e3e3;
      padding: 15px;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;

      .recommend-title {
        h3 {
          font-size: 20px;
          font-weight: bold;
          color: #3f3f3f;
        }

        span {
          border: 1px solid #eaeaea;
          height: 32px;
          line-height: 32px;
          border-radius: 16px;
          padding: 0 14px;
          color: #363636;
          font-size: 14px;
          position: absolute;
          right: 15px;
          top: 8px;
        }
      }

      .recommend-list {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;

        li {
          flex: 0 0 calc(33.3333% - 7px);
          margin-right: 10px;
          margin-bottom: 20px;

          &:nth-child(3n+3) {
            margin-right: 0px;
          }

          .bg {
            position: relative;
            width: 100%;

            img {
              width: 100%;
              height: 120px;
              border-radius: 10px;
            }

            span {
              position: absolute;
              right: 10px;
              top: 4px;
              color: #ffffff;
              font-size: 12px;
              flex-center();
            }
          }

          .details {
            color: #313131;
            font-size: 14px;
            line-height: 18px;
            margin: 5px 0 0px;
          }
        }
      }
    }
  }

  .small-player {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    overflow: hidden;
    border-top: 1px solid #ebebeb;
    padding: 0 10px;
    box-sizing: border-box;
    background: #ffffff;
    z-index: 999;

    .left {
      height: 100%;
      float: left;
      display: flex;
      align-items: center;

      .player-bg {
        width: 50px;
        height: 50px;
        overflow: hidden;
        margin-right: 10px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        @keyframes rotation {
          from {
            -webkit-transform: rotate(0deg);
          }

          to {
            -webkit-transform: rotate(360deg);
          }
        }

        .rotation {
          -webkit-transform: rotate(360deg);
          animation: rotation 5s linear infinite;
          -moz-animation: rotation 5s linear infinite;
          -webkit-animation: rotation 5s linear infinite;
          -o-animation: rotation 5s linear infinite;
        }
      }

      .player-info {
        h4 {
          color: #353535;
          font-size: 16px;
        }

        h5 {
          margin-top: 6px;
          color: #808080;
          font-size: 14px;
        }
      }
    }

    .right {
      height: 100%;
      float: right;
      display: flex;
      align-items: center;

      .player {
        i {
          color: #555555;
          font-size: 40px;
        }
      }

      .list {
        i {
          color: #555555;
          font-size: 40px;
        }
      }
    }
  }
}
</style>
