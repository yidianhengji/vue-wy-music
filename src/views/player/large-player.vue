<template>
  <div class="large-player" v-if="song">
    <div class="background">
      <img width="100%" height="100%" :src="song.picUrl" />
    </div>
    <div class="top">
      <div class="back" @click="close">
        <i class="icon iconfont icondown-xiangxia1"></i>
      </div>
      <h1 class="title">{{song.name}}</h1>
      <h2 class="subtitle">{{song.author}}</h2>
    </div>
    <div class="middle">
      <div class="middle-l" ref="middleL">
        <div class="cd-wrapper" ref="cdWrapper">
          <div class="cd" ref="imageWrapper">
            <img class="image rotation" :src="song.picUrl" />
          </div>
        </div>
        <div class="playing-lyric-wrapper">
          <div class="playing-lyric">dfdsf</div>
        </div>
      </div>
      <div class="middle-r" style="display: none;">
        <div class="lyric-wrapper">
          <div class="pure-music">
            <p>dsadsadasd</p>
          </div>
        </div>
      </div>
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
    <audio ref="audio" :autoplay="autoplay" controls="controls"></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      autoplay: false, //是否播放
      isPlay: true
    };
  },
  computed: {
    ...mapGetters({
      song: "song",
      openedPlayer: "openedPlayer"
    })
  },
  mounted() {
    if (this.openedPlayer) {
      this.play();
    }
  },
  methods: {
    close() {
      this.$store.dispatch("app/toggleOpenedPlayer");
    },
    play() {
      this.$nextTick(() => {
        this.$refs.audio.src = this.song.url;
        this.autoplay = true;
      });
    }
  },
  watch: {
    song: function() {
      this.play();
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
  z-index: 11;

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
            animation: rotation 15s linear infinite;
            -moz-animation: rotation 15s linear infinite;
            -webkit-animation: rotation 15s linear infinite;
            -o-animation: rotation 15s linear infinite;
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