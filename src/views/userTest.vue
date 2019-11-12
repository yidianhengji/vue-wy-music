<template>
  <div class="large-player">
    <div class="background">
      <img
        width="100%"
        height="100%"
        src="http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89"
      />
    </div>
    <div class="top">
      <div class="back">
        <i class="icon iconfont icondown-xiangxia1"></i>
      </div>
      <h1 class="title">dddddd</h1>
      <h2 class="subtitle">dddddddddddd</h2>
    </div>
    <div class="middle">
      <div class="middle-l" ref="middleL">
        <div class="cd-wrapper" ref="cdWrapper">
          <div class="cd" ref="imageWrapper">
            <img
              class="image"
              src="http://p1.music.126.net/KP4T1dHHiH0nYdTI0ublVg==/109951164470734422.jpg?imageView&quality=89"
            />
          </div>
        </div>
        <div class="playing-lyric-wrapper">
          <div class="playing-lyric">dfdsf</div>
        </div>
      </div>
      <scroll class="middle-r" style="display: none;">
        <div class="lyric-wrapper">
          <div class="pure-music">
            <p>dsadsadasd</p>
          </div>
        </div>
      </scroll>
    </div>
    <div class="bottom">
      <div class="dot-wrapper">
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>
      <div class="progress-wrapper">
        <span class="time time-l">12</span>
        <div class="progress-bar-wrapper">
          <div class="progress-bar">
            <div class="bar-inner">
              <div class="progress"></div>
              <div class="progress-btn-wrapper">
                <div class="progress-btn"></div>
              </div>
            </div>
          </div>
        </div>
        <span class="time time-r">12</span>
      </div>
      <div class="operators">
        <div class="icon i-left">
          <i class="icon iconfont iconicon-test9"></i>
        </div>
        <div class="icon i-left">
          <i class="icon iconfont iconicon-test3"></i>
        </div>
        <div class="icon i-center">
          <i class="icon iconfont iconicon-test4"></i>
        </div>
        <div class="icon i-right">
          <i class="icon iconfont iconicon-test7"></i>
        </div>
        <div class="icon i-right">
          <i class="icon iconfont iconlove"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lyric from "@/utils/lyric-parser";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentLyric: null,
      lyric:
        "[by:_小浊_]↵[ti:儿时]↵[ar:刘昊霖]↵[al:儿时]↵[00:00.000] 作曲 : 刘昊霖↵[00:01.000] 作词 : 唐映枫↵[00:16.54]铁道旁赤脚追晚霞↵[00:20.96]玻璃珠铁盒英雄卡↵[00:25.48]玩皮筋迷藏石桥下↵[00:30.06]姥姥又纳鞋坐院坝↵[00:34.41]铁门前篮框银杏花↵[00:38.94]茅草屋可有住人家↵[00:43.46]放学路打闹嘻嘻哈↵[00:47.98]田埂间流水哗啦啦↵[00:52.60]我们就一天天长大↵[00:57.03]甜梦中大白兔黏牙↵[01:01.55]也幻想神仙科学家↵[01:06.11]白墙上泥渍简笔画↵[01:10.44]我们就一天天长大↵[01:15.07]四季过老梧桐发芽↵[01:19.59]沙堆里有宝藏和塔↵[01:24.07]长板凳搭起一个家↵[01:46.75]日子总慢得不像话↵[01:51.18]叶落满池塘搬新家↵[01:55.80]二十寸彩电皮沙发↵[02:00.23]五点半大风车动画↵[02:04.71]晚饭后纳凉星夜下↵[02:09.19]萤火虫微风弯月牙↵[02:13.61]大人聊听不懂的话↵[02:18.29]鬼怪都躲在床底下↵[02:22.62]我们就一天天长大↵[02:27.13]记忆里有雨不停下↵[02:31.67]蝉鸣中闷完了暑假↵[02:36.13]新学年又该剪头发↵[02:40.61]我们就一天天长大↵[02:45.08]也开始憧憬和变化↵[02:49.61]曾以为自己多伟大↵[02:54.19]写了诗不敢递给她↵[02:58.56]我们就一天天长大↵[03:03.08]听磁带偶遇榕树下↵[03:07.70]白衬衫黄昏木吉他↵[03:12.33]年少不经事的脸颊↵[03:17.35]呼~呜呼呜~↵[03:53.68]还以为自己多伟大↵[03:58.14]写了诗不敢递给她↵[04:07.39]小小诗不敢递给她↵"
    };
  },
  mounted() {
    this.getLyric();
  },
  computed: {
    ...mapGetters({
      sidebar: "sidebar"
    })
  },
  methods: {
    getLyric() {
      this.currentLyric = new Lyric(this.lyric, this.handleLyric);
    },
    handleLyric({ lineNum, txt }) {
      debugger;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/variable.styl';

.large-player {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: #222;
  z-index: 1000;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
  }

  .top {
    position: relative;
    margin-bottom: 25px;

    .back {
      position: absolute;
      top: 0;
      left: 6px;
      z-index: 50;

      i {
        display: block;
        padding: 9px;
        font-size: 22px;
        color: #fff;
      }
    }

    .title {
      width: 70%;
      margin: 0 auto;
      line-height: 40px;
      text-align: center;
      no-wrap();
      font-size: 18px;
      color: #fff;
    }

    .subtitle {
      line-height: 20px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
  }

  .middle {
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;

    .middle-l {
      display: inline-block;
      vertical-align: top;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 80%;

      .cd-wrapper {
        position: absolute;
        left: 10%;
        top: 0;
        width: 80%;
        box-sizing: border-box;
        height: 100%;

        .cd {
          width: 100%;
          height: 100%;
          border-radius: 50%;

          .image {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border-radius: 50%;
            border: 10px solid rgba(255, 255, 255, 0.1);
          }

          .play {
            animation: rotate 20s linear infinite;
          }
        }
      }

      .playing-lyric-wrapper {
        width: 80%;
        margin: 30px auto 0 auto;
        overflow: hidden;
        text-align: center;

        .playing-lyric {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }

    .middle-r {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .lyric-wrapper {
        width: 80%;
        margin: 0 auto;
        overflow: hidden;
        text-align: center;

        .text {
          line-height: 32px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;

          &.current {
            color: #fff;
          }
        }

        .pure-music {
          padding-top: 50%;
          line-height: 32px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: 50px;
    width: 100%;

    .dot-wrapper {
      text-align: center;
      font-size: 0;

      .dot {
        display: inline-block;
        vertical-align: middle;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);

        &.active {
          width: 20px;
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }

    .progress-wrapper {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0px auto;
      padding: 10px 0;

      .progress-bar-wrapper {
        width: 100%;

        .progress-bar {
          height: 30px;

          .bar-inner {
            position: relative;
            top: 13px;
            height: 4px;
            background: rgba(0, 0, 0, 0.3);

            .progress {
              position: absolute;
              height: 100%;
              background: #ffcd32;
            }

            .progress-btn-wrapper {
              position: absolute;
              left: -8px;
              top: -13px;
              width: 30px;
              height: 30px;

              .progress-btn {
                position: relative;
                top: 7px;
                left: 7px;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                border: 3px solid #fff;
                border-radius: 50%;
                background: #ffcd32;
              }
            }
          }
        }
      }

      .time {
        color: #fff;
        font-size: 12px;
        flex: 0 0 30px;
        line-height: 30px;
        width: 30px;

        &.time-l {
          text-align: left;
        }

        &.time-r {
          text-align: right;
        }
      }
    }

    .operators {
      display: flex;
      align-items: center;

      .icon {
        flex: 1;
        color: #ffcd32;

        i {
          font-size: 30px;
        }
      }

      .i-left {
        text-align: right;
      }

      .i-center {
        padding: 0 20px;
        text-align: center;

        i {
          font-size: 40px;
        }
      }

      .i-right {
        text-align: left;
      }

      .icon-favorite {
        color: #d93f30;
      }
    }
  }
}
</style>